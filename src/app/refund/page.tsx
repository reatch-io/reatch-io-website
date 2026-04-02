import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articleSchema } from "@/utils/structuredData";

const schema = articleSchema({
  title: "Refund Policy — Reachfy.io",
  description: "Refund Policy for Reachfy.io customer engagement platform",
  datePublished: "2026-01-11",
  dateModified: "2026-01-11",
});

export const metadata: Metadata = {
  title: "Refund Policy — Reachfy.io",
  description:
    "Learn about Reachfy.io's refund policy. Understand our terms for refunds and cancellations for our customer engagement platform services.",
  alternates: { canonical: "https://reachfy.io/refund" },
  openGraph: {
    type: "website",
    title: "Refund Policy — Reachfy.io",
    description:
      "Learn about Reachfy.io's refund policy and cancellation terms.",
    url: "https://reachfy.io/refund",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Refund Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: January 11, 2026
          </p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="leading-relaxed">
                This Refund Policy governs refunds for purchases made with
                ReachfyIO ("we", "us"). Payments are processed by our Merchant of
                Record, Paddle. Paddle's terms and refund procedures apply.
                Paddle may issue refunds in accordance with applicable consumer
                law and these policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Right to Cancel (Consumer)
              </h2>
              <p className="leading-relaxed">
                If you are a consumer purchasing our services for personal use,
                you may cancel your purchase within <strong>14 days</strong>{" "}
                from the date of purchase without providing any reason. To
                cancel, you must notify us or Paddle before the 14-day period
                expires.
              </p>
              <p className="leading-relaxed mt-3">
                To ensure prompt handling, use the Paddle refund link in your
                receipt email or contact us at{" "}
                <a
                  href="mailto:support@reachfy.io"
                  className="text-primary hover:underline"
                >
                  support@reachfy.io
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Refunds After Cancellation
              </h2>
              <p className="leading-relaxed">
                If you cancel within the 14-day window, we (through Paddle)
                will reimburse all payments received from you. Refunds will be
                made without undue delay and no later than 14 days after we
                receive your cancellation notification. Refunds will be made
                using the same payment method you originally used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Digital Services and Access
              </h2>
              <p className="leading-relaxed">
                If you begin using digital services (such as accessing your
                ReachfyIO account or using message credits) within the 14-day
                period, you agree that this constitutes full performance of the
                transaction and you lose the right to withdraw or refund for
                that transaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Subscription Renewals
              </h2>
              <p className="leading-relaxed">
                No refunds are provided for automatic subscription renewals. You
                may cancel future renewals but charges already processed will
                not be refunded.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Statutory Rights
              </h2>
              <p className="leading-relaxed">
                This Policy does not affect any non-waivable statutory rights
                you may have under applicable consumer protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Chargebacks
              </h2>
              <p className="leading-relaxed">
                If a chargeback or payment dispute is initiated, your ReachfyIO
                access may be suspended immediately. Paddle reserves the right
                to refuse refunds in situations of fraud, refund abuse, or
                manipulative behavior.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Contact Us
              </h2>
              <p className="leading-relaxed">
                For questions or assistance with refunds, contact us at{" "}
                <a
                  href="mailto:support@reachfy.io"
                  className="text-primary hover:underline"
                >
                  support@reachfy.io
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

