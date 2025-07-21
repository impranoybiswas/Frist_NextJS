"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/services', name: 'Services' },
  { path: '/posts', name: 'Posts' },
];

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="h-16 bg-gray-400 w-full flex justify-center items-center gap-5">
      {navLinks.map((link) => {
        const isActive = pathname === link.path;

        return (
          <Link
            key={link.name}
            href={link.path}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
              isActive
                ? 'bg-white text-blue-600'
                : 'text-white hover:bg-gray-500'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
