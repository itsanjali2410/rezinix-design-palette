import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award, Globe, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to democratizing AI technology and making it accessible to businesses of all sizes."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Constantly pushing the boundaries of what's possible with AI and machine learning technologies."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Every solution we build puts our customers' success and growth at the center of our decisions."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, compliant, and reliable AI solutions that businesses can depend on."
    }
  ];

  const stats = [
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Global Support" },
    { number: "5+", label: "Years of AI Expertise" }
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
            About <span className="text-primary">Rezinix</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            We're on a mission to transform how businesses leverage artificial intelligence. 
            Our cutting-edge AI engine empowers technical teams to build multi-step agents 
            and integrate applications like never before.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2019 by a team of AI researchers and enterprise software veterans, 
                  Rezinix emerged from a simple observation: businesses were struggling to 
                  implement AI solutions that actually worked in real-world scenarios.
                </p>
                <p>
                  We saw companies investing heavily in AI initiatives only to face integration 
                  challenges, scalability issues, and complexity that hindered adoption. 
                  That's when we decided to build something different.
                </p>
                <p>
                  Today, Rezinix powers AI implementations for Fortune 500 companies and 
                  innovative startups alike, providing the tools and infrastructure needed 
                  to turn AI concepts into production-ready solutions.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg border">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Global Impact</h3>
                <p className="text-muted-foreground">
                  Our AI solutions have processed over 100 million data points, 
                  automated thousands of workflows, and helped businesses save 
                  millions of hours in manual processing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
              >
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">By the Numbers</h2>
            <p className="text-xl text-muted-foreground">
              Our track record speaks for itself
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're a diverse group of AI researchers, engineers, and business experts 
              united by our passion for making AI accessible and impactful.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <Award className="w-8 h-8 text-primary" />
              <span className="text-muted-foreground">
                Combined 50+ years of AI and enterprise software experience
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;