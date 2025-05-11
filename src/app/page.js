import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Welcome from '@/components/Welcome';
import DoctorTeam from '@/components/DoctorTeam';

// export const metadata = {
//   title: 'Dental Lands - Your Trusted Dental Care',
//   description: 'Providing top-quality dental services with a caring touch. Book your appointment today!',
//   keywords: ['dental care', 'dentist', 'dental services', 'teeth whitening', 'implants'],
//   openGraph: {
//     title: 'Dental Lands',
//     description: 'Your trusted dental practice for all your oral health needs.',
//     url: 'https://dentallands.com',
//     images: ['/images/hero.jpg'],
//   },
// };

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main>
        <Hero />
        <Welcome />
        <Services />
        <About />
        <Testimonials />
        <DoctorTeam />
      </main>
      <Footer />
    </div>
  );
}