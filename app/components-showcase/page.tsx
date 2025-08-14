import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, MousePointer, Zap } from "lucide-react";

export default function ComponentsShowcase() {
  const components = [
    {
      title: "ExpandableTabs",
      description: "Interactive tabs that expand to show their labels when clicked. Perfect for navigation and menu systems.",
      href: "/expandable-tabs-demo",
      icon: MousePointer,
      features: ["Click to expand", "Smooth animations", "Customizable colors", "Separator support"],
      status: "✅ Integrated as navbar"
    },
    {
      title: "BackgroundGradient",
      description: "Beautiful animated gradient backgrounds that respond to user interaction with stunning visual effects.",
      href: "/background-gradient-demo", 
      icon: Palette,
      features: ["Animated gradients", "Hover effects", "Performance optimized", "Fully customizable"],
      status: "✅ Integrated in services section"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Component Showcase</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of beautiful, interactive React components built with Tailwind CSS, 
            TypeScript, and Framer Motion. Each component is production-ready and fully customizable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {components.map((component) => {
            const IconComponent = component.icon;
            return (
              <Card key={component.title} className="relative group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{component.title}</CardTitle>
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {component.status}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {component.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                        {component.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Zap className="h-3 w-3 text-primary mr-1" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link href={component.href}>
                      <Button className="w-full group">
                        View Demo
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Navigation</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/">
              <Button variant="outline" className="w-full justify-start">
                🏠 Home Page
              </Button>
            </Link>
            <Link href="/expandable-tabs-demo">
              <Button variant="outline" className="w-full justify-start">
                🎯 ExpandableTabs Demo
              </Button>
            </Link>
            <Link href="/background-gradient-demo">
              <Button variant="outline" className="w-full justify-start">
                🎨 BackgroundGradient Demo
              </Button>
            </Link>
            <Link href="/#services">
              <Button variant="outline" className="w-full justify-start">
                ⚡ Services Section
              </Button>
            </Link>
          </div>
        </div>

        {/* Implementation Notes */}
        <div className="mt-12 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Implementation Status</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-200">ExpandableTabs</h3>
                <p className="text-sm text-green-600 dark:text-green-300">Fully integrated as the main navigation system</p>
              </div>
              <span className="text-green-600 dark:text-green-400">✅ Live</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-200">BackgroundGradient</h3>
                <p className="text-sm text-green-600 dark:text-green-300">Featured in services section with custom Droxa content</p>
              </div>
              <span className="text-green-600 dark:text-green-400">✅ Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
