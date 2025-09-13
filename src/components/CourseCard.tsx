import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  progress?: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
}

const CourseCard = ({
  title,
  description,
  image,
  instructor,
  duration,
  students,
  rating,
  progress,
  level,
  category
}: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-success text-success-foreground";
      case "Intermediate":
        return "bg-progress text-progress-foreground";
      case "Advanced":
        return "bg-learning text-learning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge className={getLevelColor(level)}>
              {level}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-foreground">
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current text-progress" />
              <span>{rating}</span>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            by <span className="font-medium text-foreground">{instructor}</span>
          </div>

          {progress !== undefined && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium text-foreground">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button className="w-full" variant={progress !== undefined ? "outline" : "default"}>
          {progress !== undefined ? "Continue Learning" : "Start Course"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;