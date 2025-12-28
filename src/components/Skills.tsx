import { Code2, Cpu, Database, Wrench, Award, Languages } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C/C++', 'Python', 'SQL', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Hardware & Microcontrollers',
    icon: Cpu,
    skills: ['STM32', 'ESP32', 'Arduino', 'Sensors Integration', 'IoT'],
  },
  {
    title: 'Data & Analytics',
    icon: Database,
    skills: ['Power BI', 'Tableau', 'MS Excel', 'Data Visualization', 'Machine Learning'],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Node.js', 'DSA', 'OOP'],
  },
];

const certifications = [
  { name: 'Data Analytics with Python', provider: 'NPTEL', link: 'https://drive.google.com/file/d/1X_Z_TXSuJ_Hwl7E9d4HI3MPkuQywamT3/view?usp=drivesdk' },
  { name: 'Python Programming', provider: 'GUVI', link: 'https://www.guvi.in/certificate.html?id=Z594jK6971TpiR64y6' },
  { name: 'Learning Analytics Tools', provider: 'NPTEL', link: 'https://drive.google.com/file/d/1D2J1I30ZSHTsSqD8k4cUx5OsEQGFyo5n/view?usp=drivesdk' },
  { name: 'DSA using Python', provider: 'NPTEL', link: 'https://drive.google.com/file/d/1rXa2-qtK4ueQCf9_Q94nXxDz7IzhI9W4/view?usp=drivesdk' },
  { name: 'Intro to Machine Learning', provider: 'NPTEL', link: 'https://drive.google.com/file/d/1_1iyraE9bNenxCUrAzyLuzP-cVeAAH1F/view?usp=sharing' },
  { name: 'Computer Vision', provider: 'NPTEL', link: 'https://drive.google.com/file/d/1wBFbU4zQF79tIinmFK_FMK8K9wvW6-Ts/view?usp=sharing' },
];

const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Kannada', level: 'Native' },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">04. Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              What I <span className="text-gradient">Know</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-secondary rounded-lg text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-lg p-4 hover:border-primary/40 transition-all duration-300 group block"
                >
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{cert.provider}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Languages className="w-5 h-5 text-primary" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="glass rounded-lg px-5 py-3 hover:border-primary/40 transition-all duration-300"
                >
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-muted-foreground text-sm ml-2">({lang.level})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
