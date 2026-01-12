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
                This Refund Policy governs refunds for purchases made with Reatch.io (“we”, “us”). Payments are processed by our Merchant of Record, Paddle. Paddle’s terms and refund procedures apply. Paddle may issue refunds in accordance with applicable consumer law and these policies. :contentReference[oaicite:6]{index=6}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Right to Cancel (Consumer)**</h2>
              <p className="leading-relaxed">
                If you are a consumer purchasing our services for personal use, you may cancel your purchase within <strong>14 days</strong> from the date of purchase without providing any reason. To cancel, you must notify us or Paddle before the 14-day period expires. :contentReference[oaicite:7]{index=7}
              </p>
              <p className="leading-relaxed mt-3">
                To ensure prompt handling, use the Paddle refund link in your receipt email or contact us at{" "}
                <a href="mailto:support@reatch.io" className="text-primary hover:underline">
                  support@reatch.io
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Refunds After Cancellation</h2>
              <p className="leading-relaxed">
                If you cancel within the 14-day window, we (through Paddle) will reimburse all payments received from you. Refunds will be made without undue delay and no later than 14 days after we receive your cancellation notification. Refunds will be made using the same payment method you originally used. :contentReference[oaicite:8]{index=8}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Digital Services and Access</h2>
              <p className="leading-relaxed">
                If you begin using digital services (such as accessing your Reatch.io account or using message credits) within the 14-day period, you agree that this constitutes full performance of the transaction and you lose the right to withdraw or refund for that transaction. :contentReference[oaicite:9]{index=9}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Subscription Renewals</h2>
              <p className="leading-relaxed">
                No refunds are provided for automatic subscription renewals. You may cancel future renewals but charges already processed will not be refunded. :contentReference[oaicite:10]{index=10}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Statutory Rights</h2>
              <p className="leading-relaxed">
                This Policy does not affect any non-waivable statutory rights you may have under applicable consumer protection laws. :contentReference[oaicite:11]{index=11}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Chargebacks</h2>
              <p className="leading-relaxed">
                If a chargeback or payment dispute is initiated, your Reatch.io access may be suspended immediately. Paddle reserves the right to refuse refunds in situations of fraud, refund abuse, or manipulative behavior. :contentReference[oaicite:12]{index=12}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <p className="leading-relaxed">
                For questions or assistance with refunds, contact us at{" "}
                <a href="mailto:support@reatch.io" className="text-primary hover:underline">
                  support@reatch.io
                </a>.
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
