// src/app/page.tsx

import Hero from "@/components/Hero";
import About from "@/components/About";
import Reason from "@/components/Reason";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import CaseStudies from "@/components/CaseStudies";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Hero />

      <Container className="py-20">
        <About />
      </Container>

      <Container className="py-20">
        <Reason />
      </Container>

      <Container className="py-20">
        <Services />
      </Container>

      <Container className="py-20">
        <Process />
      </Container>

      <Container className="py-20">
        <Pricing />
      </Container>

      <Container className="py-20">
        <CaseStudies />
      </Container>

      <Container className="py-20">
        <ContactForm />
      </Container>
    </>
  );
}
