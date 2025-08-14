import { DefaultDemo, CustomColorDemo } from "@/components/expandable-tabs-demo";

export default function ExpandableTabsDemoPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">ExpandableTabs Component Demo</h1>
          <p className="text-muted-foreground text-lg">
            Interactive tabs that expand to show their labels when clicked. Click on any tab to see the animation.
          </p>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Default Demo</h2>
            <p className="text-muted-foreground">
              The basic ExpandableTabs with default styling and primary color active state.
            </p>
            <div className="flex justify-center p-8 bg-muted/20 rounded-lg">
              <DefaultDemo />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Custom Color Demo</h2>
            <p className="text-muted-foreground">
              ExpandableTabs with custom active color and border styling.
            </p>
            <div className="flex justify-center p-8 bg-muted/20 rounded-lg">
              <CustomColorDemo />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Component Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">🎯 Click to Expand</h3>
                <p className="text-sm text-muted-foreground">
                  Click any tab to see the smooth expand animation revealing the label text.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">🎨 Customizable</h3>
                <p className="text-sm text-muted-foreground">
                  Change colors, add custom classes, and customize the active state appearance.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">📱 Responsive</h3>
                <p className="text-sm text-muted-foreground">
                  Works perfectly on mobile and desktop with smooth animations.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">🔧 Separators</h3>
                <p className="text-sm text-muted-foreground">
                  Add visual separators between tab groups for better organization.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
