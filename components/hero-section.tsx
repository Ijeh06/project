"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Download, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/30 dark:bg-secondary/20 rounded-full blur-[90px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          <div className={cn(
            "transform transition-all duration-1000 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Ijeh Ekene
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Frontend Developer & UI Designer
            </p>
          </div>

          <p className={cn(
            "text-lg text-muted-foreground max-w-xl transition-all duration-1000 delay-300 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            I build exceptional digital experiences with modern technologies.
            Specializing in React, Next.js, and intuitive UI design to create
            beautiful and functional Websites.
          </p>

          <div className={cn(
            "flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-1000 delay-500 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <Button 
              className="rounded-full" 
              size="lg"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full" 
              size="lg"
            >
              <a href="/Ekene-resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>

          <div className={cn(
            "flex items-center gap-4 mt-8 transition-all duration-1000 delay-700 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <a 
              href="https://github.com/Ijeh06" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/ijeh06" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://X.com/ekene_ijeh?s=21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <ArrowDownCircle className="h-6 w-6" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </div>
    </section>
  );
}