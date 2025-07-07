import { useState } from "react";
import { Button } from "./ui/button";
import { Brain, Menu, X, ArrowRight } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Platform", href: "#platform" },
    { name: "Technology", href: "#technology" },
    { name: "Team", href: "#team" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg cosmic-gradient">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div className="text-lg font-bold gradient-text">
              Gemini Attribution
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-cosmic-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="cosmic-gradient text-white hover:opacity-90 transition-opacity"
            >
              Start Free Trial
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass-card"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium hover:text-cosmic-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4 space-y-3 border-t border-white/10">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-muted-foreground hover:text-foreground"
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="w-full cosmic-gradient text-white hover:opacity-90 transition-opacity"
                >
                  Start Free Trial
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
