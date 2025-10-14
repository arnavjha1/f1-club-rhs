import { Handshake, TrendingUp, Users, Award, Mail } from "lucide-react";
import sponsorshipHero from "@/assets/sponsorship-hero.jpg";

const Sponsorships = () => {
  const sponsors = [
    {
      tier: "Platinum Partners",
      companies: [
        //{ name: "Apex Racing Technologies", description: "Leading provider of racing simulation technology" },
      ],
    },
    {
      tier: "Gold Partners",
      companies: [
        //{ name: "Speedtech Analytics", description: "Advanced racing data and analytics platform" },
      ],
    },
    {
      tier: "Silver Partners",
      companies: [
        //{ name: "RaceView VR", description: "Virtual reality racing experiences" },
      ],
    },
    {
      tier: "Bronze Partners",
      companies: [
        //{ name: "RaceView VR", description: "Virtual reality racing experiences" },
      ],
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Brand Exposure",
      description: "Connect with passionate F1 enthusiasts at every event",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Expand your reach throughout our hard-working community and at our competitions",
    },
    {
      icon: Award,
      title: "Events & Competitions",
      description: "Feature your brand at our competition races and club events",
    },
    {
      icon: Handshake,
      title: "Partnership Perks",
      description: "Collaborate on content, promotions, and initiatives",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sponsorshipHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-racing-dark via-racing-dark/90 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              OUR
              <br />
              <span className="bg-gradient-racing bg-clip-text text-transparent">
                PARTNERSHIPS
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Powered by brands that share our passion for speed, innovation, and excellence in Formula 1 racing.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              OUR <span className="text-primary">SPONSORS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're proud to partner with industry leaders who believe in our mission and community
            </p>
          </div>

          <div className="space-y-16">
            {sponsors.map((tier, tierIndex) => (
              <div key={tierIndex} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-0.5 flex-1 bg-gradient-racing"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">
                    {tier.tier}
                  </h3>
                  <div className="h-0.5 flex-1 bg-gradient-racing"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tier.companies.map((company, companyIndex) => (
                    <div
                      key={companyIndex}
                      className="bg-card p-8 rounded-sm border border-border hover:border-primary transition-all duration-300 hover:shadow-racing group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 bg-gradient-racing rounded-full group-hover:shadow-glow"></div>
                        <h4 className="text-xl font-bold">{company.name}</h4>
                      </div>
                      <p className="text-muted-foreground">{company.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-racing-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              SPONSORSHIP <span className="text-primary">BENEFITS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Partner with us to reach an engaged, passionate community of F1 enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-racing rounded-sm flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-racing">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            BECOME A <span className="text-primary">PARTNER</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our growing list of partners and connect with the most passionate F1 community. Let's create something extraordinary together.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-racing px-8 py-4 rounded-sm font-bold text-lg hover:shadow-racing transition-all duration-300 hover:scale-105">
            <Mail className="w-5 h-5" />
            Contact Us for Partnership
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sponsorships;
