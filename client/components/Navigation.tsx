import { useState } from "react";
import { Button } from "./ui/button";
import { TrendingUp, Menu, X, ArrowRight, Phone } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Platform", href: "#platform" },
    { name: "Solutions", href: "#solutions" },
    { name: "Customers", href: "#customers" },
    { name: "Company", href: "#company" },
    { name: "Investors", href: "#investors" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div className="text-xl font-bold text-text-heading">
              Gemini Attribution
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-body hover:text-text-heading transition-colors focus-ring rounded-md px-2 py-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button className="btn-secondary text-sm">
              <Phone className="h-4 w-4 mr-2" />
              Book Demo
            </Button>
            <Button className="btn-primary text-sm">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-background-muted transition-colors focus-ring"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-text-heading" />
            ) : (
              <Menu className="h-5 w-5 text-text-heading" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-text-body hover:text-text-heading hover:bg-background-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border space-y-3">
              <Button className="btn-secondary w-full">
                <Phone className="h-4 w-4 mr-2" />
                Book Demo
              </Button>
              <Button className="btn-primary w-full">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
