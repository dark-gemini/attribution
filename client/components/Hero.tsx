import { Button } from "./ui/button";
import {
  ArrowRight,
  Play,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white section-padding overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white" />

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Main Content */}
          <div className="space-y-8 fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 trust-badge">
              <Award className="h-4 w-4 text-indigo-600" />
              <span className="font-medium">
                Series A • $8M Committed • Sequoia Capital Lead
              </span>
            </div>

            {/* Crystal Clear Value Proposition */}
            <div className="space-y-6">
              <h1 className="heading-xl">
                Marketing Attribution
                <span className="text-gradient block">That Actually Works</span>
              </h1>

              <p className="body-lg max-w-xl">
                The first attribution platform that uses AI to show you exactly
                which marketing channels drive real revenue.
                <strong className="text-text-heading">
                  {" "}
                  Get 40% better ROAS in 30 days.
                </strong>
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="body-md">
                  Real-time attribution across all channels
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="body-md">
                  AI-powered optimization recommendations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="body-md">
                  Privacy-compliant data collection
                </span>
              </div>
            </div>

            {/* Strong CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary inline-flex items-center gap-2">
                Get Free Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button className="btn-secondary inline-flex items-center gap-2">
                <Play className="h-4 w-4" />
                Watch 2-min Overview
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-text-heading">200+</div>
                <div className="text-subtle">Enterprise Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-heading">
                  $50M+
                </div>
                <div className="text-subtle">Ad Spend Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-heading">40%</div>
                <div className="text-subtle">Avg ROAS Improvement</div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Demo */}
          <div className="slide-up">
            <div className="professional-card-elevated p-8 bg-white">
              <div className="space-y-6">
                {/* Demo Preview */}
                <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-90" />
                    <p className="text-lg font-semibold">Live Product Demo</p>
                    <p className="text-sm opacity-90">
                      See attribution in action
                    </p>
                  </div>

                  {/* Floating metrics */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 text-xs">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="font-semibold text-gray-900">
                        ROAS +42%
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 text-xs">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="font-semibold text-gray-900">
                        Real-time Data
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="metric-card">
                    <div className="metric-number">23</div>
                    <div className="metric-label">Patents</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-number">99.9%</div>
                    <div className="metric-label">Uptime</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-number">&lt;100ms</div>
                    <div className="metric-label">Response</div>
                  </div>
                </div>

                {/* Customer Quote */}
                <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-600">
                  <blockquote className="text-sm italic text-text-body">
                    "Finally, attribution that actually helps us make better
                    decisions. ROAS improved 40% in the first month."
                  </blockquote>
                  <div className="text-xs text-text-muted mt-2 font-medium">
                    — Sarah Chen, CMO at Snowflake
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="text-center mb-8">
            <p className="text-subtle">
              Trusted by leading companies worldwide
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="trust-badge">
              <span className="font-semibold">Gartner Cool Vendor 2024</span>
            </div>
            <div className="trust-badge">
              <span className="font-semibold">SOC 2 Type II</span>
            </div>
            <div className="trust-badge">
              <span className="font-semibold">ISO 27001</span>
            </div>
            <div className="trust-badge">
              <span className="font-semibold">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
