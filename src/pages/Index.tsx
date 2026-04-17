import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  const siteUrl = "https://infra-tech-solutions.lovable.app";

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InfraRise Technologies",
    url: siteUrl,
    logo: `${siteUrl}/favicon.png`,
    description:
      "InfraRise Technologies — Web design, mobile apps, AWS & Azure cloud, DevOps, AI/ML, cybersecurity, and IT infrastructure services.",
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
      "Web Design & Development",
      "Mobile App Development",
      "AWS Cloud Services",
      "Azure Cloud Platform",
      "DevOps Services",
      "IT Infrastructure",
      "Data Center Solutions",
      "Cybersecurity",
      "Website Hosting & SSL",
      "AI & ML Solutions",
    ].map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Service", name, provider: { "@type": "Organization", name: "InfraRise Technologies" } },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>InfraRise Technologies | IT Infrastructure, Cloud & Web Development</title>
        <meta
          name="description"
          content="InfraRise Technologies delivers web & mobile development, AWS/Azure cloud, DevOps, AI/ML, cybersecurity and enterprise IT infrastructure services."
        />
        <link rel="canonical" href={siteUrl + "/"} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#1d4ed8" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InfraRise Technologies" />
        <meta property="og:title" content="InfraRise Technologies | Scalable IT Infrastructure & Cloud" />
        <meta
          property="og:description"
          content="End-to-end IT solutions: web, mobile, cloud (AWS/Azure), DevOps, AI/ML, cybersecurity, and data center services."
        />
        <meta property="og:url" content={siteUrl + "/"} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="InfraRise Technologies | IT Infrastructure & Cloud" />
        <meta
          name="twitter:description"
          content="Scalable web, mobile, cloud, DevOps, AI/ML, and cybersecurity services."
        />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(servicesJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
