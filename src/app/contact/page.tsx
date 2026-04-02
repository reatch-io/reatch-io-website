import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { breadcrumbSchema } from "@/utils/structuredData";

export const metadata: Metadata = {
  title: "Contact Us — Reachfy.io Customer Support",
  description:
    "Get in touch with Reachfy.io. Our team is here to help with your customer engagement, email marketing, and WhatsApp marketing questions. Contact us today!",
  keywords:
    "contact reachfy, customer support, email marketing support, WhatsApp marketing help, contact form",
  alternates: { canonical: "https://reachfy.io/contact" },
  openGraph: {
    type: "website",
    title: "Contact Us — Reachfy.io Customer Support",
    description:
      "Get in touch with Reachfy.io. Our team is here to help with your questions.",
    url: "https://reachfy.io/contact",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ContactClient />
    </>
  );
}

