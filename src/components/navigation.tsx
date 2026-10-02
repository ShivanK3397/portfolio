"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main navigation" className="navigation">
      {[{ href: "/", label: "Home" }, { href: "/work", label: "Work" }, { href: "/projects", label: "Projects" }, { href: "/about", label: "About" }].map(({ href, label }) => (
        <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
      ))}
    </nav>
  );
}
