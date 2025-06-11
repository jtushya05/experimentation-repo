'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Chief Human Resources Officer',
    company: 'TechNova Solutions',
    image: '👩‍💼',
    rating: 5,
    content: 'Secura Compliances transformed our workplace culture completely. Their comprehensive training programs and policy development helped us achieve 100% POSH compliance while creating a genuinely safer environment for all our employees.'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Managing Director',
    company: 'Global Manufacturing Ltd.',
    image: '👨‍💼',
    rating: 5,
    content: 'Working with Secura was a game-changer for our organization. Their team\'s expertise in board advisory and compliance helped us navigate complex regulations with confidence. Highly recommend their services.'
  },
  {
    name: 'Anjali Patel',
    role: 'Head of Legal & Compliance',
    company: 'FinServ Corp',
    image: '👩‍⚖️',
    rating: 5,
    content: 'The professionalism and depth of knowledge shown by the Secura team is exceptional. They made what seemed like a daunting compliance process seamless and educational for our entire organization.'
  },
  {
    name: 'Vikram Singh',
    role: 'CEO',
    company: 'Digital Dynamics',
    image: '👨‍💻',
    rating: 5,
    content: 'Secura Compliances provided exactly what we needed - practical, actionable guidance combined with ongoing support. Their training sessions were engaging and our employees found them genuinely valuable.'
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-soft-blush/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-champagne-gold/10 text-champagne-gold rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-6">
            What Our
            <span className="gradient-text"> Clients Say</span>
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about our services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-royal-plum" />
            </div>

            {/* Current Testimonial */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-champagne-gold fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-midnight leading-relaxed mb-8 text-center italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-royal-plum to-sunset-coral rounded-full flex items-center justify-center text-2xl">
                  {testimonials[currentIndex].image}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-midnight text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sunset-coral font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-warm-gray text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 text-royal-plum" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-royal-plum scale-125'
                      : 'bg-warm-gray hover:bg-sunset-coral'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 text-royal-plum" />
            </button>
          </div>
        </div>

        {/* Additional Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-warm-gray mb-8">Trusted by leading companies across India</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {['TechCorp', 'FinanceMax', 'GlobalTech', 'InnovateNow'].map((company, index) => (
              <div key={index} className="text-midnight font-bold text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}