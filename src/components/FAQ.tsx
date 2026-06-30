import FAQAccordion from "./FAQAccordion";
import { Section, SectionHeading, Shell } from "./DesignPrimitives";
import { site } from "@/data/site";

export default function FAQ() {
  return (
    <Section id="faq" className="bg-[var(--background)]">
      <Shell narrow>
        <SectionHeading
          label="BOOKING QUESTIONS"
          title="Before your visit."
          className="mx-auto mb-10 text-center"
        >
          <p>
            Helpful details about booking, services, location, and availability.
          </p>
        </SectionHeading>

        <FAQAccordion items={site.faqs} />
      </Shell>
    </Section>
  );
}
