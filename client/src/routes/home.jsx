import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "../components/app-sidebar.jsx";
import Layout from "../layout.jsx";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, FolderKanban } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const { projects } = useOutletContext();
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-full w-full bg-background">
      <div className="mx-auto max-w-7xl p-6 md:p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage and track all your projects in one place.
            </p>
          </div>

          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New project
          </Button>
        </div>

        {/* Search / Filter */}
        <div className="mb-6 flex items-center gap-3">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Project count */}
        <div className="mb-4">
          <h2 className="text-sm font-medium">
            All projects
            <span className="ml-2 text-muted-foreground">
              {filteredProjects.length}
            </span>
          </h2>
        </div>

        {/* Projects */}
        {filteredProjects.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed">
            <div className="mb-4 rounded-full bg-muted p-4">
              <FolderKanban className="h-7 w-7 text-muted-foreground" />
            </div>

            <h3 className="font-medium">
              {search ? "No projects found" : "No projects yet"}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {search
                ? "Try searching for a different project."
                : "Create your first project to get started."}
            </p>

            {!search && (
              <Button className="mt-5">
                <Plus className="mr-2 h-4 w-4" />
                Create project
              </Button>
            )}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((project) => (
              <Card
                key={project._id}
                onClick={() => navigate(`/app/project/${project._id}`)}
                className="group cursor-pointer p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Project icon */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                    {project.name.slice(0, 2).toUpperCase()}
                  </div>

                  <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    Open →
                  </span>
                </div>

                {/* Project name */}
                <h3 className="truncate font-semibold">{project.name}</h3>

                <p className="mt-1 text-sm text-muted-foreground">Project</p>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between border-t pt-4">
                  <span className="text-xs text-muted-foreground">
                    View project
                  </span>

                  <span className="text-sm text-muted-foreground transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
