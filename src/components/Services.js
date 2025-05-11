"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Teeth Cleaning',
      description: 'Revitalize your smile and maintain optimal oral hygiene with our professional teeth cleaning services.',
      image: '/assets/teeth-cleaning.avif'
    },
    {
      title: 'Teeth Whitening',
      description: 'Experience a brighter, more confident smile with our professional teeth whitening services.',
      image: '/assets/teeth-whitening.gif'
    },
    {
      title: 'Braces Treatment',
      description: 'Straighten your teeth with our advanced braces treatment. Braces help fix misaligned teeth, improve your bite, and enhance overall dental health for a confident smile.',
      image: '/assets/Braces-Treatment.jpg'
    },
    {
      title: 'Dental Implants',
      description: 'Replace missing teeth with strong and natural-looking dental implants.',
      image: '/assets/Dental-Implants.jpg'
    },
    {
      title: 'Clear Aligners',
      description: 'Achieve a straighter smile with our nearly invisible and comfortable clear aligners.',
      image: '/assets/Clear-Aligners.avif'
    },
    {
      title: 'Tooth Extraction',
      description: 'Relieve discomfort and maintain your oral health with our gentle and expert tooth extraction services.',
      image: '/assets/Tooth-Extraction.jpg'
    },
  ];

  return (
    <section id="services" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-red-500 mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
        >
          A personalized and affordable dental clinic
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-700 text-center flex-grow">
                {service.description}
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/booking"
                className="mt-4 block w-full text-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Book Now
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}