import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Gift,
  Coffee,
  Ticket,
  ShoppingBag,
  Headphones,
  Smartphone,
  Plane,
  Coins,
  Clock,
  CheckCircle,
} from "lucide-react";

const userPoints = 1250;

const rewards = [
  {
    id: 1,
    name: "Caffè Gratis",
    description: "Un caffè alla macchinetta aziendale",
    points: 100,
    icon: Coffee,
    category: "Daily",
    available: true,
  },
  {
    id: 2,
    name: "Buono Pranzo",
    description: "Buono da 10€ per la mensa aziendale",
    points: 300,
    icon: Ticket,
    category: "Food",
    available: true,
  },
  {
    id: 3,
    name: "Gadget Project",
    description: "T-shirt o felpa con logo aziendale",
    points: 500,
    icon: ShoppingBag,
    category: "Merchandise",
    available: true,
  },
  {
    id: 4,
    name: "Cuffie Wireless",
    description: "Cuffie bluetooth per il lavoro",
    points: 1500,
    icon: Headphones,
    category: "Tech",
    available: false,
  },
  {
    id: 5,
    name: "Smart Watch",
    description: "Smartwatch per il fitness",
    points: 3000,
    icon: Smartphone,
    category: "Tech",
    available: false,
  },
  {
    id: 6,
    name: "Giorno di Ferie Extra",
    description: "Un giorno di ferie aggiuntivo",
    points: 5000,
    icon: Plane,
    category: "Time Off",
    available: false,
  },
];

const redeemedHistory = [
  { name: "Caffè Gratis", date: "15 Gen 2024", points: 100 },
  { name: "Buono Pranzo", date: "10 Gen 2024", points: 300 },
  { name: "Caffè Gratis", date: "5 Gen 2024", points: 100 },
];

const categories = ["Tutti", "Daily", "Food", "Merchandise", "Tech", "Time Off"];

export function Rewards() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header with Points */}
      <div className="gradient-hero rounded-2xl p-6 md:p-8 border border-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Programma Fedeltà</h1>
            <p className="text-muted-foreground mt-1">
              Riscatta i tuoi punti e ottieni premi esclusivi
            </p>
          </div>
          <Card className="bg-card/80 backdrop-blur border-primary/30">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                  <Coins className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">I tuoi punti</p>
                  <p className="text-4xl font-bold text-primary">{userPoints.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
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

      {/* Rewards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        {rewards.map((reward) => {
          const canRedeem = userPoints >= reward.points;
          const progress = Math.min((userPoints / reward.points) * 100, 100);

          return (
            <Card
              key={reward.id}
              className={`group relative overflow-hidden ${
                !canRedeem ? "opacity-80" : ""
              }`}
            >
              <div className="absolute top-4 right-4">
                <Badge variant={canRedeem ? "success" : "secondary"}>
                  {reward.category}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <reward.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{reward.name}</CardTitle>
                <CardDescription>{reward.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold">{reward.points.toLocaleString()}</span>
                  </div>
                  {canRedeem && (
                    <Badge variant="success" className="gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Disponibile
                    </Badge>
                  )}
                </div>

                {!canRedeem && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-medium">
                        {userPoints} / {reward.points}
                      </span>
                    </div>
                    <Progress value={progress} />
                    <p className="text-xs text-muted-foreground mt-1">
                      Ti mancano {(reward.points - userPoints).toLocaleString()} punti
                    </p>
                  </div>
                )}

                <Button
                  variant={canRedeem ? "hero" : "secondary"}
                  className="w-full"
                  disabled={!canRedeem}
                >
                  {canRedeem ? "Riscatta Ora" : "Punti Insufficienti"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Storico Riscatti
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {redeemedHistory.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Gift className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </div>
                <Badge variant="outline">-{item.points} pt</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
