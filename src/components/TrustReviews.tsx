import { BookingLink } from "./ActionLinks";
import { Section, SectionHeading, Shell } from "./DesignPrimitives";
import ReviewHighlights from "./ReviewHighlights";

type TrustReviewsProps = {
  compact?: boolean;
  ctaLocation: string;
};

export default function TrustReviews({
  ctaLocation,
}: TrustReviewsProps) {
  return (
    <Section id="reviews" className="bg-[var(--surface)]">
      <Shell>
        <div className="max-w-2xl">
          <SectionHeading
            label="CLIENT REVIEWS"
            title="Trusted by local clients in Issaquah."
          >
            <p>
              Read verified Google reviews from clients who have visited Eastern
              Massage Spa.
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
      </Shell>
    </Section>
  );
}
