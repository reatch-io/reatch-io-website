import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import { useState } from "react";

const pricingTiers = [
  {
    name: "Starter",
    messages: 1000,
    price: 50,
    popular: false,
    features: [
      "1,000 messages",
      "Email channel",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Growth",
    messages: 5000,
    price: 225,
    popular: true,
    features: [
      "5,000 messages",
      "Email & WhatsApp channels",
      "Advanced analytics",
      "Priority support",
      "Custom templates",
    ],
  },
  {
    name: "Enterprise",
    messages: 20000,
    price: 800,
    popular: false,
    features: [
      "20,000 messages",
      "All channels",
      "Full analytics suite",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
];

const PricingSection = () => {
  const [customMessages, setCustomMessages] = useState(10000);
  const pricePerMessage = 0.05;
  const customPrice = (customMessages * pricePerMessage).toFixed(2);

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
            Pay only for what you use. Each message costs just <span className="text-primary font-semibold">$0.05</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                tier.popular
                  ? "bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary shadow-lg scale-105"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </span>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                  <MessageSquare className="w-5 h-5" />
                  <span>{tier.messages.toLocaleString()} messages</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">${tier.price}</span>
                  <span className="text-muted-foreground">/pack</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "hero" : "outline"}
                className="w-full"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Calculator */}
        <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">
            Custom Amount
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            Need a specific number of messages? Calculate your price below.
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
                ({customMessages.toLocaleString()} × $0.05 per message)
              </p>
            </div>

            <Button variant="hero" className="w-full">
              Purchase Messages <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
