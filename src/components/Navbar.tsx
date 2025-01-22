"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem,  } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 mt-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActiveAction={setActive}>
        <Link href={"/"}><MenuItem setActiveAction={setActive} active={active} item="Home">
        
        </MenuItem></Link>

        <MenuItem setActiveAction={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/Courses">All Courses</HoveredLink>

            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
      
        <MenuItem setActiveAction={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Contact">Contact Us</HoveredLink>
         
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

