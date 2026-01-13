import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Businesses to Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Reatch.io, we believe every business deserves powerful tools to engage 
              with their customers across every channel, without complexity.
            </p>
          </div>

          {/* Mission Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're on a mission to democratize customer engagement. Whether you're a 
                startup or an enterprise, Reatch.io provides the infrastructure to reach 
                your customers via Email, WhatsApp, SMS, and more — all from one unified platform.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Customer First</h3>
                <p className="text-sm text-muted-foreground">
                  Every decision we make starts with how it benefits our customers.
                </p>
              </div>
              
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Simplicity</h3>
                <p className="text-sm text-muted-foreground">
                  Powerful features shouldn't mean complicated interfaces.
                </p>
              </div>
              
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We constantly push boundaries to deliver cutting-edge solutions.
                </p>
              </div>
              
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  Clear pricing, honest communication, no hidden surprises.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Reatch.io was born from a simple observation: businesses were struggling to 
                manage customer communications across multiple channels. Email here, WhatsApp 
                there, SMS somewhere else — it was chaos.
              </p>
              <p className="mb-4">
                We built Reatch.io to solve this problem. A single platform where you can 
                manage all your customer outreach, track engagement, and scale your 
                communication efforts without breaking the bank.
              </p>
              <p>
                Today, we're proud to help businesses of all sizes connect with their 
                customers in meaningful ways. And we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
