import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/reatch-logo.png";
const CTASection = () => {
  return <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8">
            <Image src={logo} alt="Reachfy.io" width={80} height={80} className="w-full h-full object-contain" />
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to transform your <span className="gradient-text">customer engagement</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of businesses using Reachfy.io to build stronger customer relationships. 
            Create your account now and get free messages — no credit card required.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.reachfy.io" target="_blank" rel="noopener noreferrer">
                Start Engaging <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;