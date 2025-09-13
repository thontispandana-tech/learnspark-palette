import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CourseCatalog from "@/components/CourseCatalog";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CourseCatalog />
      <Dashboard />
    </div>
  );
};

export default Index;
