'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/snowPlow.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6 text-blue-100 text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for 2025 Winter Season
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Reliable Snow Removal & Plowing in Northeast Wisconsin
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
            Fast response times for homes and businesses in Green Bay, Appleton, De Pere, and Door County. 
            Don't get stuck in the cold—get on our schedule today for reliable snow plowing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#quote" 
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
            >
              Get Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <a 
              href="#services"
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 bg-blue-800/50 text-white font-semibold text-lg px-8 py-4 rounded-lg hover:bg-blue-800/70 transition-colors backdrop-blur-sm border border-blue-500/30 cursor-pointer"
            >
              View Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-blue-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              Fully Insured
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              Commercial & Residential
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              Salting & Ice Control
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
