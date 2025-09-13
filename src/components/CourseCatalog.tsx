import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CourseCatalog = () => {
  const courses = [
    {
      title: "JavaScript Fundamentals",
      description: "Master the basics of JavaScript programming with hands-on projects and interactive exercises.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
      instructor: "Sarah Chen",
      duration: "8 hours",
      students: 12500,
      rating: 4.8,
      progress: 65,
      level: "Beginner" as const,
      category: "Programming"
    },
    {
      title: "React Development",
      description: "Build modern web applications with React, hooks, and component-based architecture.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      instructor: "Mike Johnson",
      duration: "12 hours",
      students: 8900,
      rating: 4.9,
      level: "Intermediate" as const,
      category: "Programming"
    },
    {
      title: "Data Science with Python",
      description: "Analyze data, create visualizations, and build machine learning models using Python.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      instructor: "Dr. Emily Rodriguez",
      duration: "15 hours",
      students: 6700,
      rating: 4.7,
      level: "Advanced" as const,
      category: "Data Science"
    },
    {
      title: "UI/UX Design Principles",
      description: "Learn design thinking, user research, and create beautiful, user-friendly interfaces.",
      image: "https://images.unsplash.com/photo-1558655146-364adce2c769?w=400&h=300&fit=crop",
      instructor: "Alex Thompson",
      duration: "10 hours",
      students: 15200,
      rating: 4.6,
      progress: 30,
      level: "Beginner" as const,
      category: "Design"
    },
    {
      title: "Machine Learning Basics",
      description: "Introduction to ML algorithms, neural networks, and artificial intelligence concepts.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      instructor: "Prof. David Kim",
      duration: "20 hours",
      students: 4300,
      rating: 4.8,
      level: "Advanced" as const,
      category: "Data Science"
    },
    {
      title: "Digital Marketing Strategy",
      description: "Master SEO, social media marketing, and digital advertising for business growth.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      instructor: "Lisa Park",
      duration: "6 hours",
      students: 9800,
      rating: 4.5,
      level: "Intermediate" as const,
      category: "Business"
    }
  ];

  const categories = ["All", "Programming", "Data Science", "Design", "Business"];

  const filterCourses = (category: string) => {
    if (category === "All") return courses;
    return courses.filter(course => course.category === category);
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Explore Our Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover courses tailored to your learning goals, with adaptive paths that evolve with your progress.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterCourses(category).map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;