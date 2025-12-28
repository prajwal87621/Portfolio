import { Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/passport size photo1.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-sm opacity-75 animate-pulse" />
              <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Prajwal Mahantesh Vanarotti"
                  className="w-full h-full object-cover rotate-90 scale-125 object-[center_30%]"
                />
              </div>
            </div>
          </div>

          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hi there, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Prajwal Mahantesh{' '}
            <span className="text-gradient">Vanarotti</span>
          </h1>
          
          {/* Role */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Electronics Engineer & Data Analyst
          </h2>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <MapPin className="w-4 h-4 text-primary" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Final-year Electronics and Telecommunication student passionate about bridging hardware and software. 
            Experienced in IoT, Embedded Systems, and Data Analytics.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="glow" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com/prajwal87621"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prajwal87621"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:prajwal87621@gmail.com"
              className="p-3 rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
