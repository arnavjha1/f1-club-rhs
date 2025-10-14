import { Link, useLocation } from "react-router-dom";
import { Flag } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-racing-dark/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Flag className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold bg-gradient-racing bg-clip-text text-transparent">
              F1 CLUB
            </span>
          </Link>

          <div className="flex gap-8">
            <Link
              to="/"
              className={`relative py-2 font-medium transition-colors ${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-racing"></span>
              )}
            </Link>
            <Link
              to="/about"
              className={`relative py-2 font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-racing"></span>
              )}
            </Link>
            <Link
              to="/sponsorships"
              className={`relative py-2 font-medium transition-colors ${
                isActive("/sponsorships")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Sponsorships
              {isActive("/sponsorships") && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-racing"></span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
