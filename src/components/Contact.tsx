import { Mail, Phone, Linkedin, Github, Globe, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'prajwal87621@gmail.com',
    href: 'mailto:prajwal87621@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8762113668',
    href: 'https://wa.me/918762113668',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'prajwal87621',
    href: 'https://www.linkedin.com/in/prajwal87621',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'prajwal87621',
    href: 'https://github.com/prajwal87621',
  },
  {
    icon: Globe,
    label: 'Portfolio',
    value: 'prajwal87621.netlify.app',
    href: 'https://prajwal87621.netlify.app/',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-mono text-sm mb-2">05. Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Bengaluru, Karnataka, India</span>
          </div>

          {/* Contact Links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 hover:border-primary/40 transition-all duration-300 group block"
              >
                <contact.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                  {contact.label}
                </h4>
                <p className="text-xs text-muted-foreground mt-1 truncate">{contact.value}</p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <Button variant="glow" size="lg" asChild>
            <a href="mailto:prajwal87621@gmail.com">
              <Mail className="w-4 h-4" />
              Say Hello
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
