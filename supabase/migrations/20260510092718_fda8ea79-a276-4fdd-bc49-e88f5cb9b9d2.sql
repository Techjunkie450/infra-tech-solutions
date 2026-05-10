
-- Roles enum + user_roles table (security best practice)
create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

create policy "Users can view their own roles"
on public.user_roles for select
to authenticated
using (auth.uid() = user_id);

-- Contact submissions table
create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text,
  email text not null,
  phone text,
  company text,
  service text,
  budget text,
  timeline text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- Anyone can submit the contact form
create policy "Anyone can submit contact form"
on public.contact_submissions for insert
to anon, authenticated
with check (
  length(first_name) between 1 and 100
  and length(email) between 3 and 255
  and length(message) between 1 and 5000
);

-- Only admins can read submissions
create policy "Admins can read submissions"
on public.contact_submissions for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));
