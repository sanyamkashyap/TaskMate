import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductPreview from "./ProductPreview";

export default function Hero() {
  return (
    <section className="px-6 pb-24 pt-24">
      <div className="mx-auto max-w-5xl text-center">
        {/* Small label */}
        <div className="mx-auto w-fit rounded-full border bg-muted px-4 py-2 text-sm text-muted-foreground">
          Simple project management
        </div>

        {/* Heading */}
        <h1 className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Manage projects.
          <span className="block text-muted-foreground">Get things done.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          TaskMate brings your projects, tasks, and workflow together in one
          simple workspace. Plan your work, track progress, and stay organized.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" className="group">
            Get started
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>

          <Button size="lg" variant="outline">
            <Play />
            See how it works
          </Button>
        </div>
      </div>

      {/* Product preview */}
      <div className="mx-auto mt-20 max-w-6xl">
        <ProductPreview />
      </div>
    </section>
  );
}
