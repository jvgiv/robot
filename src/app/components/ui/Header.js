"use client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const close = () => setMenuOpen(false);

  return (
    <>
      <div className="header-nav">
        <Link href="/" className="nav-logo" onClick={close}>
        <Image src='/helm.png' alt='Robo Titans Logo' width={32} height={32} style={{ marginRight: '0.5rem' }} />
          ROBO<span>TITANS</span>
        </Link>

        {/* Desktop nav */}
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

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? "open" : ""} />
          <span className={menuOpen ? "open" : ""} />
          <span className={menuOpen ? "open" : ""} />
        </button>
      </div>

      {/* Mobile overlay — portaled to body to escape header stacking context */}
      {mounted && menuOpen && ReactDOM.createPortal(
        <div className="nav-mobile">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? "active" : ""}
                  onClick={close}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <ul className="nav-mobile-sub">
                    {item.subItems.map((sub) => (
                      <li key={sub.href}>
                        <Link href={sub.href} onClick={close}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>,
        document.body
      )}
    </>
  );
}
