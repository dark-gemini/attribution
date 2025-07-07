import {
  Brain,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Zap,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-neural-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg cosmic-gradient">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div className="text-xl font-bold gradient-text">AttributeAI</div>
            </div>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Beyond attribution. Autonomous intelligence for business and
              science. The next-generation platform that outperforms traditional
              solutions.
            </p>

            <div className="flex gap-3">
              <div className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors cursor-pointer">
                <Twitter className="h-4 w-4 text-cosmic-accent" />
              </div>
              <div className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4 text-cosmic-secondary" />
              </div>
              <div className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors cursor-pointer">
                <Github className="h-4 w-4 text-cosmic-primary" />
              </div>
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
                <a href="#" className="hover:text-foreground transition-colors">
                  Attribution Intelligence
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Predictive Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Real-time Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Controls
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API & SDKs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
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
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-cosmic-primary" />
              <span className="text-sm">hello@attributeai.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-cosmic-secondary" />
              <span className="text-sm">San Francisco, CA & Remote</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 AttributeAI. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Security
            </a>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted-foreground">
              All systems operational • 99.9% uptime
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
