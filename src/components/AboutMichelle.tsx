import Link from "next/link";
import { BookingLink } from "./ActionLinks";
import {
  DecorativeRule,
  ImageFrame,
  Section,
  SectionHeading,
  Shell,
  SoftPanel,
} from "./DesignPrimitives";
import { site } from "@/data/site";

export default function AboutMichelle() {
  return (
    <Section className="bg-[var(--surface)]">
      <Shell className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div className="relative">
          <SoftPanel className="p-5">
            <ImageFrame
              src={site.images.michelle}
              alt={site.practitioner.photoAlt}
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="h-[420px]"
              imageClassName="object-[center_22%]"
            />
          </SoftPanel>

          <SoftPanel className="absolute -bottom-6 left-5 right-5 p-4">
            <p className="text-sm font-semibold text-primary">
              Michelle
            </p>
          </SoftPanel>
        </div>

        <div className="pt-8 lg:pt-0">
          <DecorativeRule className="mb-5" />

          <SectionHeading
            label="MEET MICHELLE"
            title="Personalized therapeutic massage in a calm private studio."
          >
            <p>
              Michelle provides focused massage therapy in Issaquah, with each
              session tailored to your goals, pressure preference, and areas
              that need attention.
            </p>
          </SectionHeading>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <SoftPanel className="p-5">
              <h3 className="text-lg font-semibold text-primary">
                Focused care
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Sessions are shaped around what your body needs that day,
                whether you want deeper work, targeted relief, or relaxation.
              </p>
            </SoftPanel>

            <SoftPanel className="p-5">
              <h3 className="text-lg font-semibold text-primary">
                Private studio
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                A quiet, appointment-only space designed for comfort, recovery,
                and focused one-on-one care.
              </p>
            </SoftPanel>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookingLink ctaLocation="homepage_about_michelle">
              Book Appointment
            </BookingLink>

            <Link
              href="/about-michelle"
              className="fine-link inline-flex min-h-11 items-center"
            >
              Read About Michelle
            </Link>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
