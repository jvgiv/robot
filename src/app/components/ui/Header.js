"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const homeSubItems = [
  { href: "/#home", label: "Home" },
  { href: "/#stats", label: "Stats" },
  { href: "/#why-sponsor", label: "Why Sponsor" },
  { href: "/#record", label: "Record" },
  { href: "/#tiers", label: "Tiers" },
  { href: "/#donate", label: "Donate" },
];

const navItems = [
  { href: "/", label: "Home", subItems: homeSubItems },
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
          <li key={item.href} className={item.subItems ? "nav-dropdown" : ""}>
            <Link href={item.href} className={isActive(item.href) ? "active" : ""}>
              {item.label}
            </Link>
            {item.subItems && (
              <ul className="nav-dropdown-menu">
                {item.subItems.map((sub) => (
                  <li key={sub.href}>
                    <Link href={sub.href}>{sub.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
