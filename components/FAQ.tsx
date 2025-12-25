import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer seasonal contracts or per-time pricing?",
    answer: "We offer both! You can sign up for a seasonal contract to ensure priority service all winter in Green Bay and Appleton, or pay per-visit for occasional needs."
  },
  {
    question: "What areas do you service?",
    answer: "We primarily serve Green Bay, Appleton, De Pere, Ashwaubenon, Howard, Oshkosh, and parts of Door County. Contact us to check if your address is in our range."
  },
  {
    question: "How soon after a storm do you come?",
    answer: "For contract customers, we aim to have driveways cleared within 6 hours of the snow stopping. During heavy storms, we make multiple passes."
  },
  {
    question: "Do you shovel walkways and sidewalks?",
    answer: "Yes, we provide full service including shoveling and salting walkways, stairs, and entryways to ensure safe access."
  },
  {
    question: "How can I prevent ice dams in Green Bay winters?",
    answer: "Proper insulation and attic ventilation are key. However, if you already have them, we offer roof raking services to remove snow load before it melts and refreezes at the eaves."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 flex items-start gap-3">
                <Plus className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                {faq.question}
              </h3>
              <p className="text-slate-600 mt-3 ml-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
