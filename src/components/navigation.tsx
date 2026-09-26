"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main navigation" className="navigation">
      {[{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/work", label: "Work" }].map(({ href, label }) => (
        <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
      ))}
    </nav>
  );
}
