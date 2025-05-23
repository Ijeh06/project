"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Code, LayoutGrid, Lightbulb } from "lucide-react";

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "transition-all duration-1000 ease-out",
            inView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          )}>
            <div className="relative">
              <div className="relative h-[450px] w-full rounded-lg overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                  alt="Ijeh Ekene" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">5+ Years</span>
              </div>
            </div>
          </div>

          <div className={cn(
            "space-y-6 transition-all duration-1000 delay-300 ease-out",
            inView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          )}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-3">About Me</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            
            <p className="text-muted-foreground">
              Hello! I'm Ekene, a passionate frontend developer with over 5 years of 
              experience creating beautiful, functional Websites. I specialize 
              in React, Next.js, and UI/UX design, with a strong focus on creating 
              intuitive and engaging user experiences.
            </p>
            
            <p className="text-muted-foreground">
              My journey in web development began during college when I built my first 
              website for a local business. Since then, I've worked with startups and 
              established companies to bring their digital visions to life. I'm constantly 
              learning and experimenting with new technologies to stay at the forefront 
              of web development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Code className="h-8 w-8 mb-3 text-primary" />
                  <h3 className="font-medium">Clean Code</h3>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <LayoutGrid className="h-8 w-8 mb-3 text-primary" />
                  <h3 className="font-medium">Responsive Design</h3>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Lightbulb className="h-8 w-8 mb-3 text-primary" />
                  <h3 className="font-medium">Problem Solving</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}