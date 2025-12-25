import { Truck, Home, Shovel, ThermometerSnowflake, ShieldAlert, Clock } from 'lucide-react';

const services = [
  {
    title: "Residential Plowing",
    description: "Keep your Green Bay driveway clear and accessible all winter. We offer seasonal contracts and per-push rates for homeowners.",
    icon: Home,
  },
  {
    title: "Commercial Snow Removal",
    description: "Ensure safety for your employees and customers in Appleton and Fox Valley. Zero-tolerance snow removal for parking lots.",
    icon: Truck,
  },
  {
    title: "Sidewalk Clearing",
    description: "Don't let ice buildup cause accidents. We meticulously clear and salt sidewalks, steps, and entryways in Oshkosh and De Pere.",
    icon: Shovel,
  },
  {
    title: "Ice Dam Removal",
    description: "Protect your roof and gutters from costly damage with our professional steam ice dam removal services across Door County.",
    icon: ThermometerSnowflake,
  },
  {
    title: "Salting & De-icing",
    description: "Premium de-icing agents that work in Wisconsin's sub-zero temperatures to prevent slips and falls on your property.",
    icon: ShieldAlert,
  },
  {
    title: "24/7 Emergency Service",
    description: "Heavy storms don't wait for business hours. We are on call around the clock during major weather events in Northeast WI.",
    icon: Clock,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Snow Removal Services</h2>
          <p className="text-lg text-slate-600">
            Comprehensive winter services tailored to the harsh Wisconsin climate. 
            We handle everything from light dusting to blizzard cleanups.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Request a Free Service Quote
          </a>
          <p className="mt-4 text-sm text-slate-500">
            No obligation. Fast response for all Green Bay area inquiries.
          </p>
        </div>
      </div>
    </section>
  );
}
