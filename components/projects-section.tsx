"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./project-card";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/types";
import { PROJECTS } from "@/lib/data";

const categories = ["All", "Web App", "Mobile", "UI/UX"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView({ threshold: 0.1 });

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section 
      id="projects" 
      ref={ref} 
      className="py-20 md:py-32 bg-accent/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight mb-3 transition-all duration-1000 ease-out",
            inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            My Recent Projects
          </h2>
          <div className={cn(
            "h-1 w-20 bg-primary rounded-full mx-auto mb-6 transition-all duration-1000 delay-100 ease-out",
            inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}></div>
          <p className={cn(
            "text-muted-foreground transition-all duration-1000 delay-200 ease-out",
            inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            Browse through some of my latest work. Each project showcases my skills and passion for creating beautiful, functional web applications.
          </p>
        </div>

        <div className={cn(
          "flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ease-out",
          inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}