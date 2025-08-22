import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Zap, Heart, Globe, Coffee } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Career = () => {
  const jobs = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$150k - $200k",
      description: "Lead the development of our next-generation AI engine and help scale our multi-agent systems.",
      requirements: ["5+ years in AI/ML", "Python, TensorFlow/PyTorch", "Distributed systems experience"],
      featured: true
    },
    {
      title: "Product Manager - AI Platform",
      department: "Product",
      location: "New York, NY / Remote",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Drive product strategy for our AI platform and work closely with engineering and customers.",
      requirements: ["3+ years product management", "AI/ML product experience", "Strong analytical skills"],
      featured: false
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Austin, TX / Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Build and maintain scalable infrastructure for AI workloads and ensure 99.9% uptime.",
      requirements: ["Kubernetes, Docker", "AWS/GCP experience", "CI/CD pipelines"],
      featured: false
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $120k",
      description: "Help our enterprise customers achieve success with our AI platform and drive adoption.",
      requirements: ["B2B SaaS experience", "Technical background", "Customer-focused mindset"],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness programs"
    },
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO"
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Top-tier salaries, equity packages, and performance bonuses"
    },
    {
      icon: Zap,
      title: "Learning & Growth",
      description: "Annual learning budget, conference attendance, and internal training"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with brilliant minds in a collaborative and inclusive environment"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Build products used by companies worldwide to solve real problems"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 sm:px-12 lg:px-20 gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Join Our <span className="text-primary">Mission</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed mb-8"
          >
            Help us democratize AI technology and build the future of intelligent automation. 
            We're looking for passionate individuals who want to make a real impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Join Rezinix?</h2>
            <p className="text-xl text-muted-foreground">
              We believe great people deserve great benefits and opportunities
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
              >
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Find your next career opportunity with us
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`hover:shadow-lg transition-shadow ${job.featured ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-foreground">
                          {job.title}
                          {job.featured && (
                            <Badge className="ml-2 bg-primary text-primary-foreground">Featured</Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {job.department}
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Key Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Culture</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're building more than just a company - we're creating a community of innovators 
              who believe in the transformative power of AI technology.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Innovation Mindset</h3>
                <p className="text-muted-foreground text-sm">
                  We encourage experimentation, learning from failures, and pushing boundaries.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Collaborative Spirit</h3>
                <p className="text-muted-foreground text-sm">
                  Cross-functional teams working together to solve complex challenges.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Growth Focused</h3>
                <p className="text-muted-foreground text-sm">
                  Personal and professional development is a priority for every team member.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Make an Impact?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't see a perfect fit? We're always looking for talented individuals. 
              Send us your resume and let's talk about future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Send General Application
              </Button>
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Career;