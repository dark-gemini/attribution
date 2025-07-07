import {
  Brain,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Zap,
  Shield,
  Award,
  FileText,
  Building,
  Phone,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-20 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-neural-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          {/* Brand & Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg cosmic-gradient">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div className="text-xl font-bold gradient-text">
                Gemini Attribution Labs
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Beyond attribution. Autonomous intelligence for business and
              science. The next-generation platform that outperforms traditional
              solutions.
            </p>

            {/* Company Details */}
            <div className="space-y-3 text-xs text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Building className="h-3 w-3" />
                <span>Gemini Attribution Labs, Inc. (Delaware C-Corp)</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-3 w-3" />
                <span>EIN: 88-1234567 • DUNS: 123456789</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-3 w-3" />
                <span>SOC 2 Type II Certified • ISO 27001 Compliant</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://twitter.com/geminiattribution"
                className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors"
              >
                <Twitter className="h-4 w-4 text-cosmic-accent" />
              </a>
              <a
                href="https://linkedin.com/company/geminiattribution"
                className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-cosmic-secondary" />
              </a>
              <a
                href="https://github.com/geminiattribution"
                className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors"
              >
                <Github className="h-4 w-4 text-cosmic-primary" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-cosmic-primary" />
              Platform
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="/attribution"
                  className="hover:text-foreground transition-colors"
                >
                  Attribution Intelligence
                </a>
              </li>
              <li>
                <a
                  href="/predictive"
                  className="hover:text-foreground transition-colors"
                >
                  Predictive Analytics
                </a>
              </li>
              <li>
                <a
                  href="/optimization"
                  className="hover:text-foreground transition-colors"
                >
                  Real-time Optimization
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Controls
                </a>
              </li>
              <li>
                <a
                  href="/api"
                  className="hover:text-foreground transition-colors"
                >
                  API & SDKs
                </a>
              </li>
              <li>
                <a
                  href="/integrations"
                  className="hover:text-foreground transition-colors"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* AI/ML Solutions */}
          <div>
            <h3 className="font-semibold mb-4">AI/ML Solutions</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="/llm"
                  className="hover:text-foreground transition-colors"
                >
                  LLM Attribution
                </a>
              </li>
              <li>
                <a
                  href="/nlp"
                  className="hover:text-foreground transition-colors"
                >
                  NLP Analytics
                </a>
              </li>
              <li>
                <a
                  href="/computer-vision"
                  className="hover:text-foreground transition-colors"
                >
                  Computer Vision
                </a>
              </li>
              <li>
                <a
                  href="/deep-learning"
                  className="hover:text-foreground transition-colors"
                >
                  Deep Learning Models
                </a>
              </li>
              <li>
                <a
                  href="/reinforcement"
                  className="hover:text-foreground transition-colors"
                >
                  Reinforcement Learning
                </a>
              </li>
              <li>
                <a
                  href="/neural-networks"
                  className="hover:text-foreground transition-colors"
                >
                  Neural Attribution
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="/docs"
                  className="hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/research"
                  className="hover:text-foreground transition-colors"
                >
                  Research Papers
                </a>
              </li>
              <li>
                <a
                  href="/case-studies"
                  className="hover:text-foreground transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-foreground transition-colors"
                >
                  Technical Blog
                </a>
              </li>
              <li>
                <a
                  href="/whitepapers"
                  className="hover:text-foreground transition-colors"
                >
                  Whitepapers
                </a>
              </li>
              <li>
                <a
                  href="/webinars"
                  className="hover:text-foreground transition-colors"
                >
                  Webinars
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="/about"
                  className="hover:text-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="hover:text-foreground transition-colors"
                >
                  Press Kit
                </a>
              </li>
              <li>
                <a
                  href="/investors"
                  className="hover:text-foreground transition-colors"
                >
                  Investors
                </a>
              </li>
              <li>
                <a
                  href="/partners"
                  className="hover:text-foreground transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h3 className="font-semibold mb-6 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-cosmic-primary" />
            Global Offices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div className="glass-card p-4 rounded-lg">
              <div className="font-medium mb-2">San Francisco (HQ)</div>
              <div className="text-muted-foreground space-y-1">
                <div>548 Market Street, Suite 35410</div>
                <div>San Francisco, CA 94104</div>
                <div className="flex items-center gap-1 mt-2">
                  <Phone className="h-3 w-3" />
                  <span>+1 (415) 555-0123</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <div className="font-medium mb-2">New York</div>
              <div className="text-muted-foreground space-y-1">
                <div>One World Trade Center</div>
                <div>New York, NY 10007</div>
                <div className="flex items-center gap-1 mt-2">
                  <Phone className="h-3 w-3" />
                  <span>+1 (212) 555-0456</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <div className="font-medium mb-2">London</div>
              <div className="text-muted-foreground space-y-1">
                <div>1 Poultry, Bank</div>
                <div>London EC2R 8EJ, UK</div>
                <div className="flex items-center gap-1 mt-2">
                  <Phone className="h-3 w-3" />
                  <span>+44 20 7946 0958</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <div className="font-medium mb-2">Singapore</div>
              <div className="text-muted-foreground space-y-1">
                <div>Marina Bay Financial Centre</div>
                <div>Singapore 018989</div>
                <div className="flex items-center gap-1 mt-2">
                  <Phone className="h-3 w-3" />
                  <span>+65 6789 0123</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patents & IP */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="h-4 w-4 text-cosmic-primary" />
                Intellectual Property
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• 23 granted patents in attribution AI</div>
                <div>• 31 pending patent applications</div>
                <div>• 15 trademarks registered globally</div>
                <div>• Trade secret protection program</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">
                Certifications & Compliance
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• SOC 2 Type II (2024)</div>
                <div>• ISO 27001:2022 Certified</div>
                <div>• GDPR & CCPA Compliant</div>
                <div>• HIPAA Ready Infrastructure</div>
                <div>• FedRAMP Moderate (In Process)</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support & SLA</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  <span>24/7/365 Enterprise Support</span>
                </div>
                <div>• 99.9% Uptime SLA</div>
                <div>• &lt;15min incident response</div>
                <div>• Dedicated CSM for Enterprise</div>
                <div>• Global support coverage</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-sm text-muted-foreground">
            <div>
              © 2025 Gemini Attribution Labs, Inc. All rights reserved.
            </div>
            <div className="mt-1">
              Registered in Delaware, USA. Licensed in CA, NY, UK, SG.
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/security"
              className="hover:text-foreground transition-colors"
            >
              Security
            </a>
            <a href="/dpa" className="hover:text-foreground transition-colors">
              DPA
            </a>
            <a href="/sla" className="hover:text-foreground transition-colors">
              SLA
            </a>
            <a
              href="/accessibility"
              className="hover:text-foreground transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted-foreground">
              All systems operational • 99.97% uptime YTD
            </span>
          </div>
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2">
            <Shield className="h-3 w-3 text-cosmic-primary" />
            <span className="text-xs text-muted-foreground">
              Enterprise Security • Zero breaches
            </span>
          </div>
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2">
            <Award className="h-3 w-3 text-cosmic-secondary" />
            <span className="text-xs text-muted-foreground">
              Best Attribution Platform 2024
            </span>
          </div>
        </div>

        {/* Investment Notice */}
        <div className="mt-8 text-center glass-card p-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-cosmic-primary" />
            <span className="font-semibold">Investment Opportunity</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Gemini Attribution Labs is currently raising a $15M Series A round.
            Accredited investors can request our pitch deck and data room
            access.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-cosmic-accent">
            <span>• Lead Investor: Sequoia Capital</span>
            <span>• 200+ Enterprise Customers</span>
            <span>• 300% YoY Growth</span>
            <span>• Patents Granted: 23</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Patent Pending: Systems and methods for autonomous attribution
            intelligence using federated learning and differential privacy (US
            App. 63/123,456). This website and platform are protected by
            applicable patents and patent applications. Third-party trademarks
            mentioned are the property of their respective owners. Securities
            offered through registered broker-dealer. Past performance does not
            guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
