const steps = [
  {
    number: "01",
    title: "Create a project",
    description:
      "Create a workspace for your project and keep everything together.",
  },
  {
    number: "02",
    title: "Organize your tasks",
    description:
      "Break your project into tasks and organize them on your board.",
  },
  {
    number: "03",
    title: "Track your progress",
    description:
      "Move tasks through your workflow and always know what comes next.",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="border-y bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Workflow
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Simple from start to finish.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            TaskMate keeps your workflow simple so you can focus on the work
            instead of managing the work.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm font-semibold text-muted-foreground">
                {step.number}
              </span>

              <div className="mt-5 h-px bg-border" />

              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
