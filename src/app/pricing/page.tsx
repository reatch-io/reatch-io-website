import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import { breadcrumbSchema } from "@/utils/structuredData";

export const metadata: Metadata = {
  title: "Pricing Plans — Reachfy.io Customer Engagement Platform",
  description:
    "Choose the perfect plan for your business. From free tier to enterprise solutions, Reachfy.io offers flexible pricing for email and WhatsApp marketing automation. Start free today!",
  keywords:
    "pricing, email marketing pricing, WhatsApp marketing cost, marketing automation pricing, customer engagement pricing, SaaS pricing",
  alternates: { canonical: "https://reachfy.io/pricing" },
  openGraph: {
    type: "website",
    title: "Pricing Plans — Reachfy.io Customer Engagement Platform",
    description:
      "Choose the perfect plan for your business. Start free today!",
    url: "https://reachfy.io/pricing",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Pricing", url: "/pricing" },
]);

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Navbar />
      <PricingSection />
      <Footer />
    </div>
  );
}

