"use client";
import { motion } from 'framer-motion';

export default function Locations() {
  const locations = [
    {
      city: 'Rawalpindi',
      address: 'Dental Land Clinic, Stadium Road, Rawalpindi, Pakistan',
      phone: '0333-4855247',
      email: 'info@dentallands.com',
      hours: 'Monday–Saturday, 9:00 AM–6:00 PM',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.019082315614!2d73.082415684681!3d33.520929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMxJzI1LjciTiA3M8KwMDQnNTMuMiJF!5e0!3m2!1sen!2spk!4v1635781234567',
    },
    {
      city: 'Islamabad',
      address: 'Dental Land Clinic, F-7 Markaz, Islamabad, Pakistan',
      phone: '(051) 123-4567',
      email: 'info@dentallands.com',
      hours: 'Monday–Saturday, 9:00 AM–6:00 PM',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.019082315614!2d73.056415684681!3d33.720929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQzJzE1LjciTiA3M8KwMDMnMjIuNSJF!5e0!3m2!1sen!2spk!4v1635781234568',
    },
  ];

  return (
    <section id="locations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-red-500 mb-8"
        >
          Our Locations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto"
        >
          Dental Land Clinic is proud to serve you at two convenient locations in Rawalpindi and Islamabad. Visit us for personalized, high-quality dental care.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <h2 className="text-2xl font-semibold text-red-500 mb-4 text-center">
                {location.city}
              </h2>
              <div className="space-y-3 flex-grow">
                <p className="text-gray-700 flex items-center">
                  <strong className="text-red-500 w-24">Address:</strong>
                  <span className="ml-2">{location.address}</span>
                </p>
                <p className="text-gray-700 flex items-center">
                  <strong className="text-red-500 w-24">Phone:</strong>
                  <span className="ml-2">{location.phone}</span>
                </p>
                <p className="text-gray-700 flex items-center">
                  <strong className="text-red-500 w-24">Email:</strong>
                  <span className="ml-2">{location.email}</span>
                </p>
                <p className="text-gray-700 flex items-center">
                  <strong className="text-red-500 w-24">Hours:</strong>
                  <span className="ml-2">{location.hours}</span>
                </p>
              </div>
              <div className="w-full h-64 mb-4 mt-6 rounded-lg overflow-hidden">
                <iframe
                  src={location.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`Map of Dental Land Clinic in ${location.city}`}
                ></iframe>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/booking"
                className="mt-auto block w-full text-center bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Book Appointment
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}