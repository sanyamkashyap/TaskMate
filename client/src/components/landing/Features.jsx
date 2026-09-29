import { Kanban, Layers3, ListTodo, Users } from "lucide-react";

import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Layers3,
    title: "Projects",
    description: "Keep every project organized inside its own workspace.",
  },
  {
    icon: Kanban,
    title: "Kanban boards",
    description: "Visualize your workflow and move tasks from idea to done.",
  },
  {
    icon: ListTodo,
    title: "Task management",
    description: "Create, organize, prioritize, and track your tasks.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    description: "Give everyone a clear view of what needs to be done.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Features
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to manage your work.
          </h2>

          <p className="mt-4 text-muted-foreground">
            Keep your projects, tasks, and workflow organized in one simple
            workspace.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title} className="p-6 shadow-none">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Icon size={20} />
                </div>

                <h3 className="font-semibold">{feature.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
