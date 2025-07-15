"use client"

import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-muted pt-17">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Welcome to PDF Chat</h1>
        <p className="mt-4 text-muted-foreground">
          Chat with your PDF documents using AI
        </p>
      </main>
    </div>
  );
}