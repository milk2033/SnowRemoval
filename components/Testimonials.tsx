import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Green Bay, WI",
    quote: "The team was incredibly responsive during last week's blizzard. My driveway was cleared before I even woke up for work. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mike Olson",
    location: "Appleton, WI",
    quote: "We use GB Snow Pros for our office parking lot. They are thorough, professional, and always salt perfectly so we never have ice issues.",
    rating: 5,
  },
  {
    name: "Diane Weber",
    location: "De Pere, WI",
    quote: "Fair pricing and reliable service. It's such a relief not having to worry about shoveling the heavy wet snow anymore.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">What Our Neighbors Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl relative">
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
