import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Clock,
  Award,
  Play,
  CheckCircle,
  Lock,
  Star,
  Users,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Fondamenti di Programmazione",
    description: "Impara le basi della programmazione con Python e JavaScript",
    category: "Base",
    progress: 100,
    duration: "8 ore",
    xp: 200,
    status: "completed",
    rating: 4.8,
    students: 234,
  },
  {
    id: 2,
    title: "React & TypeScript",
    description: "Sviluppa applicazioni web moderne con React e TypeScript",
    category: "Frontend",
    progress: 65,
    duration: "12 ore",
    xp: 350,
    status: "in-progress",
    rating: 4.9,
    students: 189,
  },
  {
    id: 3,
    title: "Database e SQL",
    description: "Gestisci dati con MySQL, PostgreSQL e MongoDB",
    category: "Backend",
    progress: 30,
    duration: "10 ore",
    xp: 300,
    status: "in-progress",
    rating: 4.7,
    students: 156,
  },
  {
    id: 4,
    title: "DevOps Essentials",
    description: "CI/CD, Docker, Kubernetes e cloud computing",
    category: "DevOps",
    progress: 0,
    duration: "15 ore",
    xp: 500,
    status: "locked",
    rating: 4.6,
    students: 98,
    prerequisite: "Database e SQL",
  },
  {
    id: 5,
    title: "Cybersecurity Basics",
    description: "Fondamenti di sicurezza informatica e best practices",
    category: "Security",
    progress: 0,
    duration: "8 ore",
    xp: 250,
    status: "available",
    rating: 4.8,
    students: 145,
  },
  {
    id: 6,
    title: "Project Management IT",
    description: "Metodologie Agile, Scrum e gestione progetti IT",
    category: "Soft Skills",
    progress: 0,
    duration: "6 ore",
    xp: 180,
    status: "available",
    rating: 4.5,
    students: 203,
  },
];

const categories = ["Tutti", "Base", "Frontend", "Backend", "DevOps", "Security", "Soft Skills"];

export function Courses() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Percorsi Formativi</h1>
        <p className="text-muted-foreground mt-1">
          Sviluppa le tue competenze e ottieni certificazioni riconosciute
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat, index) => (
          <Button
            key={cat}
            variant={index === 0 ? "default" : "outline"}
            size="sm"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-accent/30 border-border">
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-muted-foreground">Completati</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-accent/30 border-border">
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center gap-3">
              <Play className="w-8 h-8 text-info" />
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-xs text-muted-foreground">In Corso</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-accent/30 border-border">
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-warning" />
              <div>
                <p className="text-2xl font-bold">45h</p>
                <p className="text-xs text-muted-foreground">Ore Totali</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-accent/30 border-border">
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-xs text-muted-foreground">Certificazioni</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        {courses.map((course) => (
          <Card
            key={course.id}
            className={`group relative overflow-hidden ${
              course.status === "locked" ? "opacity-70" : ""
            }`}
          >
            {course.status === "completed" && (
              <div className="absolute top-4 right-4">
                <Badge variant="success" className="gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Completato
                </Badge>
              </div>
            )}
            {course.status === "in-progress" && (
              <div className="absolute top-4 right-4">
                <Badge variant="info" className="gap-1">
                  <Play className="w-3 h-3" />
                  In Corso
                </Badge>
              </div>
            )}
            {course.status === "locked" && (
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="gap-1">
                  <Lock className="w-3 h-3" />
                  Bloccato
                </Badge>
              </div>
            )}

            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="accent">{course.category}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-3 h-3 fill-warning text-warning" />
                  {course.rating}
                </div>
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {course.title}
              </CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {course.progress > 0 && (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {course.students}
                </div>
                <Badge variant="outline">{course.xp} XP</Badge>
              </div>

              {course.status === "locked" ? (
                <div className="text-xs text-muted-foreground bg-secondary/50 rounded-lg p-2">
                  <Lock className="w-3 h-3 inline mr-1" />
                  Richiede: {course.prerequisite}
                </div>
              ) : (
                <Button
                  variant={course.status === "completed" ? "outline" : "hero"}
                  className="w-full"
                >
                  {course.status === "completed" ? "Rivedi Corso" : 
                   course.status === "in-progress" ? "Continua" : "Inizia Corso"}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
