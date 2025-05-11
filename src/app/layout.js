import Header from '@/components/Header';
import './globals.css';

// export const metadata = {
//   title: 'Dental Land Clinic',
//   description: 'Personalized dental care in Rawalpindi and Islamabad. Book your appointment today!',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}