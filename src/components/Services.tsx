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
      <div className="mt-16">
  <div className="mx-auto max-w-4xl text-center">
    <h2 className="text-3xl font-semibold text-primary">
      A More Personalized Approach
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
      Every session is tailored to your body, pressure preferences, and areas of concern — with focused therapeutic work in a quiet private studio.
    </p>

    <div className="mt-10 grid gap-8 md:grid-cols-3">
      <div>
        <h3 className="font-semibold text-primary">
          Personalized Pressure
        </h3>
        <p className="mt-2 text-sm text-muted">
          Adjusted throughout your session based on your needs.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-primary">
          Focused Therapeutic Work
        </h3>
        <p className="mt-2 text-sm text-muted">
          More attention where your body needs it most.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-primary">
          Private, Appointment-Only Studio
        </h3>
        <p className="mt-2 text-sm text-muted">
          A quiet setting with one-on-one care.
        </p>
      </div>
    </div>
  </div>
</div>
      </Shell>
    </Section>
  );
}
