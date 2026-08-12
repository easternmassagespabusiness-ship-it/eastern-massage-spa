import Image from "next/image";
import Link from "next/link";
import { BookingLink } from "./ActionLinks";
import { getServiceUrl, site } from "@/data/site";
import { publicHoursText, publicUrl } from "@/utils/publicContent";

export default function Footer() {
  const reviewLinks = site.reviews.sources
    .map((source) => ({ name: source.name, url: publicUrl(source.url) }))
    .filter(
      (source): source is { name: string; url: string } => Boolean(source.url)
    );

  return (
    <footer className="border-t border-primary/10 bg-[var(--surface)] py-8 text-sm md:py-12">
      <div className="mx-auto grid max-w-6xl gap-7 px-4 sm:px-6 md:grid-cols-2 md:gap-10 xl:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="inline-flex"
            aria-label="Eastern Massage Spa home"
          >
            <span className="relative block h-12 w-28 md:h-14 md:w-32">
              <Image
                src={site.images.logo}
                alt={`${site.name} logo`}
                fill
                className="object-contain object-left"
                unoptimized
              />
            </span>
          </Link>

          <p className="mt-3 max-w-sm leading-6 text-muted md:mt-4 md:leading-7">
            A quieter massage experience in Issaquah with Michelle at Eastern
            Massage Spa.
          </p>

          <address className="mt-3 not-italic leading-6 text-muted md:mt-4 md:leading-7">
            {site.address.streetAddress}
            <br />
            {site.address.addressLocality}, {site.address.addressRegion}{" "}
            {site.address.postalCode}
          </address>

          <p className="mt-2 leading-6 text-muted md:mt-3 md:leading-7">
            {publicHoursText(site.hoursText)}
          </p>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row md:mt-5 md:gap-3">
            <BookingLink ctaLocation="footer">
              Reserve Your Session
            </BookingLink>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:gap-3">
          <span className="font-semibold text-primary">Services</span>
          <Link href="/services" className="text-muted hover:text-primary">
            All Massage Services
          </Link>

          {site.services.map((service) => (
            <Link
              key={service.slug}
              href={getServiceUrl(service.slug)}
              className="text-muted hover:text-primary"
            >
              {service.category}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 md:gap-3">
          <span className="font-semibold text-primary">Studio</span>

          <Link href="/about-michelle" className="text-muted hover:text-primary">
            About Michelle
          </Link>

          <Link href="/contact" className="text-muted hover:text-primary">
            Contact and Location
          </Link>

          <Link href="/#reviews" className="text-muted hover:text-primary">
            Reviews
          </Link>

          <Link href="/privacy" className="text-muted hover:text-primary">
            Privacy Policy
          </Link>

          <Link href="/terms" className="text-muted hover:text-primary">
            Terms of Service
          </Link>
        </div>

        <div className="flex flex-col gap-2 md:gap-3">
          <span className="font-semibold text-primary">Review sources</span>

          {reviewLinks.map((source) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary"
            >
              {source.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-7 max-w-6xl border-t border-primary/10 px-4 pt-4 text-xs text-muted sm:px-6 md:mt-10 md:pt-6">
        &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
