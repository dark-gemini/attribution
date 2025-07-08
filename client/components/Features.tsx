import {
  Database,
  Brain,
  Settings,
  BarChart3,
  Shield,
  Zap,
  Target,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Unified Data Platform",
    description:
      "Beyond mere aggregation - we fuse data from all enterprise sources into a single source of truth. CRM, ERP, IoT, social listening, and unstructured data.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "Hyper-Predictive AI",
    description:
      "Proactive ROI forecasting with deep learning models. Predict campaign performance, CLTV, and churn risk before significant budget allocation.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Settings,
    title: "Autonomous Optimization",
    description:
      "Intelligent, adaptive optimization that moves beyond simple rule-based automation. Real-time budget reallocation and campaign adjustments.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Dynamic Attribution Models",
    description:
      "Shapley Value, Markov Chains, and custom weighting. AI-driven model selection continuously evaluates the most accurate attribution approach.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Target,
    title: "Real-time Journey Mapping",
    description:
      "Process and visualize customer journeys in real-time. Identify bottlenecks, preferred paths, and micro-conversions with unprecedented granularity.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Privacy-First Architecture",
    description:
      "Built-in compliance with GDPR, CCPA, LGPD. Homomorphic encryption, differential privacy, and secure multi-party computation for data protection.",
    gradient: "from-teal-500 to-green-500",
  },
];

export default function Features() {
  return (
    <section className="section-padding bg-background-muted">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="trust-badge mb-6">
            <Zap className="h-4 w-4 text-indigo-600" />
            <span className="font-medium">Core Capabilities</span>
          </div>

          <h2 className="heading-lg mb-6">
            The <span className="text-gradient">Next Frontier</span>
            <br />
            in Marketing Intelligence
          </h2>

          <p className="body-lg text-text-muted max-w-3xl mx-auto">
            Six core pillars that revolutionize how you understand, predict, and
            optimize your customer acquisition and retention strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="professional-card p-8 group hover:scale-[1.02] transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-r ${feature.gradient} w-fit shadow-sm`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="heading-md mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Comparison section */}
        <div className="mt-24 text-center">
          <h3 className="heading-md mb-8">
            Beyond <span className="text-gradient">Traditional Solutions</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="professional-card p-6 text-center">
              <div className="text-xl font-bold text-red-500 mb-4">
                Traditional Attribution
              </div>
              <div className="text-sm text-text-muted space-y-3">
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <span>First/Last-click models</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <span>Historical reporting only</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <span>Limited data sources</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <span>Manual optimization</span>
                </div>
              </div>
            </div>

            <div className="professional-card p-6 text-center">
              <div className="text-xl font-bold text-amber-500 mb-4">
                Market Leaders*
              </div>
              <div className="text-sm text-text-muted space-y-3">
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span>Multi-touch attribution</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span>Basic predictive analytics</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span>Platform integrations</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span>Rule-based automation</span>
                </div>
              </div>
            </div>

            <div className="professional-card p-6 text-center border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
              <div className="text-xl font-bold text-gradient mb-4">
                Gemini Attribution
              </div>
              <div className="text-sm text-text-body space-y-3">
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span>Unified data architecture</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span>Patent-pending AI models</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span>Sub-100ms processing</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span>Autonomous optimization</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-text-subtle">
              *Competitive analysis as of Q4 2024. Features and capabilities
              subject to change.
            </p>
          </div>
        </div>

        {/* Social Proof & Validation */}
        <div className="mt-24 text-center">
          <h3 className="heading-md mb-8">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="metric-card">
              <div className="text-lg font-bold text-text-heading mb-1">
                Gartner
              </div>
              <div className="text-xs text-indigo-600 font-medium">
                Cool Vendor 2024
              </div>
            </div>
            <div className="metric-card">
              <div className="text-lg font-bold text-text-heading mb-1">
                Forrester
              </div>
              <div className="text-xs text-purple-600 font-medium">
                Strong Performer
              </div>
            </div>
            <div className="metric-card">
              <div className="text-lg font-bold text-text-heading mb-1">G2</div>
              <div className="text-xs text-green-600 font-medium">
                Leader Q4 2024
              </div>
            </div>
            <div className="metric-card">
              <div className="text-lg font-bold text-text-heading mb-1">
                TechCrunch
              </div>
              <div className="text-xs text-blue-600 font-medium">
                Startup Battlefield
              </div>
            </div>
          </div>

          <div className="professional-card p-8 max-w-3xl mx-auto">
            <blockquote className="body-lg italic text-center mb-4 text-text-body">
              "Gemini Attribution has transformed how we understand our customer
              journey. The AI-powered insights delivered a 40% improvement in
              ROAS within 90 days."
            </blockquote>
            <div className="text-sm text-indigo-600 font-medium">
              — Sarah Chen, CMO at Snowflake
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
