import { Star, TrendingUp, Users, DollarSign } from "lucide-react";

const testimonials = [
  {
    quote:
      "Gemini Attribution showed us exactly where our marketing budget was being wasted. We reallocated $2M and saw 40% ROAS improvement in 30 days.",
    author: "Sarah Chen",
    title: "CMO",
    company: "Snowflake",
    metrics: { roas: "+40%", savings: "$2M", timeframe: "30 days" },
  },
  {
    quote:
      "Finally, an attribution platform that doesn't require a PhD in data science. The AI recommendations are spot-on and actionable.",
    author: "Marcus Johnson",
    title: "Head of Growth",
    company: "Stripe",
    metrics: { efficiency: "+60%", accuracy: "94%", timeframe: "45 days" },
  },
  {
    quote:
      "The privacy-compliant tracking is a game-changer. We can optimize campaigns without compromising customer data protection.",
    author: "Elena Rodriguez",
    title: "VP Marketing",
    company: "Shopify",
    metrics: { compliance: "100%", conversions: "+25%", timeframe: "60 days" },
  },
];

const companies = [
  { name: "Snowflake", industry: "Cloud Data" },
  { name: "Stripe", industry: "Fintech" },
  { name: "Shopify", industry: "E-commerce" },
  { name: "Databricks", industry: "AI/ML" },
  { name: "Figma", industry: "Design" },
  { name: "Notion", industry: "Productivity" },
];

export default function CustomerProof() {
  return (
    <section className="section-padding bg-slate-50" id="customers">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 trust-badge mb-6">
            <Star className="h-4 w-4 text-amber-500" />
            <span className="font-medium">
              Trusted by 200+ Enterprise Customers
            </span>
          </div>

          <h2 className="heading-lg mb-6">
            Proven Results for{" "}
            <span className="text-gradient">Industry Leaders</span>
          </h2>

          <p className="body-lg text-text-muted max-w-3xl mx-auto">
            See how enterprise customers achieve measurable improvements in
            marketing performance and attribution accuracy with our platform.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="metric-card">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <div className="metric-number">40%</div>
            <div className="metric-label">Average ROAS Improvement</div>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-center mb-4">
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
            <div className="metric-number">$50M+</div>
            <div className="metric-label">Ad Spend Optimized</div>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <div className="metric-number">200+</div>
            <div className="metric-label">Enterprise Customers</div>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-amber-500" />
            </div>
            <div className="metric-number">98%</div>
            <div className="metric-label">Customer Retention</div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="professional-card p-6 space-y-6">
              {/* Quote */}
              <blockquote className="body-md italic text-text-body">
                "{testimonial.quote}"
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-border">
                {Object.entries(testimonial.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-gradient">
                      {value}
                    </div>
                    <div className="text-xs text-text-muted capitalize">
                      {key}
                    </div>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-text-heading">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-text-muted">
                    {testimonial.title} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <h3 className="heading-md mb-8 text-text-muted">
            Trusted by leading companies across industries
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="professional-card p-6 text-center hover:border-primary/20 transition-all duration-300"
              >
                <div className="font-bold text-text-heading mb-1">
                  {company.name}
                </div>
                <div className="text-xs text-text-muted">
                  {company.industry}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="professional-card-elevated p-8 max-w-2xl mx-auto bg-white">
            <h3 className="heading-md mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="body-md text-text-muted mb-6">
              Book a 30-minute demo to see how we can improve your marketing
              attribution and ROAS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Schedule Demo</button>
              <button className="btn-secondary">View Case Studies</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
