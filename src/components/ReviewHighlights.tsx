import { site } from "@/data/site";
import { hasPlaceholder, publicUrl } from "@/utils/publicContent";
import { cx } from "./DesignPrimitives";

type ReviewHighlightsProps = {
  compact?: boolean;
  className?: string;
};

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" />
      <path fill="#FBBC05" d="M5.84 14.09A6.6 6.6 0 0 1 5.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A10.94 10.94 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l3.66-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z" />
    </svg>
  );
}

function StarRow() {
  return (
    <div
      className="flex items-center gap-0.5 text-[var(--decorative-gold)]"
      aria-label="Google 4.9 out of 5 average rating"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-current will-change-auto"
        >
          <path d="m10 1.7 2.35 4.77 5.26.76-3.8 3.71.9 5.24L10 13.7l-4.7 2.48.9-5.24-3.81-3.71 5.26-.76L10 1.7Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewHighlights({
  compact = false,
  className,
}: ReviewHighlightsProps) {
  const googleSource = site.reviews.sources.find(
    (source) => source.name === "Google"
  );

  const url = googleSource ? publicUrl(googleSource.url) : "";
  const rating = "4.9";
  const count = "82";

  const cardClass = cx(
    "group rounded-lg border border-primary/10 bg-[var(--surface)] p-4 shadow-[0_4px_14px_rgba(36,53,44,0.08)] transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary will-change-[border-color,box-shadow]",
    url ? "hover:border-primary/30" : ""
  );

  const inner = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="flex min-w-0 items-center">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/10 bg-white shadow-[0_1px_3px_rgba(36,53,44,0.08)]">
            <GoogleMark />
          </span>
          <span className="sr-only">Google</span>
        </span>
        <StarRow />
      </div>

      <p className="mt-3 text-2xl font-semibold leading-none text-foreground">
        {rating}
      </p>

      <p className="mt-2 text-sm font-semibold leading-5 text-muted">
        average from {count} reviews
      </p>
    </>
  );

  return (
    <div
      aria-label="Eastern Massage Spa Google review rating"
      className={cx(
        "grid gap-3 sm:grid-cols-1",
        compact ? "" : "max-w-md",
        className
      )}
    >
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass}
        >
          {inner}
        </a>
      ) : (
        <div className={cardClass}>{inner}</div>
      )}
    </div>
  );
}
