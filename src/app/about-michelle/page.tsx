import type { Metadata } from "next";
import { BookingLink } from "@/components/ActionLinks";
import {
  DecorativeRule,
  ImageFrame,
  Section,
  Shell,
  SoftPanel,
} from "@/components/DesignPrimitives";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrustReviews from "@/components/TrustReviews";
import { site } from "@/data/site";

const pageUrl = `${site.url}/about-michelle`;
const title = "About Michelle | Eastern Massage Spa in Issaquah, WA";
const description =
  "Learn about Michelle and the personalized massage experience at Eastern Massage Spa in Issaquah, WA.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    images: [
      {
        url: site.images.og,
        width: 1200,
        height: 630,
        alt: `${site.name} treatment room in Issaquah`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.images.og],
  },
};

export default function AboutMichellePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <Section className="bg-[var(--background)]">
        <Shell className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative">
            <SoftPanel className="p-5">
              <ImageFrame
                src={site.images.michelle}
                alt={site.practitioner.photoAlt}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-[520px]"
                imageClassName="object-[center_20%]"
              />
            </SoftPanel>
          </div>

          <div>
            <DecorativeRule className="mb-5" />
            <p className="detail-label mb-4">MEET MICHELLE</p>

            <h1 className="text-4xl font-bold leading-[1.08] text-primary md:text-5xl lg:text-6xl">
              Personalized massage care in Issaquah.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Every session is tailored to your goals, whether you are looking
              for deep tissue work, therapeutic massage, or relaxation. Michelle
              focuses on thoughtful, one-on-one care in a calm private studio.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookingLink ctaLocation="about_michelle">
                Book a Massage
              </BookingLink>
            </div>
          </div>
        </Shell>
      </Section>

      <Section className="bg-[var(--surface)]">
        <Shell className="grid gap-8 md:grid-cols-2">
          <SoftPanel className="p-6">
            <h2 className="text-2xl font-semibold text-primary">
              Focused care
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Sessions are shaped around what your body needs that day, whether
              you want deeper work, targeted relief, or time to unwind.
            </p>
          </SoftPanel>

          <SoftPanel className="p-6">
            <h2 className="text-2xl font-semibold text-primary">
              Private studio
            </h2>
            <p className="mt-4 leading-7 text-muted">
              A quiet, appointment-only space designed for comfort, recovery,
              and focused one-on-one care.
            </p>
          </SoftPanel>
        </Shell>
      </Section>

      <TrustReviews compact ctaLocation="about_michelle_reviews" />
      <Footer />
    </main>
  );
}
