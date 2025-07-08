import { Code, Database, Brain, Zap, Shield, BarChart3 } from "lucide-react";

const techStack = [
  {
    category: "Data Architecture",
    icon: Database,
    technologies: [
      "Unified Customer Data Platform",
      "Real-time Stream Processing",
      "Cross-Device Identity Resolution",
      "Deterministic & Probabilistic Matching",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    technologies: [
      "Deep Learning for CLTV Prediction",
      "Reinforcement Learning Optimization",
      "Natural Language Processing",
      "Computer Vision for Creative Analysis",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Attribution Models",
    icon: BarChart3,
    technologies: [
      "Shapley Value Attribution",
      "Markov Chain Analysis",
      "Data-Driven Attribution",
      "Incrementality Testing",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Privacy & Security",
    icon: Shield,
    technologies: [
      "Differential Privacy",
      "Homomorphic Encryption",
      "Secure Multi-Party Computation",
      "Zero-Knowledge Proofs",
    ],
    color: "from-red-500 to-orange-500",
  },
];

const metrics = [
  {
    icon: Zap,
    value: "<100ms",
    label: "Real-time Processing",
    description: "Sub-second attribution updates",
  },
  {
    icon: Database,
    value: "99.9%",
    label: "Data Accuracy",
    description: "Verified attribution precision",
  },
  {
    icon: Brain,
    value: "95%",
    label: "Prediction Accuracy",
    description: "CLTV and churn forecasting",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Privacy Compliant",
    description: "GDPR, CCPA, LGPD ready",
  },
];

export default function TechShowcase() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="trust-badge mb-6">
            <Code className="h-4 w-4 text-indigo-600" />
            <span className="font-medium">Technology Stack</span>
          </div>

          <h2 className="heading-lg mb-6">
            Built on <span className="text-gradient">Cutting-Edge</span>
            <br />
            Attribution Science
          </h2>

          <p className="body-lg text-text-muted max-w-3xl mx-auto">
            Our platform leverages the latest advances in machine learning,
            differential privacy, and real-time data processing to deliver
            unmatched attribution intelligence.
          </p>
        </div>

        {/* Technology Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {techStack.map((category, index) => (
            <div
              key={index}
              className="feature-card slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-sm w-fit`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="heading-md group-hover:text-indigo-600 transition-colors duration-300">
                  {category.category}
                </h3>
              </div>

              {/* Technologies List */}
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-background-accent transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-sm font-medium text-text-body">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="text-center mb-12">
          <h3 className="heading-md mb-8">
            Platform <span className="text-gradient">Performance</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="metric-card slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-sm w-fit">
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="metric-number text-indigo-600">
                {metric.value}
              </div>

              <div className="font-semibold text-text-heading mb-2">
                {metric.label}
              </div>

              <div className="metric-label">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="professional-card p-8 mb-12">
          <h3 className="heading-md text-center mb-8">
            <span className="text-gradient">Unified Intelligence</span>{" "}
            Architecture
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
                <Database className="h-8 w-8 mx-auto text-blue-600 mb-3" />
                <div className="font-semibold text-text-heading">
                  Data Ingestion
                </div>
                <div className="text-sm text-text-muted">
                  Real-time collection from all sources
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                <Brain className="h-8 w-8 mx-auto text-purple-600 mb-3" />
                <div className="font-semibold text-text-heading">
                  AI Processing
                </div>
                <div className="text-sm text-text-muted">
                  Machine learning analysis & prediction
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                <Zap className="h-8 w-8 mx-auto text-green-600 mb-3" />
                <div className="font-semibold text-text-heading">
                  Autonomous Action
                </div>
                <div className="text-sm text-text-muted">
                  Real-time optimization & execution
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-purple-400" />
              <Zap className="h-4 w-4 text-indigo-600" />
              <div className="w-16 h-px bg-gradient-to-r from-purple-400 to-green-400" />
            </div>
          </div>
        </div>

        {/* API & Integration */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">
            Developer-First <span className="gradient-text">Integration</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6">
              <Code className="h-8 w-8 mx-auto text-cosmic-primary mb-4" />
              <div className="font-semibold mb-2">RESTful APIs</div>
              <div className="text-sm text-muted-foreground">
                Complete programmatic access to all platform features
              </div>
            </div>

            <div className="glass-card p-6">
              <Database className="h-8 w-8 mx-auto text-cosmic-secondary mb-4" />
              <div className="font-semibold mb-2">SDK Libraries</div>
              <div className="text-sm text-muted-foreground">
                Python, JavaScript, and R libraries for data scientists
              </div>
            </div>

            <div className="glass-card p-6">
              <Zap className="h-8 w-8 mx-auto text-cosmic-accent mb-4" />
              <div className="font-semibold mb-2">Real-time Webhooks</div>
              <div className="text-sm text-muted-foreground">
                Instant notifications for attribution insights
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
