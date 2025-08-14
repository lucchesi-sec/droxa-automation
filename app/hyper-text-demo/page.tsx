import { HyperTextDemo } from "@/components/hyper-text-demo";

export default function HyperTextDemoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-2xl font-semibold mb-8 text-muted-foreground">
          HyperText Animation Demo
        </h1>
        <div className="mb-8">
          <HyperTextDemo />
        </div>
        <p className="text-sm text-muted-foreground">
          Hover or click to trigger the animation effect
        </p>
      </div>
    </div>
  );
}
