"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import LogoSmall from "../../public/logos/small.png";

export default function Header2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <Image
              src={LogoSmall}
              alt="Sunny Props"
              className="h-full w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-1"
            >
              Buy <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="/"
              className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-1"
            >
              Rent <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="/"
              className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-1"
            >
              Home Loans <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="/"
              className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-1"
            >
              Explore <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="/"
              className="text-sm text-gray-700 hover:text-orange-600 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <a
                href="/"
                className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-1"
              >
                Buy <ChevronDown className="w-3 h-3" />
              </a>
              <a
                href="/"
                className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-1"
              >
                Rent <ChevronDown className="w-3 h-3" />
              </a>
              <a
                href="/"
                className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-1"
              >
                Home Loans <ChevronDown className="w-3 h-3" />
              </a>
              <a
                href="/"
                className="text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-1"
              >
                Explore <ChevronDown className="w-3 h-3" />
              </a>
              <a
                href="/"
                className="text-sm text-gray-700 hover:text-orange-600 transition-colors"
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
