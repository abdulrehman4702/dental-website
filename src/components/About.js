import Image from "next/image";

export default function About() {
    return (
      <section id="about" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/assets/dental-team.jpg"
                alt="Dental Team"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                width={600}
                height={256}
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-gray-700 mb-4 text-justify">
                At Dental Lands, our team of experienced dentists is dedicated to providing
                personalized care in a comfortable environment. With state-of-the-art technology
                and a patient-first approach, we ensure your smile shines bright.
              </p>
              <p className="text-gray-700 text-justify">
                Our mission is to make dental care accessible and stress-free for everyone.
                Meet our team and discover why patients trust us for their oral health needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }