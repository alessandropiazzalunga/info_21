import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Flame,
  Target,
  Clock,
  Award,
  TrendingUp,
  BookOpen,
  Star,
  Zap,
} from "lucide-react";

const stats = [
  { label: "XP Totali", value: "1,250", icon: Flame, color: "text-primary" },
  { label: "Corsi Completati", value: "8", icon: BookOpen, color: "text-info" },
  { label: "Certificazioni", value: "3", icon: Award, color: "text-warning" },
  { label: "Posizione Classifica", value: "#12", icon: Trophy, color: "text-primary" },
];

const achievements = [
  { name: "Primo Login", icon: Star, earned: true },
  { name: "Primo Corso", icon: BookOpen, earned: true },
  { name: "Settimana Perfetta", icon: Flame, earned: true },
  { name: "Top 10", icon: Trophy, earned: false },
  { name: "Mentore", icon: Award, earned: false },
];

const recentActivity = [
  { action: "Completato corso", detail: "Introduzione a React", xp: "+50", time: "2 ore fa" },
  { action: "Nuovo badge", detail: "Fast Learner", xp: "+25", time: "1 giorno fa" },
  { action: "Quiz superato", detail: "TypeScript Basics", xp: "+30", time: "2 giorni fa" },
];

export function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Header */}
      <div className="gradient-hero rounded-2xl p-6 md:p-8 border border-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Bentornato, <span className="text-gradient">marconi@itisdalmine.edu.it</span>
            </h1>
            <p className="text-muted-foreground mt-1">
              Continua il tuo percorso di crescita con Project Informatica
            </p>
          </div>
          <Button variant="hero" size="lg" className="gap-2">
            <Zap className="w-5 h-5" />
            Riprendi Corso
          </Button>
        </div>

        {/* Progress to next level */}
        <div className="mt-6 bg-card/60 rounded-xl p-4 border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progresso Livello 6</span>
            <span className="text-sm text-muted-foreground">1,250 / 1,500 XP</span>
          </div>
          <Progress value={83} className="h-3" />
          <p className="text-xs text-muted-foreground mt-2">
            250 XP per sbloccare nuovi premi
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
        {stats.map((stat) => (
          <Card key={stat.label} className="hover:border-primary/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-accent ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Badge Ottenuti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {achievements.map((badge) => (
                <div
                  key={badge.name}
                  className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                    badge.earned
                      ? "bg-accent"
                      : "bg-muted opacity-50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      badge.earned ? "gradient-primary" : "bg-secondary"
                    }`}
                  >
                    <badge.icon
                      className={`w-6 h-6 ${
                        badge.earned ? "text-primary-foreground" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <span className="text-xs mt-2 font-medium text-center">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Attività Recente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.detail}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="success">{activity.xp}</Badge>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Challenge */}
      <Card className="border-primary/30 bg-accent/30">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center animate-pulse-glow">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Sfida Giornaliera</h3>
                <p className="text-muted-foreground text-sm">
                  Completa un quiz su JavaScript per guadagnare 100 XP bonus
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-mono">12:34:56</span>
              </div>
              <Button variant="hero">Inizia Sfida</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
