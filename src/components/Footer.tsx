import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

import LogoLarge from "../../public/logos/large.png";

export default function Footer2() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <div className="h-14 mb-3">
              <Image
                className="h-full w-auto object-contain"
                src={LogoLarge}
                alt="Sunny Props"
              />
            </div>
            <p className="text-white/70 mb-4 text-xs leading-relaxed">
              India's No.1 platform for home buying, connecting millions of
              buyers with trusted developers.
            </p>
            <div className="flex gap-2">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, index) => (
                  <a
                    // biome-ignore lint/suspicious/noArrayIndexKey: --
                    key={index}
                    href="/"
                    className="w-8 h-8 rounded-md bg-white/10 hover:bg-orange-600 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-orange-600 transition-colors"
                >
                  Buy Property
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-orange-600 transition-colors"
                >
                  Rent Property
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-orange-600 transition-colors"
                >
                  Sell Property
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-orange-600 transition-colors"
                >
                  Home Loans
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-orange-600 transition-colors"
                >
                  Property Valuation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-orange-600 transition-colors"
                >
                  Property News
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-orange-600 transition-colors"
                >
                  Market Trends
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-orange-600 transition-colors"
                >
                  Guides & Tips
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-orange-600 transition-colors"
                >
                  EMI Calculator
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-orange-600 transition-colors"
                >
                  Area Converter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Bengaluru Office: Koramangala,
                  <br />
                  Bengaluru - 560034
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <a
                  href="tel:+918012345678"
                  className="text-white/70 hover:text-orange-600 transition-colors"
                >
                  +91 80 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                <a
                  href="mailto:info@propertypulse.com"
                  className="text-white/70 hover:text-orange-600 transition-colors"
                >
                  info@propertypulse.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <p className="text-white/50">
              © 2025 PropertyPulse. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/"
                className="text-white/50 hover:text-orange-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="text-white/50 hover:text-orange-600 transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="/"
                className="text-white/50 hover:text-orange-600 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
