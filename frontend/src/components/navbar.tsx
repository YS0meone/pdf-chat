"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import NavMenu from "@/components/nav-menu";
import { NavigationSheet } from "@/components/nav-sheet";

export function Navbar() {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-2xl mx-auto rounded-full">
    <div className="h-full flex items-center justify-between mx-auto px-5">
        <Logo />
        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />
        <div className="flex items-center gap-3">
        <ModeToggle />
        {/* Sign In / Sign Up Buttons */}
        <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full"
        >
            Sign In
        </Button>
        <Button className="rounded-full">Sign Up</Button>
        {/* Mobile Menu */}
        <div className="md:hidden">
            <NavigationSheet />
        </div>
        </div>
    </div>
    </nav>
  )
}