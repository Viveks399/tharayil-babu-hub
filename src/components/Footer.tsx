const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Tharayil-Babu</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Your trusted NetSuite consulting partner, helping businesses maximize their ERP investment through expert guidance and tailored solutions.
            </p>
            <p className="text-primary-foreground/70 text-sm">
              Based in Belgium • Serving clients worldwide
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:text-right">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70">
            Tharayil-Babu © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;