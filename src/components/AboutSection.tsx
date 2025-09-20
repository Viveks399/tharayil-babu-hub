import aboutImage from '@/assets/about-team.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Tharayil-Babu consulting team collaboration" 
                className="w-full h-[400px] object-cover rounded-lg shadow-professional"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in Belgium, Tharayil-Babu is a trusted provider of NetSuite consulting and managed services. We help businesses across the world maximize the value of their NetSuite investment through expert guidance, seamless system optimization, and continuous support.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our consultants provide global best practices to deliver tailored solutions that drive efficiency, growth, and long-term success.
              </p>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border border-border">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Global</div>
                  <div className="text-sm text-muted-foreground">Reach</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Expert</div>
                  <div className="text-sm text-muted-foreground">Guidance</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Tailored</div>
                  <div className="text-sm text-muted-foreground">Solutions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-3">Why Choose Tharayil-Babu?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Deep NetSuite expertise with global best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Flexible engagement models to suit your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Focus on financial operations and system optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Proven track record of sustainable business growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;