import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Green Bay Snow Pros",
  description: "Get a free quote for snow removal in Green Bay, Appleton, and surrounding areas. Contact us today for residential and commercial service.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600">
            Have questions or need a quote? Fill out the form below or reach out to us directly.
            We respond to all inquiries within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Phone</p>
                    <p className="text-slate-900 font-semibold">(920) 328-5031</p>
                    <p className="text-xs text-slate-400 mt-1">Mon-Fri 8am-6pm (24/7 Emergency)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Email</p>
                    <p className="text-slate-900 font-semibold">gbsnowremoval836@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Service Area</p>
                    <p className="text-slate-900 font-semibold">Green Bay & Fox Valley</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Including Appleton, Oshkosh, De Pere, and Door County.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 p-6 rounded-xl shadow-sm text-white">
              <h3 className="text-xl font-bold mb-4">Emergency Service?</h3>
              <p className="text-blue-100 mb-4">
                During severe winter storms, our phone lines stay open 24/7 for emergency plow requests.
              </p>
              <div className="font-bold text-lg">
                Call (920) 328-5031
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
