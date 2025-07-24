"use client";

import * as React from "react";
import { FolderPlus, Upload, Folder, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Logo from "@/components/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"

const handleUploadPdf = () => {
    // TODO: Implement PDF upload
    console.log("Upload PDF clicked");
  };

const handleNewFolder = () => {
  // TODO: Implement new folder creation
  console.log("New folder clicked");
};


interface SidebarProps {
  className?: string;
}

// Mock folder data - replace with actual data later
const mockFolders = [
  { id: "1", name: "Research Papers", count: 5 },
  { id: "2", name: "Contracts", count: 12 },
  { id: "3", name: "Invoices", count: 8 },
  { id: "4", name: "Reports", count: 3 },
  { id: "5", name: "Academic Papers", count: 15 },
  { id: "6", name: "Legal Documents", count: 7 },
];

export function AppSideBar({
  className
}: SidebarProps) {
  const [selectedFolder, setSelectedFolder] = React.useState<string | null>(
    null
  );

  return (
    <Sidebar className={`h-screen flex-col bg-background  ${className}`}>
      {/* Header with Logo and Title */}
      <SidebarHeader className="p-4">
          <Logo width={32} height={32} />
      </SidebarHeader>

      {/* Main Actions */}
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupContent className="space-y-2">
            <Button
              className="w-full justify-start"
              size="sm"
              onClick={handleUploadPdf}
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload PDF
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              size="sm"
              onClick={handleNewFolder}
            >
              <FolderPlus className="mr-2 h-4 w-4" />
              New Folder
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Folders List */}
        <SidebarGroup>
            <SidebarGroupLabel className="text-sm font-semibold">
              Folders
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <ScrollArea className="flex-1 px-2">
                <div className="space-y-1 pb-4">
                  {mockFolders.map((folder) => (
                    <Button
                      key={folder.id}
                      variant={selectedFolder === folder.id ? "secondary" : "ghost"}
                      className="w-full justify-between text-sm font-normal h-auto py-2"
                      size="sm"
                      onClick={() => setSelectedFolder(folder.id)}
                    >
                      <div className="flex items-center">
                        <Folder className="mr-2 h-4 w-4" />
                        <span className="truncate">{folder.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                        {folder.count}
                      </span>
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </SidebarGroupContent>
        </SidebarGroup>
                    
      </SidebarContent>

      {/* Bottom Section */}
      <SidebarFooter className="p-4">
        <Separator />
        <Button variant="outline" className="w-full mt-4" size="sm">
          Sign In
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
