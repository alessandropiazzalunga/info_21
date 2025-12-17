import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  User,
  Mail,
  Phone,
  Building,
  Calendar,
  Award,
  BookOpen,
  Target,
  Edit,
  Download,
  Share2,
  Star,
  Shield,
  Code,
  Database,
} from "lucide-react";

const certifications = [
  { name: "React Developer", issuer: "ProjectForge", date: "Gen 2024", icon: Code },
  { name: "TypeScript Expert", issuer: "ProjectForge", date: "Dic 2023", icon: Code },
  { name: "SQL Fundamentals", issuer: "ProjectForge", date: "Nov 2023", icon: Database },
];

const skills = [
  { name: "JavaScript", level: 85 },
  { name: "React", level: 75 },
  { name: "TypeScript", level: 70 },
  { name: "Node.js", level: 60 },
  { name: "SQL", level: 55 },
  { name: "Git", level: 80 },
];

const badges = [
  { name: "Fast Learner", icon: Star, color: "text-yellow-500" },
  { name: "Team Player", icon: User, color: "text-blue-500" },
  { name: "Problem Solver", icon: Target, color: "text-primary" },
  { name: "Security Aware", icon: Shield, color: "text-red-500" },
];

export function Profile() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Profile Header */}
      <Card className="overflow-hidden">
        <div className="h-24 gradient-primary"></div>
        <CardContent className="relative pt-0 pb-6">
          <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-12">
            <div className="w-24 h-24 rounded-2xl bg-card border-4 border-card shadow-lg flex items-center justify-center text-3xl font-bold text-primary">
              MT
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold">marconi@itisdalmine.edu.it</h1>
                  <p className="text-muted-foreground">Junior Developer</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Edit className="w-4 h-4" />
                    Modifica
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Condividi
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-4 bg-accent/50 rounded-xl">
              <p className="text-2xl font-bold text-primary">1,250</p>
              <p className="text-sm text-muted-foreground">XP Totali</p>
            </div>
            <div className="text-center p-4 bg-accent/50 rounded-xl">
              <p className="text-2xl font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">Livello</p>
            </div>
            <div className="text-center p-4 bg-accent/50 rounded-xl">
              <p className="text-2xl font-bold text-primary">8</p>
              <p className="text-sm text-muted-foreground">Corsi</p>
            </div>
            <div className="text-center p-4 bg-accent/50 rounded-xl">
              <p className="text-2xl font-bold text-primary">#12</p>
              <p className="text-sm text-muted-foreground">Classifica</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Personal Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Informazioni Personali
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">marconi@itisdalmine.edu.it</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Telefono</p>
                <p className="font-medium">+39 333 123 4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
              <Building className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Dipartimento</p>
                <p className="font-medium">Sviluppo Software</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Data Inizio</p>
                <p className="font-medium">15 Settembre 2023</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Competenze
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certificazioni
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-accent/50 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <cert.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Badge Ottenuti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-secondary/30 rounded-xl hover:bg-accent/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-card shadow-md flex items-center justify-center mb-2 border border-border">
                    <badge.icon className={`w-7 h-7 ${badge.color}`} />
                  </div>
                  <p className="font-medium text-sm text-center">{badge.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
