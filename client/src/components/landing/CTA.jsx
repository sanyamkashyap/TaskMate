import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-2xl border bg-card px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to get things done?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Start your first project and bring your work into one simple
          workspace.
        </p>

        <Button size="lg" className="mt-8">
          Get started
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
