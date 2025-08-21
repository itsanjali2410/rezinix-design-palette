import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@rezinix.ai",
    link: "mailto:hello@rezinix.ai",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Silicon Valley, CA",
    link: "#",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="hover-lift transition-all duration-300 border-0 shadow-sm"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {info.content}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-sm bg-gradient-to-br from-background to-accent/10">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Enterprise Solutions
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Looking for custom AI solutions for your enterprise? 
                  Our team of experts is ready to design a tailored approach for your organization.
                </p>
                <Button variant="cta" size="sm" className="w-full">
                  Schedule Enterprise Consultation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="border-border focus:border-accent transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="border-border focus:border-accent transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="border-border focus:border-accent transition-colors duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Company
                    </label>
                    <Input 
                      placeholder="Your Company" 
                      className="border-border focus:border-accent transition-colors duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your AI needs and how we can help..."
                      rows={4}
                      className="border-border focus:border-accent transition-colors duration-200 resize-none"
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full group">
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We'll never share your information with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;