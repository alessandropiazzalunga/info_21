import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Gift,
  User,
  Menu,
  X,
  Flame,
} from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Formazione", icon: BookOpen },
  { id: "leaderboard", label: "Classifica", icon: Trophy },
  { id: "rewards", label: "Premi", icon: Gift },
  { id: "profile", label: "Profilo", icon: User },
];

export function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-foreground tracking-tight">ProjectForge</h1>
              <p className="text-xs text-muted-foreground">WeAreProject</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onSectionChange(item.id)}
                className="gap-2"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* User Stats */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-secondary rounded-full px-3 py-1.5">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">1,250</span>
              <span className="text-xs text-muted-foreground">XP</span>
            </div>
            <Badge variant="success" className="hidden sm:flex gap-1">
              <Trophy className="w-3 h-3" />
              Livello 5
            </Badge>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => {
                    onSectionChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="justify-start gap-3"
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
