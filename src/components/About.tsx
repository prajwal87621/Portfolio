import { GraduationCap, Briefcase, Code2, Cpu } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'B.E. Electronics',
    description: 'CGPA: 9.19 at RIT Bengaluru',
  },
  {
    icon: Briefcase,
    title: '2 Internships',
    description: 'Data Analytics & Embedded Systems',
  },
  {
    icon: Cpu,
    title: 'IoT Specialist',
    description: 'ESP32, STM32, Arduino',
  },
  {
    icon: Code2,
    title: 'Data Analyst',
    description: 'Python, SQL, Power BI',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">01. About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Who I <span className="text-gradient">Am</span>
            </h2>
          </div>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a final-year Electronics and Telecommunication student who enjoys working on both hardware and software. 
                I've gained experience in IoT, microcontroller programming, and data analysis through projects and internships.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm comfortable with Embedded Systems, IoT, Python, and data visualization, with a passion for building 
                practical solutions that connect hardware and software.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my B.E. at Ramaiah Institute of Technology with a CGPA of 9.19, 
                expected to graduate in June 2026.
              </p>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-5 hover:border-primary/40 transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
