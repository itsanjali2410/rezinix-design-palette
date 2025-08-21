import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Briefcase, Users, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise AI",
    description: "Scalable AI solutions for large organizations seeking digital transformation.",
    features: ["Custom Model Development", "Enterprise Integration", "24/7 Support"],
    highlight: true,
  },
  {
    icon: Briefcase,
    title: "Business Intelligence",
    description: "Turn your data into competitive advantage with intelligent business insights.",
    features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards"],
    highlight: false,
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "AI-powered tools to enhance team productivity and decision-making processes.",
    features: ["Smart Workflows", "Automated Reporting", "Team Analytics"],
    highlight: false,
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Tailored Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-specific AI solutions that address your unique business challenges and opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title}
              className={`hover-lift transition-all duration-300 ${
                solution.highlight 
                  ? 'border-primary/20 shadow-lg bg-gradient-to-br from-background to-accent/20' 
                  : 'border-border shadow-sm bg-background'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-xl ${
                    solution.highlight ? 'bg-primary' : 'bg-taupe'
                  } flex items-center justify-center`}>
                    <solution.icon className={`w-8 h-8 ${
                      solution.highlight ? 'text-primary-foreground' : 'text-taupe-foreground'
                    }`} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={solution.highlight ? "hero" : "outline"} 
                  className="w-full"
                >
                  {solution.highlight ? "Get Started" : "Learn More"}
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;