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
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Refund Window</h2>
              <p className="leading-relaxed">
                Refund requests must be submitted within <strong>7 calendar days</strong> of the original purchase date.
                Any requests submitted after this period will be automatically rejected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Subscription Refunds</h2>
              <p className="leading-relaxed">
                All subscription fees are non-refundable. Once a subscription period has started,
                no refunds are provided for unused time, partial months, or early cancellations.
              </p>
              <p className="leading-relaxed mt-3">
                You may cancel your subscription at any time. Your access will remain active until the end of the current billing cycle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Message Credits & Usage-Based Charges</h2>
              <p className="leading-relaxed">
                All message credits and usage-based charges are non-refundable once purchased or consumed.
                This includes sent, attempted, queued, failed, or undelivered messages.
              </p>
              <p className="leading-relaxed mt-3">
                Message usage cannot be reversed or refunded under any circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Message Delivery</h2>
              <p className="leading-relaxed">
                Reatch.io does not guarantee message delivery. Charges apply regardless of delivery status,
                recipient response, or network conditions.
              </p>
              <p className="leading-relaxed mt-3">
                No refunds are provided for blocked, filtered, delayed, or undelivered messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Billing Errors</h2>
              <p className="leading-relaxed">
                All charges are final. No refunds are issued for billing disputes, duplicate charges,
                service interruptions, or incorrect usage claims.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Free Trials</h2>
              <p className="leading-relaxed">
                Free trials are provided for evaluation purposes only.
                No refunds apply to free trial usage or expired trial periods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Chargebacks & Disputes</h2>
              <p className="leading-relaxed">
                Initiating chargebacks or payment disputes may result in immediate account suspension
                and permanent service termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
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
