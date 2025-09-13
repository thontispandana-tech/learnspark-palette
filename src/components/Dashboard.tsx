import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Target, TrendingUp, Clock, BookOpen } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Courses Completed",
      value: "12",
      icon: Trophy,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Study Streak",
      value: "15 days",
      icon: Target,
      color: "text-progress",
      bgColor: "bg-progress/10"
    },
    {
      title: "Total Hours",
      value: "84h",
      icon: Clock,
      color: "text-learning",
      bgColor: "bg-learning/10"
    },
    {
      title: "Certificates",
      value: "8",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  const recentActivity = [
    {
      course: "JavaScript Fundamentals",
      lesson: "Variables and Data Types",
      progress: 85,
      timeAgo: "2 hours ago"
    },
    {
      course: "UI/UX Design Principles",
      lesson: "Color Theory",
      progress: 45,
      timeAgo: "1 day ago"
    },
    {
      course: "React Development",
      lesson: "State Management",
      progress: 92,
      timeAgo: "2 days ago"
    }
  ];

  const recommendations = [
    {
      title: "Advanced React Patterns",
      reason: "Based on your React progress",
      difficulty: "Advanced",
      duration: "8 hours"
    },
    {
      title: "JavaScript Testing",
      reason: "Complete your JS fundamentals",
      difficulty: "Intermediate",
      duration: "6 hours"
    },
    {
      title: "Design Systems",
      reason: "Matches your design interests",
      difficulty: "Intermediate",
      duration: "10 hours"
    }
  ];

  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Learning Dashboard
          </h2>
          <p className="text-xl text-muted-foreground">
            Track your progress and discover personalized recommendations
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-card shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="bg-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {recentActivity.map((activity, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{activity.course}</h4>
                      <p className="text-sm text-muted-foreground">{activity.lesson}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {activity.timeAgo}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{activity.progress}%</span>
                    </div>
                    <Progress value={activity.progress} className="h-2" />
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="bg-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-learning" />
                Recommended for You
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{rec.title}</h4>
                      <p className="text-sm text-muted-foreground">{rec.reason}</p>
                    </div>
                    <Badge 
                      className={
                        rec.difficulty === "Beginner" ? "bg-success text-success-foreground" :
                        rec.difficulty === "Intermediate" ? "bg-progress text-progress-foreground" :
                        "bg-learning text-learning-foreground"
                      }
                    >
                      {rec.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{rec.duration}</span>
                    </div>
                    <Button size="sm">
                      Start Course
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;