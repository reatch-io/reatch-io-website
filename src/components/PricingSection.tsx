import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const PricingSection = () => {
  const [tcoins, setTcoins] = useState(10000);
  const pricePerTcoin = 0.001;
  const totalPrice = (tcoins * pricePerTcoin).toFixed(2);

  const emailsCount = tcoins;
  const whatsappCount = Math.floor(tcoins / 100);

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
            Simple TCoin-Based Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Buy TCoins and use them as you go.{" "}
            <span className="text-primary font-semibold">1 TCoin = $0.001</span>
          </p>
        </div>

        {/* Usage Rates */}
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4 mb-8">
          <div className="bg-card rounded-xl border border-border p-6 text-center">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-2xl font-bold text-foreground">1 TCoin</p>
            <p className="text-muted-foreground">per Email</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-6 text-center">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-2xl font-bold text-foreground">100 TCoins</p>
            <p className="text-muted-foreground">per WhatsApp</p>
          </div>
        </div>

        {/* TCoin Calculator */}
        <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">
            Buy TCoins
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            Slide to select how many TCoins you want to purchase
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Number of TCoins
              </label>
              <input
                type="range"
                min="1000"
                max="1000000"
                step="1000"
                value={tcoins}
                onChange={(e) => setTcoins(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>1,000</span>
                <span className="text-primary font-semibold text-lg">
                  {tcoins.toLocaleString()} TCoins
                </span>
                <span>1,000,000</span>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <p className="text-muted-foreground mb-2">Your Price</p>
              <p className="text-4xl font-bold text-foreground">${totalPrice}</p>
              <p className="text-sm text-muted-foreground mt-2">
                ({tcoins.toLocaleString()} × $0.001 per TCoin)
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <p className="text-sm text-muted-foreground text-center mb-3">This gives you:</p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <p className="text-xl font-bold text-foreground">{emailsCount.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Emails</p>
                </div>
                <div className="text-muted-foreground">or</div>
                <div className="text-center">
                  <p className="text-xl font-bold text-foreground">{whatsappCount.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">WhatsApp Messages</p>
                </div>
              </div>
            </div>

            <Button variant="hero" className="w-full"
                    onClick={() => window.open("https://app.reatch.io", "_blank")}>
              Purchase TCoins <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;