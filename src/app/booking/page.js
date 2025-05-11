"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BookNow() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  const locations = [
    'Rawalpindi - Stadium Road',
    'Islamabad - Ghouri Town',
  ];

  const services = [
    'Teeth Cleaning',
    'Teeth Whitening',
    'Braces Treatment',
    'Dental Implants',
    'Clear Aligners',
    'Tooth Extraction',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!formData.location) newErrors.location = 'Please select a location';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Preferred Date is required';
    if (!formData.time) newErrors.time = 'Preferred Time is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log('Form submitted:', formData);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        service: '',
        date: '',
        time: '',
        notes: '',
      });
      alert('Appointment request submitted! We will contact you soon.');
    }
  };

  return (
    <section id="book-now" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-red-500 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Schedule your visit with Dental Land Clinic for personalized dental care.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/teeth.png"
                alt="Dental Clinic Interior"
                fill
                className="object-cover brightness-100"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Why Choose Us?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Expert Dental Professionals
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> State-of-the-Art Facilities
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Personalized Care
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Flexible Scheduling
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      required
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      required
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                      Preferred Location *
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select Location</option>
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select Service</option>
                      {services.map((srv) => (
                        <option key={srv} value={srv}>{srv}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      required
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    min="09:00"
                    max="18:00"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                </div>

                <div>
                  <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300"
                >
                  Submit Appointment Request
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}