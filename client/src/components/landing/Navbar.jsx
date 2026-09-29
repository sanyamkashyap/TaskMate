
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Check size={17} strokeWidth={3} />
          </div>

          <span className="text-lg font-semibold">
            TaskMate
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Features
          </a>

          <a
            href="#workflow"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Workflow
          </a>

          <a
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            About
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="hidden sm:inline-flex"
          >
            Log in
          </Button>

          <Button>
            Get started
          </Button>
        </div>

      </div>
    </header>
  );
}

