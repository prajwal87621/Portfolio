import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'IoT-Based Air Quality Monitoring System with 5G',
    subtitle: 'Air Quality Guardian',
    description: 'Developed ESP32-based IoT system with BME680, MQ-9, MQ-135, and dust sensor for real-time environmental monitoring. Built forecasting models achieving ~92% accuracy for 7-day AQI and PM2.5 prediction.',
    tech: ['ESP32', 'Python', 'Machine Learning', 'IoT'],
    github: 'https://github.com/prajwal87621/IOT-Based-Air-Qulaity-Monitoring-System-with-5G',
    live: 'https://prajwal87621.github.io/Air-Quality-Guardian/',
    period: 'Mar 2025 – Jun 2025',
    featured: true,
  },
  {
    title: 'Ola Mobility Data Insights & Visualization',
    description: 'Developed an end-to-end analytics solution for OLA ride data using SQL, Power BI, and Streamlit to uncover ride patterns, customer behavior, revenue trends, and cancellation insights.',
    tech: ['SQL', 'Power BI', 'Streamlit', 'Python'],
    github: 'https://drive.google.com/drive/folders/1nlS3SIpc3Z3n_Lxn13II36Pqif0rvGyS?usp=sharing',
    period: 'Sept 2025 – Oct 2025',
    featured: true,
  },
  {
    title: 'Video Game Sales and Engagement Analysis',
    description: 'Analyzed global video game sales and engagement data using Python, SQL, and Power BI to uncover trends in ratings, wishlists, genres, and platform performance.',
    tech: ['Python', 'SQL', 'Power BI', 'Data Analysis'],
    github: 'https://drive.google.com/drive/folders/1qZC9sYEshCaEat-F8KN6WOJF8CpHdSAo?usp=sharing',
    period: 'Aug 2025 – Sept 2025',
    featured: false,
  },
  {
    title: 'Signal Modulation Simulation and Analysis',
    description: 'Built Python simulations for AM, FM, and PM using NumPy for signal manipulation and Matplotlib for visualization. Achieved over 95% accuracy against theoretical parameters.',
    tech: ['Python', 'NumPy', 'Matplotlib', 'Signal Processing'],
    github: 'https://github.com/prajwal87621/Signal-Modulation-Simulation',
    period: 'Nov 2024 – Jan 2025',
    featured: false,
  },
  {
    title: 'HydroPonics – IoT Hydroponics Monitoring System',
    description: 'Architected full-stack IoT solution with HTML/CSS/JavaScript frontend and Node.js backend. Integrated Arduino sensors for real-time pH and temperature monitoring.',
    tech: ['Arduino', 'Node.js', 'JavaScript', 'IoT'],
    github: 'https://github.com/prajwal87621/HydroPonics',
    period: 'May 2024 – Jul 2024',
    featured: false,
  },
];

export const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">03. Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Things I've <span className="text-gradient">Built</span>
            </h2>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-primary font-mono text-sm">Featured Project</span>
                    <span className="text-muted-foreground text-sm">• {project.period}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-primary font-mono text-sm mb-4">{project.subtitle}</p>
                  )}
                  
                  <p className="text-muted-foreground mb-6 max-w-2xl">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="glass" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View Project
                      </a>
                    </Button>
                    {project.live && (
                      <Button variant="glow" size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-8">Other Noteworthy Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-6 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="w-10 h-10 text-primary" />
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
