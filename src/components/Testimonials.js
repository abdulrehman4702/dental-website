"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const testimonials = [
    {
      name: 'Aisha Khan',
      quote: "Dr. Ahmed's teeth whitening transformed my smile! The staff is so friendly and professional.",
      rating: 5,
      image: '/assets/girl.jpg',
      location: 'Rawalpindi',
    },
    {
      name: 'Bilal Hassan',
      quote: 'The braces treatment was seamless, and my teeth are perfectly aligned now!',
      rating: 5,
      image: '/assets/boy.jpg',
      location: 'Islamabad',
    },
    {
      name: 'Sana Malik',
      quote: 'Dental implants at Rawalpindi feel so natural. Amazing care and attention to detail.',
      rating: 5,
      image: '/assets/girl.jpg',
      location: 'Rawalpindi',
    },
    {
      name: 'Omar Farooq',
      quote: 'Teeth cleaning was quick and painless with state-of-the-art equipment.',
      rating: 5,
      image: '/assets/boy.jpg',
      location: 'Islamabad',
    },
    {
      name: 'Zara Ali',
      quote: 'Clear aligners were a game-changer. The process was comfortable and affordable.',
      rating: 5,
      image: '/assets/girl.jpg',
      location: 'Rawalpindi',
    },
  ];

  return (
    <section id="testimonials" className="py-16 cursor-pointer bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-red-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hear from our satisfied patients about their experiences at Dental Land Clinic.
        </motion.p>
        <div className="mt-12 relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex-none w-80 border border-red-200 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-4 border-red-500">
                    {/* Ensure images (e.g., aisha.jpg) exist in public/images/testimonials; replace with placeholder if needed */}
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      onError={(e) => (e.target.src = '/images/testimonials/placeholder.jpg')}
                    />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                      {testimonial.location}
                    </span>
                    <div className="flex items-center">
                      {Array(testimonial.rating)
                        .fill()
                        .map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.427a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.539 1.118l-3.357-2.427a1 1 0 00-1.175 0l-3.357 2.427c-.784.57-1.838-.197-1.539-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.274 9.397c-.784-.57-.382-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                          </svg>
                        ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-red-500 line-clamp-2 text-center">
                    {testimonial.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 line-clamp-3 text-center">
                    “{testimonial.quote}”
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}