import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Services />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="bg-blue-100 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
                <div className="relative z-10">
                   {/* Image */}
                   <img 
                     src="/snowPlow2.jpg" 
                     alt="Snow plow clearing driveway in Green Bay WI" 
                     className="aspect-video w-full object-cover rounded-lg shadow-md mb-6"
                   />
                   <p className="text-blue-900 font-medium italic">
                     "We treat every driveway like it's our own."
                   </p>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Your Trusted Local Snow Removal Experts</h2>
              <p className="text-lg text-slate-600">
                Green Bay Snow Pros was founded with a simple mission: to provide reliable, timely, and professional snow removal services to our neighbors in Northeast Wisconsin.
              </p>
              <p className="text-slate-600">
                We understand that Wisconsin winters can be unpredictable and harsh. That's why we invest in top-tier equipment and maintain a dedicated team ready to deploy 24/7. Whether it's a light dusting or a major blizzard, we ensure your property remains safe and accessible.
              </p>
              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 hover:underline"
                >
                  Learn more about our team <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Inline Contact Section */}
      <section id="quote" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get Your Free Quote</h2>
            <p className="text-lg text-slate-600">
              Fill out the form below and we'll get back to you with a custom estimate for your property.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ />

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Winter? Don't Wait Until It Snows.</h2>
          <p className="text-xl text-blue-100 mb-8">
            Secure your spot on our route today and enjoy a worry-free winter. Spots fill up fast!
          </p>
          <Link 
            href="#quote" 
            className="inline-block bg-white text-blue-900 font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get Your Free Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
}