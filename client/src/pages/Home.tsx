import Layout from "@/components/Layout";
import {
  HeroSection,
  AboutSection,
  TimelineSection,
  ServicesSection,
  ExperienceSection,
  WhyHireSection,
  TestimonialsSection,
  TransformationSection,
  FaqSection,
  ContactSection,
} from "@/components/home";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Sobre Mim Section */}
      <section id="sobre" className="py-20 bg-white dark:bg-slate-900">
        <AboutSection />
        <TimelineSection />
      </section>

      {/* Serviços Section */}
      <ServicesSection />

      {/* Por que contratar (Experiência) */}
      <ExperienceSection />

      {/* Por que contratar uma consultoria financeira */}
      <WhyHireSection />

      {/* Depoimentos/Social Proof Section */}
      <TestimonialsSection />

      {/* Transformação Section (Antes e Depois) */}
      <TransformationSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA / Contato Section */}
      <ContactSection />
    </Layout>
  );
}
