import { Button } from "./ui/button";
import { ArrowRight, Zap, Brain, Target } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 bg-neural-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-cosmic-primary" />
            <span className="text-sm font-medium">
              Series A • $8M Committed • Now Raising $15M
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Beyond <span className="gradient-text">Attribution</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-light">
              Autonomous Intelligence for{" "}
              <span className="gradient-text">Business & Science</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transcend traditional attribution with our next-generation
            framework. Unified data architecture, hyper-predictive AI, and
            autonomous optimization that outperforms Hyros and TripleWhale.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 py-6">
            <div className="flex items-center gap-2 glass-card px-4 py-2">
              <Brain className="h-5 w-5 text-cosmic-accent" />
              <span className="text-sm font-medium">
                Real-time AI Optimization
              </span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2">
              <Target className="h-5 w-5 text-cosmic-secondary" />
              <span className="text-sm font-medium">
                20-40% ROAS Improvement
              </span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2">
              <Zap className="h-5 w-5 text-cosmic-primary" />
              <span className="text-sm font-medium">Unified Data Platform</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="cosmic-gradient text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg neural-glow"
            >
              Start Your Intelligence Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card border-white/20 hover:bg-white/10 px-8 py-4 text-lg"
            >
              View Technology Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                20-40%*
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                ROAS Increase
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                &lt;100ms
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Processing Time
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                15-30%*
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                CAC Reduction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                99.97%
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Uptime SLA
              </div>
            </div>
          </div>

          {/* Legal disclaimer */}
          <div className="pt-8 text-center">
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              *Results based on controlled studies with enterprise clients Q3-Q4
              2024. Individual results may vary. Patent pending attribution
              algorithms.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-cosmic-primary to-transparent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
