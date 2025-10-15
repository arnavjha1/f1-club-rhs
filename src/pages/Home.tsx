import { ArrowRight, Trophy, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/f1-hero.jpg";
//line 20 can be used for another header if needed
const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-racing-dark via-racing-dark/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
<br />
              SPEED.
              <br />
              <span className="bg-gradient-racing bg-clip-text text-transparent">
                PASSION.
              </span>
              <br />
              RACING.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Experience the thrill of racing together with fellow F1 enthusiasts at the F1 Club at Redmond High School
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-gradient-racing px-8 py-4 rounded-sm font-bold text-lg hover:shadow-racing transition-all duration-300 hover:scale-105"
            >
              Discover More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Speed lines effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20 animate-speed-line"></div>
          <div className="absolute top-2/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20 animate-speed-line" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20 animate-speed-line" style={{ animationDelay: "1s" }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            WHY JOIN <span className="text-primary">US?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-sm border border-border hover:border-primary transition-all duration-300 hover:shadow-racing group">
              <Trophy className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">National Achievements</h3>
              <p className="text-muted-foreground">
                We participate in the prestigious F1 in Schools competition, showcasing our skills on a national level, demonstrating our commitment to excellence and teamwork. Joining our club provides opportunities to add another national achievement to your resume.
              </p>
            </div>

            <div className="bg-card p-8 rounded-sm border border-border hover:border-primary transition-all duration-300 hover:shadow-racing group">
              <Users className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">Racing Community</h3>
              <p className="text-muted-foreground">
                Connect with fellow F1 enthusiasts, share insights, and build lasting friendships. 
              </p>
            </div>

            <div className="bg-card p-8 rounded-sm border border-border hover:border-primary transition-all duration-300 hover:shadow-racing group">
              <Calendar className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">Race Discussion</h3>
              <p className="text-muted-foreground">
                Complete coverage of every race weekend by F1 experts like Tharan and Sidhu as well as people who just love Formula 1!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-racing-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            READY TO <span className="text-primary">RACE?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of passionate F1 fans and experience racing like never before.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-gradient-racing px-8 py-4 rounded-sm font-bold text-lg hover:shadow-racing transition-all duration-300 hover:scale-105"
          >
            Learn About Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
