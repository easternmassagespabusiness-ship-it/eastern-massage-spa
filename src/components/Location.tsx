import { BookingLink, DirectionsLink } from "./ActionLinks";
import { Section, SectionHeading, Shell, SoftPanel } from "./DesignPrimitives";
import HoursList from "./HoursList";
import { site } from "@/data/site";

export default function Location() {
  const mapQuery = encodeURIComponent(
    `${site.address.streetAddress} ${site.address.addressLocality}, ${site.address.addressRegion} ${site.address.postalCode}`
  );

  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <Section id="location" className="bg-[var(--surface)]">
      <Shell>
        <SectionHeading
          label="LOCATION"
          title="Visit Eastern Massage Spa in Issaquah."
        >
          <p>
            Located on NW Gilman Blvd with convenient access for clients in
            Issaquah and nearby Eastside communities.
          </p>
        </SectionHeading>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <SoftPanel className="overflow-hidden p-0">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-primary">Address</h3>
              <address className="mt-4 not-italic leading-7 text-muted">
                {site.address.streetAddress}
                <br />
                {site.address.addressLocality}, {site.address.addressRegion}{" "}
                {site.address.postalCode}
              </address>

              <div className="mt-6">
                <DirectionsLink ctaLocation="homepage_location">
                  Get Directions
                </DirectionsLink>
              </div>
            </div>

            <div className="relative min-h-72 border-t border-primary/10 bg-[var(--surface-alt)] lg:min-h-[320px]">
              <iframe
                width="100%"
                height="100%"
                src={
                  site.mapEmbedUrlPlaceholder.startsWith("http")
                    ? site.mapEmbedUrlPlaceholder
                    : mapEmbedUrl
                }
                title="Google Map of Eastern Massage Spa in Issaquah"
                className="absolute inset-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </SoftPanel>

          <SoftPanel className="p-6">
            <h3 className="mb-5 text-2xl font-semibold text-primary">
              Hours & booking
            </h3>

            <HoursList />

            <div className="mt-8 border-t border-primary/10 pt-6">
              <p className="leading-7 text-muted">
                Online booking shows current availability, service lengths, and
                pricing before you schedule.
              </p>

              <div className="mt-5">
                <BookingLink
                  ctaLocation="homepage_location"
                  className="w-full sm:w-auto"
                >
                  Book Appointment
                </BookingLink>
              </div>
            </div>
          </SoftPanel>
        </div>
      </Shell>
    </Section>
  );
}
