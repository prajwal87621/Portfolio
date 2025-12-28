import { ExternalLink, Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Labmentix Private Limited',
    role: 'Data Analyst Intern',
    duration: 'August 2025 - November 2025',
    location: 'Remote',
    link: 'https://drive.google.com/file/d/1T3-gLcd5h2Xlqv7HDaRX92sUF2UJN2gj/view?usp=sharing',
    points: [
      'Completed a 3-month internship working on data cleaning, analysis, and visualization using Excel, SQL, Python, Power BI/Tableau',
      'Handled real datasets, built dashboards, and contributed to multiple projects with accuracy and consistency',
      'Demonstrated strong analytical skills, quick learning ability, and collaborated effectively with the data team',
    ],
  },
  {
    company: 'Sarayu Infotech Pvt. Ltd.',
    role: 'Embedded Software Engineer Intern',
    duration: 'September 2024 - October 2024',
    location: 'Bengaluru, Karnataka',
    link: 'https://drive.google.com/file/d/1IwvRtXDEYHpR8GfX0TdBz9GHSJ68-SSS/view?usp=drive_link',
    points: [
      'Worked with STM32 microcontrollers and C programming for industrial automation',
      'Integrated sensors and actuators with microcontrollers for IoT applications',
      'Optimized firmware and debugging processes following industry standards',
    ],
  },
];

const education = [
  {
    institution: 'Ramaiah Institute of Technology',
    degree: 'B.E. — Electronics and Telecommunication Engineering',
    grade: 'CGPA: 9.19',
    duration: 'Expected June 2026',
    location: 'Bengaluru, Karnataka',
  },
  {
    institution: 'S. Cadambi Independent P.U. College',
    degree: 'Intermediate (PCME)',
    grade: '96.66%',
    duration: 'Apr 2021 - Apr 2022',
    location: 'Bengaluru, Karnataka',
  },
  {
    institution: 'St Lawrence High School',
    degree: 'Secondary School (SSLC)',
    grade: '95.2%',
    duration: 'Jun 2019 - July 2020',
    location: 'Bengaluru, Karnataka',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">02. Experience & Education</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Where I've <span className="text-gradient">Worked</span>
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h4>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-5 hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-mono text-sm">{edu.grade}</span>
                      <p className="text-xs text-muted-foreground">{edu.duration}</p>
                    </div>
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
