import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 section-gradient">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Service 1: Ad-Hoc Support */}
          <Card className="shadow-professional hover:shadow-hero transition-smooth card-gradient border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground mb-4">
                Ad-Hoc NetSuite Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                At Tharayil-Babu, we understand that businesses don't always need full-time consulting — sometimes, you just need expert help, right when challenges arise. Whether it's troubleshooting issues, optimizing financial workflows, customizing reports, or Suite Script support Tharayil-Babu ensures your team gets quick, effective solutions without long-term commitments.
              </p>
              
              <div className="bg-accent/50 p-6 rounded-lg border border-border">
                <p className="text-primary font-semibold text-lg">
                  Available at €70 per hour — expert NetSuite support, only when you need it.
                </p>
              </div>

              <Button 
                onClick={scrollToContact}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 transition-smooth"
              >
                Get Ad-Hoc Support
              </Button>
            </CardContent>
          </Card>

          {/* Service 2: Managed Services */}
          <Card className="shadow-professional hover:shadow-hero transition-smooth card-gradient border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground mb-4">
                NetSuite Managed Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Unlock the full potential of your NetSuite investment with our Managed Services for NetSuite.
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-lg">What We Offer:</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-foreground">Continuous Support & Monitoring:</p>
                      <p className="text-sm text-muted-foreground">Proactive monitoring and timely support to keep your NetSuite environment running smoothly.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-foreground">Customization & Optimization:</p>
                      <p className="text-sm text-muted-foreground">Tailored solutions and workflows to maximize efficiency and drive business growth.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-foreground">Upgrades & Maintenance:</p>
                      <p className="text-sm text-muted-foreground">Seamless handling of system updates, patches, and enhancements without disrupting your operations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-foreground">Training & Advisory:</p>
                      <p className="text-sm text-muted-foreground">Expert guidance and training to empower your team and ensure they leverage NetSuite to its fullest.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                With our managed services, you gain a trusted partner who not only resolves issues but also helps you strategically leverage NetSuite for measurable business impact.
              </p>

              <p className="font-medium text-foreground">
                Let us manage NetSuite so you can focus on growing your business.
              </p>

              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3 transition-smooth"
              >
                Learn About Managed Services
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;