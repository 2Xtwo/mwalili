import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60 z-10" />
        <div className="relative h-[80vh] bg-[url('/assets/images/faith.jpg')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-4xl"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Empowering Lives Through Faith
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl mb-12 text-gray-200"
              >
                Join us on a journey of spiritual growth and enlightenment
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition duration-300 flex items-center mx-auto space-x-2"
              >
                <span>Explore Sermons</span>
                <ArrowRightIcon className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition duration-300">
                    <program.icon className="h-8 w-8 text-orange-500 group-hover:text-white transition duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-orange-500 transition duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <button className="text-blue-900 font-semibold group-hover:text-orange-500 transition duration-300 flex items-center">
                    Learn More
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-2 transition duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445112098124-3e76dd67983c')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join our community and experience the transformative power of faith
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
            >
              Join Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const programs = [
  {
    title: "Breakfast for Kings",
    description: "Monthly leadership breakfast meetings focusing on spiritual and professional growth.",
    icon: () => (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
  {
    title: "Sharpening the Axe",
    description: "Weekly mentorship program designed to equip leaders with practical skills.",
    icon: () => (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Prayer Warriors",
    description: "Daily morning prayer sessions focusing on spiritual warfare and intercession.",
    icon: () => (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];
