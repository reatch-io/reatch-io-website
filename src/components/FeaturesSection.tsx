import { 
  Zap, 
  Users, 
  BarChart3, 
  Target,
  Code,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Design automated workflows with event triggers, scheduled campaigns, and API-driven interactions."
  },
  {
    icon: Users,
    title: "Advanced Segmentation",
    description: "Filter and group customers by behavior, preferences, and custom attributes for personalized outreach."
  },
  {
    icon: Target,
    title: "Multi-Channel Reach",
    description: "Connect with customers on Email and WhatsApp from a single unified dashboard."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track opens, clicks, and engagement trends with actionable insights and metrics."
  },
  {
    icon: Code,
    title: "Developer API",
    description: "Modern REST API for custom integrations, in-app notifications, and transactional messages."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, GDPR compliance, and secure data management at scale."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Everything you need to <span className="gradient-text">engage customers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete toolkit for modern customer communication, built for growth-minded teams.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
