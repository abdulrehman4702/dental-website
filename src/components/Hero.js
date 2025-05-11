"use client";
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = [
    {
      image: '/assets/dentist.jpg',
      title: 'Welcome to Dental Lands',
      description: 'At Dental Land, We Provide Complete Oral Care Solution For All of Your Family in Both Offices. Book Your Appointment Online & Get 20% Off on Your First Visit.',
      cta: 'Book Your First Visit'
    },
    {
      image: '/assets/dentist2.jpg',
      title: 'Expert Dental Care',
      description: 'Our team of experienced professionals is here to provide you with the best dental services.',
      cta: 'Meet Our Team'
    },
    {
      image: '/assets/dentist.jpg',
      title: 'Modern Facilities',
      description: 'State-of-the-art equipment and comfortable environment for your dental needs.',
      cta: 'Tour Our Clinic'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-[80vh] text-center overflow-hidden">
      <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: currentSlide === index ? 0.3 : 0
            }}
          ></div>
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center">
        <div className="max-w-3xl">
          <h1 className={`text-4xl md:text-6xl font-bold text-red-500 mb-6 transition-all duration-1000 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            {slides[currentSlide].title}
          </h1>
          <p className={`text-lg md:text-2xl text-gray-700 mb-8 transition-all duration-1000 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="/booking"
              className={`bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {slides[currentSlide].cta}
            </a>
            <a
              href="tel:+1234567890"
              className={`bg-white text-red-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              Call Now: 0333-4855247
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}