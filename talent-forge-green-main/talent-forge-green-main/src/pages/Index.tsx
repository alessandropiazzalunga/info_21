import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Dashboard } from "@/components/sections/Dashboard";
import { Courses } from "@/components/sections/Courses";
import { Leaderboard } from "@/components/sections/Leaderboard";
import { Rewards } from "@/components/sections/Rewards";
import { Profile } from "@/components/sections/Profile";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "courses":
        return <Courses />;
      case "leaderboard":
        return <Leaderboard />;
      case "rewards":
        return <Rewards />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="container mx-auto px-4 py-6 md:py-8">
        {renderSection()}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <div>
                <p className="font-semibold text-sm">ProjectForge</p>
                <p className="text-xs text-muted-foreground">by WeAreProject</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Project Informatica. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
