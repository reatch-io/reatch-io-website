import { Mail, MessageCircle, Check } from "lucide-react";

const channels = [
  {
    icon: Mail,
    name: "Email",
    color: "from-primary to-[hsl(190_74%_59%)]",
    features: [
      "Custom domain verification",
      "HTML & plain text templates",
      "Open & click tracking",
      "Bounce management",
      "A/B testing support"
    ]
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    color: "from-[hsl(142_70%_45%)] to-[hsl(142_76%_36%)]",
    features: [
      "Business API integration",
      "Template messages",
      "Media rich content",
      "Two-way conversations",
      "Quick replies & buttons"
    ]
  }
];

const ChannelsSection = () => {
  return (
    <section id="channels" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <MessageCircle className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Communication Channels</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet customers <span className="gradient-text-accent">where they are</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Start with Email and WhatsApp — the channels your customers use most.
          </p>
        </div>
        
        {/* Channels grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {channels.map((channel) => (
            <div 
              key={channel.name}
              className="p-8 rounded-3xl card-elevated border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Channel header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${channel.color} flex items-center justify-center`}>
                  <channel.icon className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{channel.name}</h3>
                  <p className="text-sm text-muted-foreground">Ready to use</p>
                </div>
              </div>
              
              {/* Features list */}
              <ul className="space-y-3">
                {channel.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Coming soon hint */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          More channels coming soon: SMS, Push Notifications, In-App Messaging
        </p>
      </div>
    </section>
  );
};

export default ChannelsSection;
