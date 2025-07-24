"use client";

import * as React from "react";
import Uploader from "@/components/uploader";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  const uploaderRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex min-h-screen w-full">
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <SidebarTrigger />
          <ModeToggle />
        </div>
          <div className="max-w-4xl mx-auto" ref={uploaderRef}>
            <Uploader />
          </div>
      </div>
    </div>
  );
}
