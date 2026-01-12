import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";

const TermsOfService = () => {
  return (
      <div className="min-h-screen bg-background">
        <Navbar/>
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 11, 2026</p>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the ReatchIO platform ("Reatch", "we", "our", or "us"), you agree to be bound by these
                  Terms & Conditions and all applicable laws and regulations. If you do not agree, you must not use our Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ReatchIO provides a customer engagement platform that enables businesses to communicate with their customers
                  through channels such as email and WhatsApp. Our Services include message delivery, campaign management,
                  analytics, and related engagement tools.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To access the Services, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Keeping your login credentials secure and confidential</li>
                  <li>All activities performed under your account</li>
                  <li>Providing accurate and up-to-date registration information</li>
                  <li>Immediately notifying us of any unauthorized access</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Acceptable Use Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to use the Services to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Send spam, bulk unsolicited, or deceptive messages</li>
                  <li>Violate any local, national, or international laws</li>
                  <li>Infringe intellectual property or privacy rights</li>
                  <li>Transmit malware, harmful code, or abusive content</li>
                  <li>Harass, exploit, or harm others</li>
                  <li>Attempt to bypass security or access restricted systems</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payments, Billing & Refunds</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ReatchIO operates on a subscription and/or usage-based pricing model. Fees are charged in advance and are
                  non-refundable, except where required by law or as stated in our Refund Policy. Message credits are deducted
                  upon use, including attempted or failed deliveries. We reserve the right to change pricing with prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Message Delivery Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Message delivery is dependent on third-party providers, recipient networks, and user data accuracy.
                  ReatchIO does not guarantee message delivery or response rates and is not responsible for blocked,
                  filtered, or undelivered messages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, software, and platform features are owned by ReatchIO or its licensors and are protected
                  by intellectual property laws. You may not copy, modify, distribute, or reverse engineer any part of the
                  Services without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, ReatchIO shall not be liable for any indirect, incidental,
                  consequential, or punitive damages, including loss of profits, data, or business opportunities,
                  arising from your use of the Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We aim to provide reliable service but do not guarantee uninterrupted availability. Services may be
                  suspended for maintenance, security, or operational reasons without liability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may suspend or terminate your account for violations of these Terms or misuse of the Services.
                  Upon termination, your access will immediately cease. Certain provisions will survive termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to These Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms at any time. Material changes will be communicated via email or the platform.
                  Continued use of the Services constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions regarding these Terms & Conditions, please contact us at{" "}
                  <a href="mailto:legal@reatch.io" className="text-primary hover:underline">
                    legal@reatch.io
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

export default TermsOfService;
