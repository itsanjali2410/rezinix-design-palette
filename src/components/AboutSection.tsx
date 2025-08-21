import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "50M+", label: "Data Points Processed" },
  { value: "24/7", label: "Support Coverage" },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We deliver accurate, reliable AI solutions that drive measurable business outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing the boundaries of what's possible with artificial intelligence.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work closely with your team to ensure seamless integration and adoption.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering world-class AI solutions with unmatched quality.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Leading the AI Revolution
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At rezinix.AI, we're passionate about democratizing artificial intelligence 
                for businesses of all sizes. Our mission is to make advanced AI technology 
                accessible, practical, and transformative.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded by a team of AI researchers and industry veterans, we combine 
                cutting-edge technology with deep business expertise to deliver solutions 
                that don't just impress—they perform.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center p-4 rounded-lg bg-accent/10"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="hover-lift border-0 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-lilac flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-lilac-foreground" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;