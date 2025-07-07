import { Button } from "./ui/button";
import {
  ArrowRight,
  Download,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  Award,
  FileText,
} from "lucide-react";

export default function InvestorSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="investors">
      {/* Background */}
      <div className="absolute inset-0 bg-neural-pattern opacity-15" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <TrendingUp className="h-4 w-4 text-cosmic-primary" />
            <span className="text-sm font-medium">Investment Opportunity</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Series A <span className="gradient-text">Investment Round</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join leading investors backing the next-generation attribution
            intelligence platform. $15M Series A to accelerate market expansion
            and R&D.
          </p>
        </div>

        {/* Key Investment Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-card p-6 text-center">
            <DollarSign className="h-8 w-8 mx-auto text-cosmic-primary mb-4" />
            <div className="text-3xl font-bold gradient-text mb-2">$15M</div>
            <div className="text-sm text-muted-foreground">Series A Target</div>
            <div className="text-xs text-muted-foreground mt-1">
              $8M committed
            </div>
          </div>

          <div className="glass-card p-6 text-center">
            <Users className="h-8 w-8 mx-auto text-cosmic-secondary mb-4" />
            <div className="text-3xl font-bold gradient-text mb-2">200+</div>
            <div className="text-sm text-muted-foreground">
              Enterprise Customers
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              98% retention rate
            </div>
          </div>

          <div className="glass-card p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto text-cosmic-accent mb-4" />
            <div className="text-3xl font-bold gradient-text mb-2">300%</div>
            <div className="text-sm text-muted-foreground">YoY Growth</div>
            <div className="text-xs text-muted-foreground mt-1">
              Q3 2024 vs Q3 2023
            </div>
          </div>

          <div className="glass-card p-6 text-center">
            <Award className="h-8 w-8 mx-auto text-cosmic-primary mb-4" />
            <div className="text-3xl font-bold gradient-text mb-2">23</div>
            <div className="text-sm text-muted-foreground">Patents Granted</div>
            <div className="text-xs text-muted-foreground mt-1">31 pending</div>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="glass-card p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">Market Opportunity</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cosmic-primary mb-2">
                $45B
              </div>
              <div className="text-sm font-medium mb-2">
                Total Addressable Market
              </div>
              <div className="text-xs text-muted-foreground">
                Marketing analytics & attribution
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-cosmic-secondary mb-2">
                $12B
              </div>
              <div className="text-sm font-medium mb-2">
                Serviceable Addressable Market
              </div>
              <div className="text-xs text-muted-foreground">
                Enterprise attribution platforms
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-cosmic-accent mb-2">
                $2.1B
              </div>
              <div className="text-sm font-medium mb-2">
                Serviceable Obtainable Market
              </div>
              <div className="text-xs text-muted-foreground">
                Target 5% market share by 2027
              </div>
            </div>
          </div>
        </div>

        {/* Use of Funds */}
        <div className="glass-card p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Use of <span className="gradient-text">Funds</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-lg bg-white/5">
                <span className="font-medium">R&D & Product Development</span>
                <span className="text-cosmic-primary font-bold">40% ($6M)</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-lg bg-white/5">
                <span className="font-medium">Sales & Marketing</span>
                <span className="text-cosmic-secondary font-bold">
                  35% ($5.25M)
                </span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-lg bg-white/5">
                <span className="font-medium">Team Expansion</span>
                <span className="text-cosmic-accent font-bold">20% ($3M)</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-lg bg-white/5">
                <span className="font-medium">Working Capital</span>
                <span className="text-muted-foreground font-bold">
                  5% ($0.75M)
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">
                Key Milestones (18 months)
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cosmic-primary" />
                  <span>Launch European operations (Q2 2025)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cosmic-secondary" />
                  <span>Release LLM attribution capabilities (Q3 2025)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cosmic-accent" />
                  <span>Achieve $10M ARR (Q4 2025)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cosmic-primary" />
                  <span>Complete Series B fundraising (Q1 2026)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investor CTAs */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            Ready to <span className="gradient-text">Invest</span>?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <Download className="h-8 w-8 mx-auto text-cosmic-primary mb-4" />
              <h4 className="font-bold mb-2">Pitch Deck</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive overview and financial projections
              </p>
              <Button className="cosmic-gradient text-white w-full">
                Download Deck
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 border-2 border-cosmic-primary/50">
              <Calendar className="h-8 w-8 mx-auto text-cosmic-secondary mb-4" />
              <h4 className="font-bold mb-2">Schedule Meeting</h4>
              <p className="text-sm text-muted-foreground mb-4">
                30-min investor call with CEO Rajesh Patel
              </p>
              <Button className="cosmic-gradient text-white w-full neural-glow">
                Book Meeting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <FileText className="h-8 w-8 mx-auto text-cosmic-accent mb-4" />
              <h4 className="font-bold mb-2">Data Room</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Due diligence materials and financial details
              </p>
              <Button variant="outline" className="glass-card w-full">
                Request Access
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="glass-card p-6">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-cosmic-primary" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-cosmic-secondary" />
                <span>Series A Lead: Sequoia Capital</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-cosmic-accent" />
                <span>Board includes former Salesforce VP</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-cosmic-primary" />
                <span>Gartner Cool Vendor 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
