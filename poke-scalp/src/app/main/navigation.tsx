"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "@/src/app/globals.css";

const links = [
    { href: "/main/profil", label: "Profil" },
    { href: "/main/dashboard", label: "Dashboard" },
    { href: "/main/stock", label: "Stock" },
    { href: "/main", label: "Opérations" },
    { href: "/", label: "Groupe" },
];

function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-lg px-4 py-3 ${
              active ? "bg-[var(--main_zero)]" : "hover:bg-white/10"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // ferme le menu quand on change de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
{/* MOBILE */}
        {/*barre du haut + burger à droite */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-background px-4 py-3 lg:hidden">
        <span className="text-lg font-bold">PokeScalp</span>

        {/* bouton ouvrir le menu */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          className="flex h-11 w-11 items-center justify-center rounded-lg">
        
          {/* icône burger */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </header>

      {/*Apparition du menu*/}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}>

        {/* fond noir semi-transparent */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}/>
        
        {/* Panneau latéral qui contient les liens*/}
        <aside
          className={`absolute inset-y-0 right-0 z-10 w-64 bg-background p-4 transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}>
        
          {/* bouton fermer le menu */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="mb-4 ml-auto block h-11 w-11 text-2xl rounded-lg">
            ✕
          </button>
          <NavLinks/>
        </aside>
      </div>

{/* PC : barre latérale toujours visible */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col gap-6 bg-background p-4 lg:flex border-r border-black">
        <span className="px-4 text-xl font-bold">PokeScalp</span>
        <NavLinks />
      </aside>
    </>
  );
}