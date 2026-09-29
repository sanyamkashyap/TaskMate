import { Check, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const columns = [
  {
    title: "To do",
    count: 3,
    tasks: [
      ["Design homepage", "High"],
      ["Create dashboard", "Medium"],
      ["Setup analytics", "Low"],
    ],
  },
  {
    title: "In progress",
    count: 2,
    tasks: [
      ["Build authentication", "High"],
      ["Create API routes", "Medium"],
    ],
  },
  {
    title: "Done",
    count: 3,
    tasks: [
      ["Project setup", "Done"],
      ["Database schema", "Done"],
      ["Repository setup", "Done"],
    ],
  },
];

export default function ProductPreview() {
  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-xl">
      {/* Browser bar */}
      <div className="flex h-11 items-center border-b px-4">
        <div className="flex gap-1.5">
          <Circle className="h-2.5 w-2.5 fill-muted-foreground text-muted-foreground" />
          <Circle className="h-2.5 w-2.5 fill-muted-foreground text-muted-foreground" />
          <Circle className="h-2.5 w-2.5 fill-muted-foreground text-muted-foreground" />
        </div>

        <div className="mx-auto hidden rounded-md bg-muted px-20 py-1 text-xs text-muted-foreground sm:block">
          taskmate.app
        </div>
      </div>

      <div className="flex min-h-[430px]">
        {/* Sidebar */}
        <aside className="hidden w-52 shrink-0 border-r p-4 sm:block">
          <div className="mb-7 flex items-center gap-2 font-semibold">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Check size={14} />
            </div>
            TaskMate
          </div>

          <div className="space-y-1 text-sm">
            <div className="rounded-md bg-muted px-3 py-2 font-medium">
              Dashboard
            </div>

            <div className="px-3 py-2 text-muted-foreground">My tasks</div>

            <div className="px-3 py-2 text-muted-foreground">Projects</div>
          </div>

          <div className="mt-8">
            <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Projects
            </p>

            <div className="space-y-2 px-3 text-sm text-muted-foreground">
              <div>Website Redesign</div>
              <div>Mobile App</div>
              <div>Marketing</div>
            </div>
          </div>
        </aside>

        {/* Board */}
        <div className="min-w-0 flex-1 overflow-x-auto p-5">
          {/* Board header */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Website Redesign</h3>

              <p className="mt-1 text-xs text-muted-foreground">
                Product development
              </p>
            </div>

            <Button size="sm">+ Add task</Button>
          </div>

          {/* Columns */}
          <div className="grid min-w-[650px] grid-cols-3 gap-3">
            {columns.map((column) => (
              <div key={column.title} className="rounded-lg bg-muted/50 p-3">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold">{column.title}</span>

                  <span className="text-xs text-muted-foreground">
                    {column.count}
                  </span>
                </div>

                <div className="space-y-2">
                  {column.tasks.map(([task, priority]) => (
                    <Card key={task} className="rounded-lg p-3 shadow-none">
                      <p className="text-xs font-medium">{task}</p>

                      <div className="mt-3 flex justify-between">
                        <span className="text-[9px] uppercase text-muted-foreground">
                          Task
                        </span>

                        <span className="text-[9px] text-muted-foreground">
                          {priority}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
