import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Product } from "@/components/Product";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { Customers } from "@/components/Customers";
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
import { ChatBot } from "@/components/ChatBot";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  const siteUrl = "https://infra-tech-solutions.lovable.app";
  useReveal();

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": `${siteUrl}/#organization`,
    name: "InfraRise Technologies",
    alternateName: "InfraRise",
    url: siteUrl,
    logo: `${siteUrl}/favicon.png`,
    image: `${siteUrl}/favicon.png`,
    description:
      "InfraRise Technologies provides DevOps, Kubernetes, Linux administration, SAP on SUSE Linux, CI/CD pipeline setup, server patching, AWS & Azure cloud, web & mobile app development, AI/ML and cybersecurity services.",
    email: "hello@infrarisetech.com",
    telephone: "+91-8769560336",
    priceRange: "$$",
    areaServed: ["IN", "US", "GB", "AE", "SG", "AU"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rajsamand",
      addressLocality: "Rajsamand",
      addressRegion: "Rajasthan",
      postalCode: "313301",
      addressCountry: "IN",
    },
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: "+91-8769560336",
      contactType: "customer service",
      email: "hello@infrarisetech.com",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    }],
    sameAs: [],
    knowsAbout: [
      "DevOps", "Kubernetes", "Linux Administration", "SAP on SUSE Linux",
      "CI/CD Pipeline Setup", "Server Patching", "AWS Cloud", "Azure Cloud",
      "Website Development", "Mobile App Development", "AI/ML", "Cybersecurity",
    ],
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "InfraRise Technologies Services",
    itemListElement: [
      "DevOps Services",
      "Kubernetes Services",
      "Linux Administration & Support",
      "SAP on SUSE Linux",
      "CI/CD Pipeline Setup",
      "Server Patching & Maintenance",
      "Website Development",
      "Mobile App Development",
      "AWS Cloud Services",
      "Azure Cloud Platform",
      "Cybersecurity",
      "AI & ML Solutions",
    ].map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name,
        serviceType: name,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Place", name: "Worldwide" },
      },
    })),
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "InfraRise Technologies",
    description: "DevOps, Kubernetes, Linux, SAP on SUSE, CI/CD, AWS & Azure cloud, web & mobile app development.",
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl + "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: siteUrl + "/#services" },
      { "@type": "ListItem", position: 3, name: "Portfolio", item: siteUrl + "/#portfolio" },
      { "@type": "ListItem", position: 4, name: "Contact", item: siteUrl + "/#contact" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What DevOps services does InfraRise Technologies provide?",
        acceptedAnswer: { "@type": "Answer", text: "We deliver end-to-end DevOps services including CI/CD pipeline setup (Jenkins, GitHub Actions, GitLab CI), Kubernetes orchestration, Docker containerization, Terraform infrastructure-as-code, and 24/7 monitoring across AWS and Azure." },
      },
      {
        "@type": "Question",
        name: "Do you offer Kubernetes services in India?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. InfraRise provides Kubernetes consulting, cluster setup, EKS/AKS/GKE management, Helm chart development, and production-grade K8s operations for clients in India and worldwide." },
      },
      {
        "@type": "Question",
        name: "Can you support SAP on SUSE Linux?",
        acceptedAnswer: { "@type": "Answer", text: "Absolutely. We specialize in SAP on SUSE Linux Enterprise Server (SLES for SAP), including HANA installations, SUSE upgrades, kernel patching, high availability and performance tuning." },
      },
      {
        "@type": "Question",
        name: "Do you handle Linux server patching and maintenance?",
        acceptedAnswer: { "@type": "Answer", text: "Yes — we provide scheduled Linux server patching, security updates, kernel upgrades, vulnerability remediation and 24/7 maintenance for RHEL, SUSE, Ubuntu and CentOS environments." },
      },
      {
        "@type": "Question",
        name: "How do I set up a CI/CD pipeline with InfraRise?",
        acceptedAnswer: { "@type": "Answer", text: "We design and implement CI/CD pipelines tailored to your stack — Jenkins, GitHub Actions, GitLab CI, ArgoCD or Azure DevOps — with automated testing, security scanning and zero-downtime deployments." },
      },
      {
        "@type": "Question",
        name: "Are you a website development and mobile app development company?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. We build modern websites with React/Next.js and cross-platform mobile apps with React Native and Flutter, plus native iOS and Android development." },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>InfraRise Cloud — The DevOps platform for production teams | InfraRise Technologies</title>
        <meta
          name="description"
          content="InfraRise Cloud is the DevOps platform for teams running production. Unified CI/CD pipelines, managed Kubernetes, SUSE Linux patching and observability. Request early access."
        />
        <meta
          name="keywords"
          content="DevOps services, DevOps company, Kubernetes services, Kubernetes services India, Linux administration, Linux support, SAP on SUSE Linux, CI/CD pipeline setup, CI/CD services, server patching, server maintenance, website development company, mobile app development, AWS cloud, Azure cloud, Docker, Terraform, Jenkins, InfraRise Technologies"
        />
        <link rel="canonical" href={siteUrl + "/"} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#1d4ed8" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Rajsamand" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InfraRise Technologies" />
        <meta property="og:title" content="InfraRise Technologies — DevOps, Kubernetes, Linux & SAP on SUSE Experts" />
        <meta
          property="og:description"
          content="DevOps, Kubernetes, Linux administration, SAP on SUSE, CI/CD pipelines, server patching, AWS & Azure cloud, website & mobile app development."
        />
        <meta property="og:url" content={siteUrl + "/"} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:secure_url" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="InfraRise Technologies — DevOps, Kubernetes, Linux, SAP on SUSE, CI/CD and Cloud experts" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="InfraRise Technologies — DevOps, Kubernetes & Linux Experts" />
        <meta
          name="twitter:description"
          content="DevOps, Kubernetes, Linux/SAP on SUSE, CI/CD, AWS/Azure cloud, web & mobile development."
        />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:image:alt" content="InfraRise Technologies — DevOps, Kubernetes, Linux & Cloud experts" />

        {/* hreflang (pattern from github.com) */}
        <link rel="alternate" hrefLang="en" href={siteUrl + "/"} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl + "/"} />
        <meta name="color-scheme" content="light dark" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(servicesJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Product />
        <Features />
        <UseCases />
        <Customers />
        <WhyChoose />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
