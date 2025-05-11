"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-red-500 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/assets/logo.png" alt="Dental Land Clinic Logo" className="h-16 w-16 md:h-20 md:w-20" width={80} height={80} />
            <Link href="/" className="text-xl md:text-2xl font-bold ml-4">
              Dental Land Clinic
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-red-500">Home</Link></li>
              <li><Link href="/#services" className="hover:text-red-500">Services</Link></li>
              <li><Link href="/#about" className="hover:text-red-500">About</Link></li>
              <li><Link href="/location" className="hover:text-red-500">Locations</Link></li>
              <li><Link href="/#doctor-team" className="hover:text-red-500">Doctor Team</Link></li>
              
              
            </ul>
            <Link href="/booking" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li><Link href="/" className="block hover:text-white">Home</Link></li>
              <li><Link href="/#services" className="block hover:text-white">Services</Link></li>
              <li><Link href="/#about" className="block hover:text-white">About</Link></li>
              <li><Link href="/locations" className="block hover:text-white">Locations</Link></li>
              <li><Link href="/#doctor-team" className="block hover:text-white">Doctor Team</Link></li>
            </ul>
            <Link href="/booking" className="block mt-4 bg-white text-red-500 px-4 py-2 rounded-md hover:bg-gray-100 text-center">
              Book Appointment
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}