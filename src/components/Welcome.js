import Image from "next/image";

export default function Welcome() {
    return (
      <section id="welcome" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-red-500 mb-8">Welcome to Dental Land Clinic</h2>
              <div className="text-gray-700 text-lg text-justify leading-relaxed">
                <p className="mb-4">
                  At Dental Land Clinic, we offer dental health care the way it should be personalized to your needs, without judgment, and focused on your health and comfort. We believe you&apos;ll feel better when you have our undivided attention. Every appointment at our office is relaxed and unhurried, allowing a full hour to give you the 1-on-1 care your health and smile deserve. In a rush or on your lunch break? Don&apos;t worry, we&apos;ll work with your schedule. We simply believe it&apos;s best to have extra time if you need it!
                </p>
                <p className="mb-4">
                  Our Dentist team is focused on meeting your unique needs and improving your total health and wellness. Whether you are in need of restorative dentistry or cosmetic treatment, you&apos;ll leave our dental office feeling confident and empowered. Visit us today for best dental care solution in Rawalpindi and Islamabad
                </p>
              </div>
              
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/assets/dentist.jpg" 
                alt="Dental Clinic" 
                className="w-full h-auto rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }