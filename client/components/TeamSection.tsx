import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Hiroshi Tanaka",
    role: "Co-Founder & CEO",
    image:
      "https://cdn.builder.io/api/v1/assets/b1aa49940f8f410f8f3eba0e2e37fcb3/riley-5ca88c?format=webp&width=800",
    bio: "Serial entrepreneur with 3 exits totaling $2.1B. Former VP Engineering at TripleWhale. Built attribution systems serving 500M+ daily transactions.",
    credentials: "MS Computer Science, Stanford • Forbes 30 Under 30",
  },
  {
    name: "Dr. Keanu Williams",
    role: "Chief AI Officer",
    image:
      "https://cdn.builder.io/api/v1/assets/b1aa49940f8f410f8f3eba0e2e37fcb3/brooke-3d0095?format=webp&width=800",
    bio: "Former head of ML at Tesla Autopilot. PhD in Neural Networks from Stanford. 15+ patents in autonomous decision-making systems.",
    credentials: "PhD AI/ML, Stanford • Published 40+ papers • Tesla AI Lead",
  },
  {
    name: "Elena Volkov",
    role: "Chief Technology Officer",
    image:
      "https://cdn.builder.io/api/v1/assets/b1aa49940f8f410f8f3eba0e2e37fcb3/alex-13f266?format=webp&width=800",
    bio: "Ex-Google Senior Staff Engineer. Architected systems processing 1B+ attribution events daily. Former Meta Reality Labs AI lead.",
    credentials: "MS Software Engineering, MIT • 12 years at Google",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Chief Data Scientist",
    image:
      "https://cdn.builder.io/api/v1/assets/b1aa49940f8f410f8f3eba0e2e37fcb3/arya-ed2797?format=webp&width=800",
    bio: "Pioneered multi-touch attribution models at Google Research. 20+ years in marketing analytics. Former Adobe Analytics VP.",
    credentials: "PhD Statistics, UC Berkeley • 25+ research publications",
  },
  {
    name: "Marcus Johnson",
    role: "VP of Engineering",
    image:
      "https://cdn.builder.io/api/v1/assets/b1aa49940f8f410f8f3eba0e2e37fcb3/taylor-f826af?format=webp&width=800",
    bio: "Infrastructure expert who scaled Stripe's real-time analytics from 10M to 10B+ transactions. Former Principal Engineer at Databricks.",
    credentials: "MS Distributed Systems, CMU • Kubernetes core contributor",
  },
  {
    name: "Dr. Sarah Chen",
    role: "Chief Privacy Officer",
    image:
      "https://cdn.builder.io/api/v1/assets/b1aa49940f8f410f8f3eba0e2e37fcb3/amy-31dad6?format=webp&width=800",
    bio: "Privacy researcher from MIT CSAIL. Expert in differential privacy and homomorphic encryption. Former Apple Privacy Engineering lead.",
    credentials: "PhD Cryptography, MIT • IAPP Fellow • 8 privacy patents",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neural-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <div className="h-4 w-4 rounded-full bg-cosmic-primary animate-pulse" />
            <span className="text-sm font-medium">Leadership Team</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            World-Class <span className="gradient-text">Intelligence</span>
            <br />
            Behind the Platform
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team combines decades of experience from leading tech companies,
            research institutions, and successful attribution platform exits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden ring-2 ring-cosmic-primary/30 group-hover:ring-cosmic-primary/60 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cosmic-primary/20 via-cosmic-secondary/20 to-cosmic-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-full" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                  {member.name}
                </h3>

                <div className="text-cosmic-primary font-medium mb-4">
                  {member.role}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>

                {member.credentials && (
                  <div className="text-xs text-cosmic-accent/80 mb-6 px-3 py-2 glass-card rounded-lg">
                    {member.credentials}
                  </div>
                )}

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <div className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors cursor-pointer">
                    <Linkedin className="h-4 w-4 text-cosmic-accent" />
                  </div>
                  <div className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors cursor-pointer">
                    <Twitter className="h-4 w-4 text-cosmic-secondary" />
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-cosmic-primary to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Company values */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Our <span className="gradient-text">Core Values</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6">
              <div className="text-lg font-bold mb-2 text-cosmic-primary">
                Intelligence First
              </div>
              <div className="text-sm text-muted-foreground">
                Every decision backed by data, every prediction validated by
                results, every optimization powered by AI.
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="text-lg font-bold mb-2 text-cosmic-secondary">
                Privacy by Design
              </div>
              <div className="text-sm text-muted-foreground">
                User privacy and data protection built into every layer of our
                platform from day one.
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="text-lg font-bold mb-2 text-cosmic-accent">
                Continuous Innovation
              </div>
              <div className="text-sm text-muted-foreground">
                Pushing the boundaries of what's possible in attribution and
                marketing intelligence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
