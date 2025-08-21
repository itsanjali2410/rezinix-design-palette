import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, BarChart3, Shield, Zap, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Brain,
    title: "AI Analytics Platform",
    description: "Transform your data into actionable insights with our advanced machine learning algorithms.",
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Predictive Intelligence",
    description: "Forecast trends and optimize business outcomes with our predictive modeling solutions.",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Secure AI Gateway",
    description: "Enterprise-grade security and compliance for all your AI initiatives and data processing.",
    color: "lilac",
  },
  {
    icon: Zap,
    title: "Automation Suite",
    description: "Streamline workflows and reduce manual processes with intelligent automation tools.",
    color: "taupe",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Powerful AI Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive suite of AI solutions designed to accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.title} 
              className="hover-lift border-0 shadow-sm hover:shadow-xl transition-all duration-300 gradient-card group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className={`w-6 h-6 text-${product.color}-foreground`} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground">
                  {product.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto justify-start">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;