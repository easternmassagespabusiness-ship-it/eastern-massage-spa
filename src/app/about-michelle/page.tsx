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
import { site } from "@/data/site";

const pageUrl = `${site.url}/about-michelle`;

export const metadata: Metadata = {
  title: {
    absolute: "About Michelle | Eastern Massage Spa",
  },
  description:
    "Meet Michelle at Eastern Massage Spa in Issaquah, WA.",
  alternates: {
    canonical: pageUrl,
  },
};

export default function AboutMichellePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <Section className="bg-[var(--background)]">
        <Shell className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          <div>
            <SoftPanel className="p-5">
              <ImageFrame
                src={site.images.michelle}
                alt="Michelle"
                priority
                sizes="(max-width:1024px)100vw,40vw"
                className="h-[560px]"
                imageClassName="object-cover object-center"
              />
            </SoftPanel>
          </div>

          <div>
            <DecorativeRule className="mb-5" />

            <p className="detail-label mb-4">
              MEET MICHELLE
            </p>

            <h1 className="text-5xl font-bold leading-tight text-primary">
              Personalized therapeutic massage in a calm private studio.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              Michelle provides personalized massage therapy in Issaquah,
              with every session tailored to your goals, preferred pressure,
              and the areas that need the most attention.
            </p>

            <p className="mt-5 text-lg leading-8 text-muted">
              Whether you're looking for deep tissue work, therapeutic relief,
              or simply time to relax, every appointment is designed to help
              you feel better when you leave than when you arrived.
            </p>

            <div className="mt-8">
              <BookingLink ctaLocation="about_michelle">
                Book a Massage
              </BookingLink>
            </div>

          </div>

        </Shell>
      </Section>

      <Footer />
    </main>
  );
}
