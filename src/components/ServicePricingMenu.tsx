import Link from "next/link";
import { BookingLink } from "./ActionLinks";
import { getServiceBookingUrl, getServiceUrl, site, type Service } from "@/data/site";
import { publicText } from "@/utils/publicContent";

function priceNumber(price: string) {
  const parsed = Number(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) ? parsed : Number.POSITIVE_INFINITY;
}

function startingPrice(service: Service) {
  const lowest = service.items.reduce((best, item) => {
    return priceNumber(item.price) < priceNumber(best.price) ? item : best;
  }, service.items[0]);

  return lowest?.price ?? "";
}

type ServicePricingMenuProps = {
  compact?: boolean;
  ctaLocation: string;
};

export default function ServicePricingMenu({
  compact = false,
  ctaLocation,
}: ServicePricingMenuProps) {
  return (
    <div className="grid gap-10">
      <section aria-labelledby="massage-menu-heading">
        <div className="mb-8 text-center">
          <h2 id="massage-menu-heading" className="text-3xl font-semibold text-primary">
            Services & Pricing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-muted">
            Clear, personalized massage therapy options in a quiet private studio.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {site.services.map((service) => (
            <article
              key={service.slug}
              className="rounded-2xl border border-primary/10 bg-[var(--surface)] p-6 shadow-[0_10px_30px_rgba(36,53,44,0.07)]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="detail-label mb-2">
                    From {startingPrice(service)}
                  </p>
                  <h3 className="text-2xl font-semibold leading-tight text-primary">
                    {service.category}
                  </h3>
                  {service.subtitle ? (
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {service.subtitle}
                    </p>
                  ) : null}
                </div>
              </div>

              <p className="mb-6 leading-7 text-muted">
                {publicText(service.description, service.category)}
              </p>

              <div className="mb-6 space-y-3">
                {service.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between border-b border-primary/10 pb-3 last:border-b-0"
                  >
                    <span className="text-foreground">{item.name}</span>
                    <strong className="text-xl font-semibold text-primary">
                      {item.price}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <BookingLink
                  href={getServiceBookingUrl(service)}
                  serviceName={service.category}
                  ctaLocation={ctaLocation}
                >
                  {compact ? "Book Online" : service.bookingLabel}
                </BookingLink>

                <Link
                  href={getServiceUrl(service.slug)}
                  className="fine-link inline-flex min-h-11 items-center"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="enhancements-menu-heading">
        <div className="mb-8 text-center">
          <h2 id="enhancements-menu-heading" className="text-3xl font-semibold text-primary">
            Enhancements
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-muted">
            Optional add-ons may be selected during online booking.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {site.addons.map((addon) => (
            <article
              key={addon.name}
              className="rounded-2xl border border-primary/10 bg-[var(--surface)] p-5 shadow-[0_8px_24px_rgba(36,53,44,0.06)]"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug text-primary">
                  {addon.name}
                </h3>
                <strong className="text-lg text-foreground">
                  {addon.price}
                </strong>
              </div>

              <p className="text-sm leading-6 text-muted">
                {publicText(addon.description, addon.name)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
