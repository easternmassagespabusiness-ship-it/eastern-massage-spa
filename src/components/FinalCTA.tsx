import { BookingLink } from "./ActionLinks";
import { Section, Shell } from "./DesignPrimitives";

export default function FinalCTA() {
  return (
    <Section className="bg-[var(--primary)] text-primary-foreground">
      <Shell className="py-7 text-center md:py-8">
        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-tight md:text-4xl">
          Ready to feel better?
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base opacity-90">
          Book your appointment online and choose the massage experience that
          best fits your needs.
        </p>

        <div className="mt-5 flex justify-center">
          <BookingLink ctaLocation="final_cta">
            Reserve Your Session
          </BookingLink>
        </div>
      </Shell>
    </Section>
  );
}
