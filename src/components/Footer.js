'use client'
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-600 to-red-700 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Centralized Logo Section */}
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/logo.png"
            alt="Dental Land Logo"
            width={70}
            height={70}
            className="rounded-full border-2 border-white shadow-lg mb-4"
            aria-label="Dental Land Clinic Logo"
          />
          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-red-200">
            Dental Land Clinic
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Clinic Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-red-100 leading-relaxed">
              Providing exceptional dental care with a personal touch. Your smile is our priority.
            </p>
            <div className="flex space-x-6 justify-center md:justify-start">
              <motion.a 
                href="https://facebook.com" 
                className="hover:text-red-200 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                className="hover:text-red-200 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                className="hover:text-red-200 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white border-b border-red-400 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Our Team', 'Book Appointment'].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={item === 'Book Appointment' ? '/booking' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-red-200 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-200 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white border-b border-red-400 pb-2">Our Services</h4>
            <ul className="space-y-3">
              {['Cosmetic Dentistry', 'Orthodontics', 'Dental Implants', 'Teeth Whitening', 'Preventive Care'].map((service, index) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={`/services#${service.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-red-200 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-200 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white border-b border-red-400 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="text-red-200 group-hover:scale-110 transition-transform" />
                <span>123 Dental Street, Rawalpindi</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaPhone className="text-red-200 group-hover:scale-110 transition-transform" />
                <span>+92 300 1234567</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-red-200 group-hover:scale-110 transition-transform" />
                <span>info@dentalland.com</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaWhatsapp className="text-red-200 group-hover:scale-110 transition-transform" />
                <span>+92 300 1234567</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-red-500 mt-12 pt-8 text-center text-sm text-red-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg mb-4">© {new Date().getFullYear()} Dental Land Clinic. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <Link 
              href="/privacy" 
              className="hover:text-red-200 transition-colors hover:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="hover:text-red-200 transition-colors hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}