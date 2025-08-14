import { HyperText } from "@/components/ui/hyper-text"

export function HyperTextDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <HyperText
        className="text-4xl font-bold text-black dark:text-white"
        text="Droxa Automation"
        duration={1000}
      />
    </div>
  );
}
