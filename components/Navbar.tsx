import Link from 'next/link';
import { Snowflake } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Snowflake className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-slate-900">GB Snow Pros</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-slate-600 hover:text-blue-600 font-medium">Services</Link>
            <Link href="/#about" className="text-slate-600 hover:text-blue-600 font-medium">About</Link>
            <Link href="/#faq" className="text-slate-600 hover:text-blue-600 font-medium">FAQ</Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
          <div className="md:hidden flex items-center">
             <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-semibold text-sm"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
