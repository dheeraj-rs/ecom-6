'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TreePine, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-green-900/95 backdrop-blur-md shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <TreePine className="w-10 h-10 text-green-400 leaf-animation" />
              <div className="absolute -inset-2 bg-green-400/20 rounded-full blur-md"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Rajan K K Woodworks
              </h1>
              <p className="text-green-300 text-sm">Forest-Inspired Craftsmanship</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative text-lg font-medium transition-all duration-300 group ${
                    pathname === item.href
                      ? 'text-green-400'
                      : 'text-white/90 hover:text-green-400'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-green-800/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-green-400/20"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-green-400'
                      : 'text-white/90 hover:text-green-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}