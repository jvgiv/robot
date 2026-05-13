"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Our Team" },
  { href: "/journey", label: "Our Journey" },
  { href: "/robot", label: "Our Robot" },
  { href: "/sponsorship", label: "Sponsorship" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="header-nav">
      <Link href="/" className="nav-logo">
        ROBO<span>TITANS</span>
      </Link>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={isActive(item.href) ? "active" : ""}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
