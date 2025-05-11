import Locations from '../../components/Location';

// export const metadata = {
//   title: 'Dental Land Clinic Locations - Rawalpindi & Islamabad',
//   description: 'Visit Dental Land Clinic at our convenient locations in Rawalpindi and Islamabad. Book your appointment today for personalized dental care.',
//   keywords: ['dental clinic Rawalpindi', 'dental clinic Islamabad', 'Dental Land Clinic locations', 'dentist near me'],
//   openGraph: {
//     title: 'Dental Land Clinic Locations',
//     description: 'Find our dental clinics in Rawalpindi and Islamabad for top-quality care.',
//     url: 'https://dentallands.com/locations',
//     images: ['/images/hero.jpg'],
//   },
// };

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Locations />
    </div>
  );
}