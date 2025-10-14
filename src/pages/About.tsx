import { Users, Target, Heart, Zap } from "lucide-react";
import teamImage from "@/assets/team-celebration.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              ABOUT <span className="text-primary">F1 CLUB</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Where passion meets precision, and every member shares the thrill of Formula 1 racing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black">
                OUR <span className="text-primary">MISSION</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by die-hard F1 enthusiasts, our club brings together fans who live and breathe racing. We're more than just spectators – we're a community united by our love for speed, strategy, and the sport's incredible legacy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're analyzing tire strategies, debating driver performances, or celebrating podium finishes, F1 Club is your home for all things Formula 1.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-racing blur-2xl opacity-20 rounded-lg"></div>
              <img
                src={teamImage}
                alt="F1 Club Team"
                className="relative rounded-sm border border-border shadow-racing w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            OUR <span className="text-primary">VALUES</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-sm border border-border hover:border-primary transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-racing rounded-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground">
                Building lasting connections through our shared passion for F1 racing.
              </p>
            </div>

            <div className="bg-card p-8 rounded-sm border border-border hover:border-primary transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-racing rounded-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Pursuing the same level of excellence that defines Formula 1 racing.
              </p>
            </div>

            <div className="bg-card p-8 rounded-sm border border-border hover:border-primary transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-racing rounded-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-muted-foreground">
                Fueled by an unwavering love for the sport and its rich history.
              </p>
            </div>

            <div className="bg-card p-8 rounded-sm border border-border hover:border-primary transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-racing rounded-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Embracing the cutting-edge technology and innovation of F1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-racing-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">500+</div>
              <div className="text-xl text-muted-foreground">Club Members</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">50+</div>
              <div className="text-xl text-muted-foreground">Events Hosted</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">100%</div>
              <div className="text-xl text-muted-foreground">Racing Spirit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            JOIN THE <span className="text-primary">RACE</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience F1 like never before. Connect with fellow fans, attend exclusive events, and be part of something extraordinary.
          </p>
          <div className="inline-block bg-gradient-racing px-8 py-4 rounded-sm font-bold text-lg shadow-racing">
            Membership Opening Soon
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
