import { motion } from 'framer-motion';
import { PlayIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function SermonCard({ sermon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={sermon.thumbnail}
          alt={sermon.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button className="absolute bottom-4 right-4 bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600 transition duration-300">
          <PlayIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{sermon.title}</h3>
        <p className="text-gray-600 mb-4">{sermon.description}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            {new Date(sermon.date).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            {sermon.duration}
          </div>
        </div>
      </div>
    </motion.div>
  );
}