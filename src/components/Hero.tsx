import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-learning/10" />
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Learn Smarter,
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Not Harder
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
                Personalized learning paths that adapt to your pace and style. 
                Master new skills with AI-powered recommendations and interactive content.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-hover group">
                Start Learning Free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-sm">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Students learning with adaptive technology"
                className="rounded-2xl shadow-hover w-full h-auto"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-card animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Course Completed!</div>
                  <div className="text-xs text-muted-foreground">JavaScript Basics</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-learning rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🚀</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Next Lesson Ready</div>
                  <div className="text-xs text-muted-foreground">React Components</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;