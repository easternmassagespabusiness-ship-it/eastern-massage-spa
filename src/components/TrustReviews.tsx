import { BookingLink } from "./ActionLinks";
import { Section, SectionHeading, Shell, SoftPanel } from "./DesignPrimitives";
import ReviewHighlights from "./ReviewHighlights";
import { site } from "@/data/site";
import { hasPlaceholder, publicTestimonial } from "@/utils/publicContent";

type TrustReviewsProps = {
  compact?: boolean;
  ctaLocation: string;
};

export default function TrustReviews({
  compact = false,
  ctaLocation,
}: TrustReviewsProps) {
  const testimonials = site.reviews.testimonials
    .filter((testimonial) => testimonial.quote && !hasPlaceholder(testimonial.quote))
    .slice(0, compact ? 2 : 3);

  return (
    <Section id="reviews" className="bg-[var(--surface)]">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              label="CLIENT REVIEWS"
              title="Trusted by local clients in Issaquah."
            >
              <p>
                Clients choose Eastern Massage Spa for focused care, a calm
                studio environment, and massage sessions tailored to their needs.
              </p>
            </SectionHeading>

            <div className="mt-7">
              <ReviewHighlights />
            </div>

            <div className="mt-7">
              <BookingLink ctaLocation={ctaLocation}>
                Book Appointment
              </BookingLink>
            </div>
          </div>

          {testimonials.length > 0 ? (
            <div className="grid gap-4">
              {testimonials.map((testimonial, index) => (
                <SoftPanel key={`testimonial-${index}`} className="p-6">
                  <blockquote className="text-base leading-8 text-foreground">
                    &quot;{publicTestimonial(testimonial.quote)}&quot;
                  </blockquote>
                  <p className="mt-5 text-sm font-semibold text-secondary">
                    {testimonial.author} · {testimonial.source}
                  </p>
                </SoftPanel>
              ))}
            </div>
          ) : null}
        </div>
      </Shell>
    </Section>
  );
}
