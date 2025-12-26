import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Green Bay Snow Pros</h3>
            <p className="text-sm">
              Professional snow removal services for Northeast Wisconsin. 
              Keeping your driveways and parking lots safe all winter long.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>Green Bay, WI</li>
              <li>Appleton, WI</li>
              <li>Oshkosh, WI</li>
              <li>Door County, WI</li>
              <li>De Pere, WI</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Phone: (920) 328-5031</li>
              <li>Email: gbsnowremoval836@gmail.com</li>
              <li>Hours: 24/7 Emergency Service</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Green Bay Snow Pros. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
