import ServicePricingMenu from "./ServicePricingMenu";
import { Section, SectionHeading, Shell } from "./DesignPrimitives";

export default function Services() {
  return (
    <Section
      id="services"
      className="bg-[var(--background)] py-20"
    >
      <Shell>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            label="OUR SERVICES"
            title="Choose the massage experience that's right for you."
          />

          <p className="mt-6 text-lg text-muted">
            Every session is personalized to your goals, whether you want
            deep muscle recovery, therapeutic treatment, or complete relaxation.
          </p>
        </div>

        <div className="mt-14">
          <ServicePricingMenu
            compact
            ctaLocation="homepage_pricing_menu"
          />
        </div>
      </Shell>
    </Section>
  );
}
