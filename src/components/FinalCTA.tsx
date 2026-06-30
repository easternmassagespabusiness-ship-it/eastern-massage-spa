import { BookingLink } from "./ActionLinks";
import { Section, Shell } from "./DesignPrimitives";

export default function FinalCTA() {
  return (
    <Section className="bg-[var(--primary)] text-primary-foreground">
      <Shell className="py-20 text-center">
        <h2 className="mx-auto max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
          Ready to feel better?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
          Book your appointment online and choose the massage experience that
          best fits your needs.
        </p>

        <div className="mt-10 flex justify-center">
          <BookingLink ctaLocation="final_cta">
            Book Appointment
          </BookingLink>
        </div>
      </Shell>
    </Section>
  );
}
