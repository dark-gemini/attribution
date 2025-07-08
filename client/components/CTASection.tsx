import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  ArrowRight,
  Mail,
  Calendar,
  Rocket,
  Phone,
  CheckCircle,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="trust-badge mb-6">
              <Rocket className="h-4 w-4 text-indigo-600" />
              <span className="font-medium">Get Started Today</span>
            </div>

            <h2 className="heading-lg mb-6">
              Ready to Transform Your{" "}
              <span className="text-gradient">Attribution Intelligence?</span>
            </h2>

            <p className="body-lg text-text-muted max-w-3xl mx-auto">
              Join 200+ enterprise customers already using our platform. Beta
              launched Q2 2024, GA available Q1 2025.
            </p>
          </div>

          {/* Main CTA Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Primary CTAs */}
            <div className="space-y-6">
              <h3 className="heading-md mb-6">Choose Your Path</h3>

              <div className="space-y-4">
                {/* Demo CTA */}
                <div className="professional-card p-6 group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <Mail className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-heading mb-2">
                        Request Personal Demo
                      </h4>
                      <p className="text-text-muted text-sm mb-4">
                        See our platform in action with your data. 30-minute
                        personalized walkthrough.
                      </p>
                      <Button className="btn-accent w-full">
                        Book Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Trial CTA - Featured */}
                <div className="professional-card p-6 group hover:scale-[1.02] transition-all duration-300 border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-600 rounded-lg">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-text-heading">
                          Start Free Trial
                        </h4>
                        <span className="px-2 py-1 bg-indigo-600 text-white text-xs rounded-full font-medium">
                          Most Popular
                        </span>
                      </div>
                      <p className="text-text-muted text-sm mb-4">
                        30-day full access to all features. Setup assistance
                        included.
                      </p>
                      <Button className="btn-primary w-full">
                        Start Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Consultation CTA */}
                <div className="professional-card p-6 group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg">
                      <Calendar className="h-6 w-6 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-heading mb-2">
                        Strategy Consultation
                      </h4>
                      <p className="text-text-muted text-sm mb-4">
                        Custom attribution strategy session with our experts.
                      </p>
                      <Button
                        variant="outline"
                        className="btn-secondary w-full"
                      >
                        Schedule Call
                        <Phone className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Newsletter + Trust */}
            <div className="space-y-8">
              {/* Newsletter */}
              <div className="professional-card p-8">
                <h3 className="heading-md mb-4">
                  Stay Updated on Attribution Intelligence
                </h3>
                <p className="text-text-muted mb-6">
                  Get insights, case studies, and early access to new features.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Input
                    placeholder="Enter your email address"
                    className="flex-1 focus-ring"
                  />
                  <Button className="btn-accent">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <p className="text-xs text-text-subtle">
                  No spam. Unsubscribe at any time. Privacy-first approach.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="professional-card p-6">
                <h4 className="font-semibold text-text-heading mb-4">
                  Why 200+ Companies Trust Us
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-sm">SOC 2 Type II</div>
                      <div className="text-xs text-text-muted">Compliant</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-sm">99.9% Uptime</div>
                      <div className="text-xs text-text-muted">
                        SLA Guaranteed
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-sm">24/7 Support</div>
                      <div className="text-xs text-text-muted">
                        Enterprise Grade
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-indigo-600" />
                    <div>
                      <div className="font-semibold text-sm">40% ROAS</div>
                      <div className="text-xs text-text-muted">
                        Avg Improvement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Social Proof */}
          <div className="text-center">
            <div className="trust-badge">
              <div className="flex -space-x-2 mr-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 border-2 border-white" />
              </div>
              <span className="font-semibold">200+</span> enterprise customers
              in beta program since Q2 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
