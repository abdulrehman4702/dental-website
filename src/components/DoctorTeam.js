"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DoctorTeam() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const doctors = [
    {
      name: 'Dr. Ahmed Raza',
      specialty: 'Cosmetic Dentistry',
      image: '/assets/boy.jpg',
    },
    {
      name: 'Dr. Fatima Noor',
      specialty: 'Orthodontics',
      image: '/assets/girl.jpg',
    },
    {
      name: 'Dr. Hassan Iqbal',
      specialty: 'Implantology',
      image: '/assets/boy.jpg',
    },
    {
      name: 'Dr. Ayesha Siddiqui',
      specialty: 'General Dentistry',
      image: '/assets/girl.jpg',
    },
    {
      name: 'Dr. Omar Farooq',
      specialty: 'Endodontics',
      image: '/assets/boy.jpg',
    },
    {
      name: 'Dr. Zara Khan',
      specialty: 'Pediatric Dentistry',
      image: '/assets/girl.jpg',
    },
  ];

  return (
    <section id="doctor-team" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-red-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet Our Expert Doctors
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our team of dedicated professionals is committed to providing exceptional dental care tailored to your needs.
        </motion.p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-80 mx-auto border border-red-200 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-red-500">
                  {/* Ensure images (e.g., doctor1.jpg) exist in public/images/doctors; replace with placeholder if needed */}
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    onError={(e) => (e.target.src = '/images/doctors/placeholder.jpg')}
                  />
                </div>
                <h3 className="text-lg font-semibold text-red-500 text-center line-clamp-1">
                  {doctor.name}
                </h3>
                <p className="mt-2 text-sm text-gray-700 text-center line-clamp-2">
                  {doctor.specialty}
                </p>
                <div className="mt-4 flex justify-center">
                  <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded">
                    Specialist
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}