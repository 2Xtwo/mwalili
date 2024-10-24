import { motion } from 'framer-motion';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function ProgramCard({ program }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={program.thumbnail}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
        <p className="text-gray-600 mb-4">{program.description}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            {program.schedule}
          </div>
          <div className="flex items-center">
            <MapPinIcon className="h-4 w-4 mr-1" />
            {program.location}
          </div>
        </div>
      </div>
    </motion.div>
  );
}