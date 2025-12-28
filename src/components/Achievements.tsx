import { Trophy, Users } from 'lucide-react';

export const Achievements = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Achievements */}
          <div className="glass rounded-2xl p-8 mb-8 hover:border-primary/40 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Conference Paper Presentation
                </h3>
                <p className="text-muted-foreground">
                  Presented paper <span className="text-primary font-medium">"Real Time IoT-Based Air Quality Monitoring System with 5G"</span> at 
                  the First International Conference on Intellectual Computing and Communication Systems (CICCS-2025), 
                  JSS Academy of Technical Education, Bengaluru, 18-20 September 2025.
                </p>
              </div>
            </div>
          </div>

          {/* Volunteering */}
          <div className="glass rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Volunteering
                </h3>
                <p className="text-muted-foreground">
                  Active member of <span className="text-primary font-medium">National Service Scheme (NSS)</span>, 
                  contributing to community service and social welfare initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
