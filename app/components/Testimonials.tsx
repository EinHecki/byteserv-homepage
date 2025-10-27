import { useState } from "react";

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role?: string;
  rating: number; // 1-5
  text: string;
  image?: string; // Optional profile image
  date?: string; // Optional date of review
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

/**
 * Testimonials Component
 *
 * Displays customer reviews and references in a modern card layout.
 *
 * Usage:
 * 1. Pass testimonials array via props, or
 * 2. Update the defaultTestimonials array below with real data
 *
 * Each testimonial should include:
 * - name: Customer name
 * - company: Company name
 * - role: Job title (optional)
 * - rating: 1-5 stars
 * - text: Review text
 * - image: Profile photo path (optional)
 * - date: Review date (optional)
 */
export default function Testimonials({ testimonials }: TestimonialsProps) {
  // Default testimonials - replace with real customer reviews
  const defaultTestimonials: Testimonial[] = testimonials || [
    {
      id: "1",
      name: "Max Mustermann",
      company: "Restaurant Bella Vista",
      role: "Geschäftsführer",
      rating: 5,
      text: "Die Kassenlösung von ByteServ hat unseren Betrieb revolutioniert. Schneller Service, perfekte Integration und zuverlässige Betreuung!",
      date: "Oktober 2024"
    },
    {
      id: "2",
      name: "Sarah Schmidt",
      company: "Café Zeitlos",
      role: "Inhaberin",
      rating: 5,
      text: "Besonders begeistert bin ich von den mobilen Touchsystemen. Unsere Gäste lieben die Kartenzahlung am Tisch. Top Beratung!",
      date: "September 2024"
    },
    {
      id: "3",
      name: "Thomas Weber",
      company: "Einzelhandel Weber GmbH",
      role: "IT-Leiter",
      rating: 5,
      text: "Professionelle Umsetzung unserer Filialvernetzung. ByteServ hat alle Anforderungen perfekt umgesetzt. Absolute Empfehlung!",
      date: "August 2024"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-600"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Das sagen unsere Kunden
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Überzeugen Sie sich von den Erfahrungen unserer zufriedenen Kunden
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {defaultTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Stars */}
              {renderStars(testimonial.rating)}

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image doesn't exist
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role && `${testimonial.role}, `}{testimonial.company}
                  </p>
                  {testimonial.date && (
                    <p className="text-gray-500 text-xs mt-1">{testimonial.date}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Möchten Sie auch von unseren Lösungen profitieren?
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Jetzt unverbindlich anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
