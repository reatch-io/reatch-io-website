import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import logo from "@/assets/reatch-logo.png";

const Navbar = () => {
  return (
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="Reatch.io" className="w-9 h-9 object-contain"/>
              <span className="text-xl font-bold text-foreground">Reatch.io</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="/#features"
               className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="/#channels"
               className="text-sm text-muted-foreground hover:text-foreground transition-colors">Channels</a>
            <a href="/#analytics"
               className="text-sm text-muted-foreground hover:text-foreground transition-colors">Analytics</a>
            <a href="/#pricing"
               className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm"
                    onClick={() => window.open("https://app.reatch.io", "_blank")}
            >Sign In</Button>
            <Button
                variant="hero"
                size="sm"
                onClick={() => window.open("https://app.reatch.io", "_blank")}
            >
              Get Started <ArrowRight className="w-4 h-4"/>
            </Button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
