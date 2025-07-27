import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button variant="default" size="lg">
        Click me
      </Button>
      <Button variant="outline" size="lg">
        Outline Button
      </Button>
      <Button variant="secondary" size="lg">
        Secondary Button
      </Button>
    </div>
  );
}
