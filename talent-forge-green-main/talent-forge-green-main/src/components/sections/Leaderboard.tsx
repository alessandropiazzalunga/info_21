import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Medal,
  Crown,
  TrendingUp,
  TrendingDown,
  Minus,
  Flame,
  Users,
} from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "rossi@itisdalmine.edu.it", xp: 3250, level: 8, trend: "up", badges: 12, avatar: "AR" },
  { rank: 2, name: "bianchi@itisdalmine.edu.it", xp: 3100, level: 8, trend: "up", badges: 11, avatar: "GM" },
  { rank: 3, name: "verdi@itisdalmine.edu.it", xp: 2890, level: 7, trend: "same", badges: 10, avatar: "LB" },
  { rank: 4, name: "ferrari@itisdalmine.edu.it", xp: 2750, level: 7, trend: "up", badges: 9, avatar: "SP" },
  { rank: 5, name: "esposito@itisdalmine.edu.it", xp: 2600, level: 7, trend: "down", badges: 9, avatar: "MT" },
  { rank: 6, name: "romano@itisdalmine.edu.it", xp: 2450, level: 6, trend: "up", badges: 8, avatar: "CF" },
  { rank: 7, name: "colombo@itisdalmine.edu.it", xp: 2300, level: 6, trend: "same", badges: 7, avatar: "DL" },
  { rank: 8, name: "ricci@itisdalmine.edu.it", xp: 2150, level: 6, trend: "down", badges: 7, avatar: "EC" },
  { rank: 9, name: "marino@itisdalmine.edu.it", xp: 2000, level: 5, trend: "up", badges: 6, avatar: "FN" },
  { rank: 10, name: "greco@itisdalmine.edu.it", xp: 1850, level: 5, trend: "same", badges: 6, avatar: "AV" },
  { rank: 11, name: "bruno@itisdalmine.edu.it", xp: 1700, level: 5, trend: "down", badges: 5, avatar: "RD" },
  { rank: 12, name: "marconi@itisdalmine.edu.it", xp: 1250, level: 5, trend: "up", badges: 4, avatar: "MT", isCurrentUser: true },
];

const topThree = leaderboardData.slice(0, 3);

const TrendIcon = ({ trend }: { trend: string }) => {
  if (trend === "up") return <TrendingUp className="w-4 h-4 text-primary" />;
  if (trend === "down") return <TrendingDown className="w-4 h-4 text-destructive" />;
  return <Minus className="w-4 h-4 text-muted-foreground" />;
};

const RankIcon = ({ rank }: { rank: number }) => {
  if (rank === 1) return <Crown className="w-6 h-6 text-yellow-500" />;
  if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
  if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
  return <span className="font-bold text-lg text-muted-foreground">#{rank}</span>;
};

export function Leaderboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Classifica</h1>
          <p className="text-muted-foreground mt-1">
            Competi con i tuoi colleghi e scala la vetta
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="default" size="sm">Settimanale</Button>
          <Button variant="outline" size="sm">Mensile</Button>
          <Button variant="outline" size="sm">Sempre</Button>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4">
        {/* Second Place */}
        <Card className="relative mt-8 bg-gradient-to-b from-secondary/80 to-card border-secondary">
          <CardContent className="pt-12 pb-6 text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-xl font-bold border-4 border-gray-400 shadow-lg">
                {topThree[1].avatar}
              </div>
              <div className="absolute -top-2 -right-2 bg-gray-400 rounded-full p-1">
                <Medal className="w-4 h-4 text-card" />
              </div>
            </div>
            <h3 className="font-bold mt-2 text-sm truncate">{topThree[1].name.split('@')[0]}</h3>
            <p className="text-2xl font-bold text-primary">{topThree[1].xp.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">XP</p>
            <Badge variant="secondary" className="mt-2">Livello {topThree[1].level}</Badge>
          </CardContent>
        </Card>

        {/* First Place */}
        <Card className="relative bg-gradient-to-b from-accent to-card border-primary/30 shadow-lg">
          <CardContent className="pt-12 pb-6 text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground border-4 border-yellow-500 shadow-xl">
                {topThree[0].avatar}
              </div>
              <div className="absolute -top-3 -right-1 bg-yellow-500 rounded-full p-1.5">
                <Crown className="w-5 h-5 text-card" />
              </div>
            </div>
            <h3 className="font-bold text-lg mt-4 truncate">{topThree[0].name.split('@')[0]}</h3>
            <p className="text-3xl font-bold text-primary">{topThree[0].xp.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">XP</p>
            <Badge variant="success" className="mt-2">Livello {topThree[0].level}</Badge>
          </CardContent>
        </Card>

        {/* Third Place */}
        <Card className="relative mt-12 bg-gradient-to-b from-amber-900/20 to-card border-amber-600/30">
          <CardContent className="pt-10 pb-6 text-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-lg font-bold border-4 border-amber-600 shadow-lg">
                {topThree[2].avatar}
              </div>
              <div className="absolute -top-2 -right-2 bg-amber-600 rounded-full p-1">
                <Medal className="w-3 h-3 text-card" />
              </div>
            </div>
            <h3 className="font-bold text-sm mt-2 truncate">{topThree[2].name.split('@')[0]}</h3>
            <p className="text-xl font-bold text-primary">{topThree[2].xp.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">XP</p>
            <Badge variant="secondary" className="mt-2">Livello {topThree[2].level}</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Full Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Classifica Completa
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {leaderboardData.slice(3).map((user) => (
              <div
                key={user.rank}
                className={`flex items-center justify-between p-4 rounded-xl transition-all hover:bg-accent/50 ${
                  user.isCurrentUser ? "bg-accent border border-primary/50" : "bg-secondary/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 flex justify-center">
                    <RankIcon rank={user.rank} />
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      user.isCurrentUser ? "gradient-primary text-primary-foreground" : "bg-secondary"
                    }`}
                  >
                    {user.avatar}
                  </div>
                  <div>
                    <p className="font-semibold flex items-center gap-2">
                      {user.name.split('@')[0]}
                      {user.isCurrentUser && (
                        <Badge variant="success" className="text-xs">Tu</Badge>
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Livello {user.level} • {user.badges} badge
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <TrendIcon trend={user.trend} />
                  <div className="text-right">
                    <p className="font-bold text-lg flex items-center gap-1">
                      <Flame className="w-4 h-4 text-primary" />
                      {user.xp.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">XP</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
