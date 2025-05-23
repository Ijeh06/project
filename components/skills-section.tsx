"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { SKILLS } from "@/lib/data";

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="skills" 
      ref={ref} 
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight mb-3 transition-all duration-1000 ease-out",
            inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            My Skills
          </h2>
          <div className={cn(
            "h-1 w-20 bg-primary rounded-full mx-auto mb-6 transition-all duration-1000 delay-100 ease-out",
            inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}></div>
          <p className={cn(
            "text-muted-foreground transition-all duration-1000 delay-200 ease-out",
            inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            I've gained expertise in various technologies throughout my career. Here's an overview of my technical skills.
          </p>
        </div>

        <div className={cn(
          "transition-all duration-1000 delay-300 ease-out",
          inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}>
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            
            {Object.entries(SKILLS).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <Card key={skill.name} className={cn(
                      "transition-all duration-500",
                      inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    )}
                    style={{
                      transitionDelay: `${150 * index + 400}ms`,
                    }}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{skill.name}</h3>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}