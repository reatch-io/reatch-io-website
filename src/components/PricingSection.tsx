"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";
import { useState, useEffect } from "react";

// ── Agency Plans ──────────────────────────────────────────────────────────────

const agencyPlans = [
  {
    name: "Starter",
    monthlyPrice: 35,
    annualPrice: 28,
    annualTotal: 336,
    description: "For small agencies managing a handful of clients.",
    workspaces: "5",
    teamSeats: "1",
    contacts: "10,000",
    emails: "30,000",
    popular: false,
  },
  {
    name: "Scale",
    monthlyPrice: 200,
    annualPrice: 150,
    annualTotal: 1800,
    description: "For growing agencies scaling across more clients.",
    workspaces: "15",
    teamSeats: "2",
    contacts: "75,000",
    emails: "225,000",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 1200,
    annualPrice: 950,
    annualTotal: 11400,
    description: "For large agencies managing enterprise-scale campaigns.",
    workspaces: "35",
    teamSeats: "5",
    contacts: "Unlimited",
    emails: "1,750,000",
    popular: false,
  },
];

const agencyFeatures = [
  { label: "Email Campaigns",                    values: [true, true, true] },
  { label: "WhatsApp Outbound (Meta Cloud API)", values: [true, true, true] },
  { label: "Campaign Scheduling",                values: [true, true, true] },
  { label: "Email Templates",                    values: [true, true, true] },
  { label: "WhatsApp Templates",                 values: [true, true, true] },
  { label: "Basic Segmentation",                 values: [true, true, true] },
  { label: "Event-Triggered Campaigns",          values: [true, true, true] },
  { label: "Advanced Segmentation",              values: [true, true, true] },
  { label: "API Access",                         values: [true, true, true] },
  { label: "Webhook Integrations",               values: [true, true, true] },
  { label: "Dedicated Onboarding",               values: [true, true, true] },
];

const agencySupport = [
  { label: "Support Channel", values: ["Email",  "Email", "Email"] },
  { label: "Response Time",   values: ["48h",    "24h",   "Dedicated"]   },
];

// ── Single Firms Plans ────────────────────────────────────────────────────────

const firmsPlans = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    annualTotal: 0,
    description: "Get started at no cost.",
    workspaces: "1",
    teamSeats: "1",
    contacts: "100",
    emails: "500",
    popular: false,
  },
  {
    name: "Starter",
    monthlyPrice: 20,
    annualPrice: 16,
    annualTotal: 192,
    description: "For small businesses ready to engage customers.",
    workspaces: "1",
    teamSeats: "1",
    contacts: "1,000",
    emails: "20,000",
    popular: false,
  },
  {
    name: "Business",
    monthlyPrice: 40,
    annualPrice: 32,
    annualTotal: 384,
    description: "For growing businesses with larger audiences.",
    workspaces: "1",
    teamSeats: "2",
    contacts: "5,000",
    emails: "50,000",
    popular: true,
  },
  {
    name: "Scale",
    monthlyPrice: 300,
    annualPrice: 240,
    annualTotal: 2880,
    description: "For established businesses that need full power.",
    workspaces: "2",
    teamSeats: "5",
    contacts: "Unlimited",
    emails: "500,000",
    popular: false,
  },
];

const firmsFeatures = [
  { label: "Email Campaigns",                    values: [true,  true,  true,  true]  },
  { label: "WhatsApp Outbound (Meta Cloud API)", values: [true,  true,  true,  true]  },
  { label: "Campaign Scheduling",                values: [true,  true,  true,  true]  },
  { label: "Email Templates",                    values: [true,  true,  true,  true]  },
  { label: "WhatsApp Templates",                 values: [true,  true,  true,  true]  },
  { label: "Basic Segmentation",                 values: [true,  true,  true,  true]  },
  { label: "Event-Triggered Campaigns",          values: [false, false, true,  true]  },
  { label: "Advanced Segmentation",              values: [false, false, true,  true]  },
  { label: "API Access",                         values: [false, false, true,  true]  },
  { label: "Webhook Integrations",               values: [false, false, false, true]  },
  { label: "Dedicated Onboarding",               values: [false, false, false, true]  },
];

const firmsSupport = [
  { label: "Support Channel", values: ["Community", "Email", "Email", "Email"] },
  { label: "Response Time",   values: ["—",         "48h",   "24h",   "Dedicated"]   },
];

// ── Shared helpers ────────────────────────────────────────────────────────────

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value
      ? <Check className="w-5 h-5 text-primary mx-auto" />
      : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />;
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

