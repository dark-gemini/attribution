import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Mail, Calendar, Rocket } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/assets/b1aa49940f8f410f8f3eba0e2e37fcb3/vibrant-cosmic-nebula-239c58?format=webp&width=800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Rocket className="h-4 w-4 text-cosmic-primary" />
              <span className="text-sm font-medium">Get Started Today</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="gradient-text">Attribution Intelligence?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Join 200+ enterprise customers already using our platform. Beta
              launched Q2 2024, GA available Q1 2025.
            </p>
          </div>

          {/* CTA Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <Mail className="h-8 w-8 mx-auto text-cosmic-accent mb-4" />
              <h3 className="font-bold mb-2">Request Demo</h3>
              <p className="text-sm text-muted-foreground mb-4">
                See our platform in action with your data
              </p>
              <Button className="cosmic-gradient text-white w-full">
                Book Demo
              </Button>
            </div>

            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 border-2 border-cosmic-primary/50">
              <Rocket className="h-8 w-8 mx-auto text-cosmic-primary mb-4" />
              <h3 className="font-bold mb-2">Start Free Trial</h3>
              <p className="text-sm text-muted-foreground mb-4">
                30-day full access to all features
              </p>
              <Button className="cosmic-gradient text-white w-full neural-glow">
                Start Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <Calendar className="h-8 w-8 mx-auto text-cosmic-secondary mb-4" />
              <h3 className="font-bold mb-2">Consultation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Custom attribution strategy session
              </p>
              <Button variant="outline" className="glass-card w-full">
                Schedule Call
              </Button>
            </div>
          </div>

          {/* Email Signup */}
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">
              Stay Updated on Attribution Intelligence
            </h3>
            <p className="text-muted-foreground mb-6">
              Get insights, case studies, and early access to new features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Enter your email address"
                className="glass-card border-white/20 bg-white/5 flex-1"
              />
              <Button className="cosmic-gradient text-white px-6">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe at any time. Privacy-first approach.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by innovative companies worldwide
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="glass-card p-4 text-center">
                <div className="text-lg font-bold">Enterprise</div>
                <div className="text-xs text-muted-foreground">Ready</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-lg font-bold">SOC 2</div>
                <div className="text-xs text-muted-foreground">Compliant</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-lg font-bold">GDPR</div>
                <div className="text-xs text-muted-foreground">Certified</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-lg font-bold">99.9%</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Final Value Prop */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 glass-card px-6 py-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cosmic-primary to-cosmic-secondary border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cosmic-secondary to-cosmic-accent border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cosmic-accent to-cosmic-primary border-2 border-background" />
              </div>
              <div className="text-sm">
                <span className="font-semibold">2,000+</span> data scientists
                already building with our platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
