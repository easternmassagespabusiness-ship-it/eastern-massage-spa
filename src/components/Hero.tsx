import Link from "next/link";
import { BookingLink, CTAGroup } from "./ActionLinks";
import { DecorativeRule, ImageFrame, Shell } from "./DesignPrimitives";
import ReviewHighlights from "./ReviewHighlights";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="retreat-hero bg-[var(--background)]">
      <Shell className="py-14 md:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="reveal-soft">
            <DecorativeRule className="mb-5" />

            <p className="detail-label mb-4">
  Licensed Massage Therapy · Issaquah, WA
</p>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-primary md:text-5xl lg:text-6xl">
  Therapeutic Massage
  <br />
  Designed Around You.
</h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
  Personalized therapeutic massage, deep tissue treatment,
  relaxation massage, and dynamic cupping therapy in a quiet,
  appointment-only studio in Issaquah.
</p>
<ReviewHighlights className="mt-7" /> 
            

            <CTAGroup className="mt-8">
              <BookingLink ctaLocation="homepage_hero">
                Book Appointment
              </BookingLink>

              <Link
                href="#services"
                className="fine-link inline-flex min-h-11 items-center"
              >
                View Services
              </Link>
            </CTAGroup>
          </div>

          <div className="relative min-h-[390px] md:min-h-[500px]">
            <ImageFrame
  src={site.images.hero}
  alt="Private massage therapy room at Eastern Massage Spa in Issaquah"
  priority
  sizes="(max-width: 1024px) 100vw, 46vw"
  className="absolute inset-x-0 top-0 h-[380px] md:h-[480px]"
  imageClassName="object-[60%_center]"
/>
          </div>
        </div>
      </Shell>
    </section>
  );
}
