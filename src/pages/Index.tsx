import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  const siteUrl = "https://infra-tech-solutions.lovable.app";
  useReveal();

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InfraRise Technologies",
    url: siteUrl,
    logo: `${siteUrl}/favicon.png`,
    description:
      "InfraRise Technologies — DevOps services, Linux administration, Kubernetes, SAP on SUSE Linux, CI/CD pipeline setup, server patching & maintenance, website development, mobile app development, AWS/Azure cloud, AI/ML, and cybersecurity.",
    email: "hello@infrarisetech.com",
    telephone: "+91-8769560336",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rajsamand",
      postalCode: "313301",
      addressCountry: "IN",
    },
    sameAs: [],
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      "DevOps Services",
      "Linux Administration",
      "Kubernetes Services",
      "SAP on SUSE Linux",
      "CI/CD Pipeline Setup",
      "Server Patching & Maintenance",
      "Website Development Company",
      "Mobile App Development",
      "AWS Cloud Services",
      "Azure Cloud Platform",
      "Cybersecurity",
      "AI & ML Solutions",
    ].map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Service", name, provider: { "@type": "Organization", name: "InfraRise Technologies" } },
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        q: "Do you provide DevOps services and Kubernetes consulting?",
        a: "Yes. End-to-end DevOps services, Kubernetes cluster setup, Docker, Terraform, Jenkins/GitHub Actions CI/CD pipeline setup, observability and 24/7 SRE support.",
      },
      {
        q: "Can you handle Linux administration and SAP on SUSE Linux?",
        a: "Yes. Linux administration, SUSE Linux Enterprise Server upgrades, SAP on SUSE Linux deployments, server patching & maintenance and HA cluster configuration.",
      },
      {
        q: "What technologies do you specialize in?",
        a: "React, Next.js, React Native, Flutter, AWS, Azure, Kubernetes, Docker, Terraform, Jenkins, Linux/SUSE administration and modern full-stack technologies.",
      },
    ].map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DevOps Services, Linux Administration & Kubernetes Experts | InfraRise Technologies</title>
        <meta
          name="description"
          content="DevOps services, Linux administration, Kubernetes services, SAP on SUSE Linux, CI/CD pipeline setup, server patching & maintenance, website development and mobile app development by InfraRise Technologies."
        />
        <meta
          name="keywords"
          content="DevOps services, Linux administration, Kubernetes services, SAP on SUSE Linux, CI/CD pipeline setup, server patching and maintenance, website development company, mobile app development, DevOps company India, Kubernetes services India, Linux support, SAP on SUSE Linux, CI/CD services, AWS cloud, Azure cloud, Docker, Terraform, Jenkins, cybersecurity, InfraRise Technologies"
        />
        <link rel="canonical" href={siteUrl + "/"} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#1d4ed8" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InfraRise Technologies" />
        <meta property="og:title" content="DevOps, Linux & Kubernetes Services | SAP on SUSE Linux | InfraRise" />
        <meta
          property="og:description"
          content="DevOps services, Linux administration, Kubernetes, SAP on SUSE Linux, CI/CD pipeline setup, server patching, website & mobile app development."
        />
        <meta property="og:url" content={siteUrl + "/"} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevOps, Linux Admin, Kubernetes & SAP on SUSE | InfraRise" />
        <meta
          name="twitter:description"
          content="DevOps, Linux administration, Kubernetes, SAP on SUSE Linux, CI/CD pipelines, server patching, web & mobile development."
        />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(servicesJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <About />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
