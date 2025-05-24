"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

export function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "overflow-hidden group transition-all duration-500 hover:shadow-lg",
        inView
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      )}
      style={{
        transitionDelay: `${150 * index}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-3">
            {project.demoUrl && (
              <Button size="sm" className="rounded-full" asChild>
                <a
                  href={"https://johnson-college--portal.vercel.app"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" className="rounded-full" asChild>
                <a
                  href={"https://github.com/ijeh06/student-harmony-portal"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" /> GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}