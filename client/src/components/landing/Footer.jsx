import { Check } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Check size={16} />
          </div>

          <span className="font-semibold">TaskMate</span>
        </div>

        <p className="text-sm text-muted-foreground">
          © 2026 TaskMate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
