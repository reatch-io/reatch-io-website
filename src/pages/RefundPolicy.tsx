import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 11, 2026</p>

          <div className="space-y-8 text-foreground/90">

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                This Refund Policy explains how refunds are handled for services provided by Reatch.io.
                By using our platform and purchasing any subscription or message credits, you agree to the terms outlined below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Subscription Refunds</h2>
              <p className="leading-relaxed">
                Subscription fees are generally non-refundable. Once a subscription period has started,
                we do not offer refunds for unused time, partial months, or early cancellations.
              </p>
              <p className="leading-relaxed mt-3">
                You may cancel your subscription at any time, and your access will remain active until the end of the current billing cycle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Message Credits & Usage-Based Charges</h2>
              <p className="leading-relaxed">
                Message credits and usage-based charges (such as email or WhatsApp messages sent) are non-refundable once consumed.
                This includes successfully sent, attempted, or queued messages.
              </p>
              <p className="leading-relaxed mt-3">
                Due to the nature of communication services and third-party provider costs, we cannot reverse or refund message usage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Failed or Undelivered Messages</h2>
              <p className="leading-relaxed">
                Reatch.io does not guarantee message delivery, as delivery depends on external providers,
                recipient networks, and user data quality. Charges may still apply even if a message is not delivered.
              </p>
              <p className="leading-relaxed mt-3">
                Refunds are not provided for failed, blocked, or undelivered messages unless the failure was caused by a verified system error on our side.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Exceptional Refund Cases</h2>
              <p className="leading-relaxed">
                Refunds may be considered in rare cases such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Duplicate charges due to a billing system error</li>
                <li>Service unavailability caused solely by Reatch.io for an extended period</li>
                <li>Incorrect charges confirmed by our support team</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Any approved refunds will be processed back to the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Free Trials</h2>
              <p className="leading-relaxed">
                Free trials are provided for evaluation purposes only.
                No refunds apply to free trial usage or expired trial periods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Chargebacks & Disputes</h2>
              <p className="leading-relaxed">
                If you believe a charge is incorrect, please contact us before initiating a chargeback.
                Unresolved chargebacks may result in account suspension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Refund Policy, please contact us at{" "}
                <a href="mailto:support@reatch.io" className="text-primary hover:underline">
                  support@reatch.io
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
