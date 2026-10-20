import type { ReactNode } from "react";
import Navigation from "./navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen lg:flex">
      <Navigation />
      <main className="flex-1 p-4 lg:p-8">{children}</main>
    </div>
  );
}