import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Background glow effects */}
      <div className="absolute inset-0 hero-glow opacity-70" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Now with WhatsApp Business API</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 fade-in-up text-foreground" style={{ animationDelay: '0.1s' }}>
            Engage Smarter,
            <br />
            <span className="gradient-text">Not Harder</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Connect, communicate, and convert with intelligent, automated campaigns. 
            Reach your customers on Email and WhatsApp — all from one powerful platform.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Start Free Trial <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="outline" size="xl">
              <Play className="w-5 h-5 mr-1" /> Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">10M+</div>
              <div className="text-sm text-muted-foreground">Messages Sent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">5,000+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
