import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-consulting.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional NetSuite consulting team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-width section-padding py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Tharayil-Babu helps businesses get the most out of{' '}
            <span className="text-primary">NetSuite</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Tharayil-Babu helps businesses get the most out of NetSuite by focusing on what matters most — streamlined financial operations and tailored system customization.
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            Whether it's customizing financial reports, optimizing accounting workflows, or configuring NetSuite to match your organization's unique needs, Tharayil-Babu ensures that your ERP system supports smarter decision-making and sustainable growth. Our goal is to transform NetSuite into a powerful financial engine that empowers your business today and scales with you tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium transition-smooth"
            >
              Get Started
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-accent px-8 py-3 text-lg font-medium transition-smooth"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;