type Plan = {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  annualTotal: number;
  description: string;
  workspaces: string;
  teamSeats: string;
  contacts: string;
  emails: string;
  popular: boolean;
};

type FeatureRow = { label: string; values: (boolean | string)[] };

function PlanCards({ plans, annual }: { plans: Plan[]; annual: boolean }) {
  const colClass =
    plans.length === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid ${colClass} gap-6 mb-14`}>
      {plans.map((plan) => {
        const price = annual ? plan.annualPrice : plan.monthlyPrice;
        return (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-6 flex flex-col ${
              plan.popular
                ? "border-primary bg-card shadow-lg shadow-primary/10 ring-2 ring-primary"
                : "border-border bg-card"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-5">
              <h3 className="text-lg font-bold text-foreground mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <div className="mb-5">
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {price === 0 ? "Free" : `$${price}`}
                </span>
                {price > 0 && <span className="text-muted-foreground mb-1">/mo</span>}
              </div>
              {annual && plan.annualTotal > 0 && (
                <p className="text-xs text-muted-foreground mt-1">
                  ${plan.annualTotal.toLocaleString()}/yr billed annually
                </p>
              )}
              {!annual && price > 0 && (
                <p className="text-xs text-muted-foreground mt-1">billed monthly</p>
              )}
            </div>

            <ul className="space-y-2 mb-6 flex-1 text-sm">
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">{plan.workspaces}</span>{" "}
                workspace{plan.workspaces === "1" ? "" : "s"}
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">{plan.teamSeats}</span>{" "}
                team seat{plan.teamSeats === "1" ? "" : "s"}
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">{plan.contacts}</span>{" "}
                contacts / workspace
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">{plan.emails}</span>{" "}
                emails / mo
              </li>
            </ul>

            <Button
              variant={plan.popular ? "hero" : "outline"}
              className="w-full"
              onClick={() => window.open("https://app.reachfy.io", "_blank")}
            >
              Get Started <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        );
      })}
    </div>
  );
}

function FeatureTable({
  plans,
  features,
  support,
}: {
  plans: Plan[];
  features: FeatureRow[];
  support: FeatureRow[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 pr-6 font-semibold text-foreground w-2/5">
              Features
            </th>
            {plans.map((p) => (
              <th
                key={p.name}
                className={`text-center py-3 px-2 font-semibold ${
                  p.popular ? "text-primary" : "text-foreground"
                }`}
              >
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((row) => (
            <tr
              key={row.label}
              className="border-b border-border/50 hover:bg-muted/20 transition-colors"
            >
              <td className="py-3 pr-6 text-muted-foreground">{row.label}</td>
              {row.values.map((val, i) => (
                <td key={i} className="py-3 px-2 text-center">
                  <FeatureCell value={val} />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan={plans.length + 1} className="pt-6 pb-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Support
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>
            </td>
          </tr>
          {support.map((row) => (
            <tr
              key={row.label}
              className="border-b border-border/50 hover:bg-muted/20 transition-colors"
            >
              <td className="py-3 pr-6 text-muted-foreground">{row.label}</td>
              {row.values.map((val, i) => (
                <td key={i} className="py-3 px-2 text-center">
                  <FeatureCell value={val} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

type Tab = "firms" | "agency";

const PricingSection = () => {
  const [tab, setTab] = useState<Tab>("firms");
  const [annual, setAnnual] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#pricing") {
      const el = document.getElementById("pricing");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const isAgency = tab === "agency";
  const plans   = isAgency ? agencyPlans  : firmsPlans;
  const features = isAgency ? agencyFeatures : firmsFeatures;
  const support  = isAgency ? agencySupport  : firmsSupport;

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </div>

        {/* Tabs + billing toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">

          {/* Plan-type tabs */}
          <div className="flex rounded-xl border border-border bg-card p-1 gap-1">
            <button
              onClick={() => setTab("firms")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === "firms"
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              For Businesses
            </button>
            <button
              onClick={() => setTab("agency")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === "agency"
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              For Agencies
            </button>
          </div>

          {/* Billing toggle */}
          <div className="flex items-center gap-3">
            <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                annual ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
                  annual ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
              Annual
            </span>
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Note for agencies */}
        {isAgency && (
          <p className="text-sm text-muted-foreground mb-8 text-center">
            Each workspace = 1 domain + 1 WhatsApp Business Account (WABA).
            All agency plans include every feature.
          </p>
        )}

        <PlanCards plans={plans} annual={annual} />
        <FeatureTable plans={plans} features={features} support={support} />

      </div>
    </section>
  );
};

export default PricingSection;
