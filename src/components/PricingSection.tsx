import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const PricingSection = () => {
  const [customMessages, setCustomMessages] = useState(10000);
  const pricePerMessage = 0.09;
  const customPrice = (customMessages * pricePerMessage).toFixed(2);

    useEffect(() => {
        if (window.location.hash === "#pricing") {
          const el = document.getElementById("pricing");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, []);

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Message-Based Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pay only for what you use. Each message costs just{" "}
            <span className="text-primary font-semibold">$0.09</span>
          </p>
        </div>

        {/* Message Calculator */}
        <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">
            Calculate Your Price
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            Slide to select how many messages you need
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Number of Messages
              </label>
              <input
                type="range"
                min="100"
                max="100000"
                step="100"
                value={customMessages}
                onChange={(e) => setCustomMessages(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>100</span>
                <span className="text-primary font-semibold text-lg">
                  {customMessages.toLocaleString()} messages
                </span>
                <span>100,000</span>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <p className="text-muted-foreground mb-2">Your Price</p>
              <p className="text-4xl font-bold text-foreground">${customPrice}</p>
              <p className="text-sm text-muted-foreground mt-2">
                ({customMessages.toLocaleString()} × $0.09 per message)
              </p>
            </div>

            <Button variant="hero" className="w-full"
                    onClick={() => window.open("https://app.reatch.io", "_blank")}>
              Purchase Messages <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;