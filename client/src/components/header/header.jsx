import React, { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Plus, Search, Bell, User, Settings, LogOut } from "lucide-react";
import ProjectForm from "../projectForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex h-14 w-full shrink-0 items-center border-b bg-background px-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <SidebarTrigger />

          <div className="hidden h-5 w-px bg-border sm:block" />

          <span className="text-sm font-medium text-muted-foreground">
            TaskMate
          </span>
        </div>

        {/* Right */}
        <div className="ml-auto flex items-center gap-2">
          {/* Search */}
          <Button
            variant="outline"
            size="sm"
            className="hidden text-muted-foreground sm:flex"
          >
            <Search className="mr-2 h-4 w-4" />
            Search
            <kbd className="ml-4 hidden rounded border bg-muted px-1.5 text-[10px] font-medium lg:inline-block">
              ⌘ K
            </kbd>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="h-4 w-4" />
          </Button>

          {/* Create */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-9 w-9 rounded-full p-0"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  S
                </div>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              {/* User information */}
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="font-medium">Sanyam</span>

                  <span className="text-xs font-normal text-muted-foreground">
                    sanyam@example.com
                  </span>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              {/* Profile */}
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>

              {/* Settings */}
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Logout */}
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Keep dialog outside the button */}
      <ProjectForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
