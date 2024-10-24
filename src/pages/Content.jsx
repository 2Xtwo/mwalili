import { motion } from 'framer-motion';
import SermonCard from '../components/SermonCard';
import ProgramCard from '../components/ProgramCard';
import { useState } from 'react';

export default function Content() {
  const [activeTab, setActiveTab] = useState('sermons');

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Content</h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('sermons')}
              className={`px-6 py-2 rounded-md ${
                activeTab === 'sermons'
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              Sermons
            </button>
            <button
              onClick={() => setActiveTab('programs')}
              className={`px-6 py-2 rounded-md ${
                activeTab === 'programs'
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              Programs
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'sermons'
              ? sermons.map((sermon) => (
                  <SermonCard key={sermon.id} sermon={sermon} />
                ))
              : programs.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const sermons = [
  {
    id: 1,
    title: 'Walking in Divine Purpose',
    date: '2023-08-15',
    duration: '45 mins',
    thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3',
    description:
      "Discover God's purpose for your life and learn how to walk in it.",
  },
  {
    id: 2,
    title: 'The Power of Faith',
    date: '2023-08-08',
    duration: '50 mins',
    thumbnail: 'https://images.unsplash.com/photo-1445112098124-3e76dd67983c',
    description: 'Understanding the principles of faith and how to apply them.',
  },
  {
    id: 3,
    title: 'Kingdom Leadership',
    date: '2023-08-01',
    duration: '55 mins',
    thumbnail: 'https://images.unsplash.com/photo-1493612276216-ee3925520721',
    description:
      "Biblical principles for effective leadership in today's world.",
  },
];

const programs = [
  {
    id: 1,
    title: 'Breakfast for Kings',
    schedule: 'Monthly',
    location: 'GPTC Rongai',
    thumbnail: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
    description:
      'Monthly leadership breakfast meetings focusing on spiritual and professional growth.',
  },
  {
    id: 2,
    title: 'Sharpening the Axe',
    schedule: 'Weekly',
    location: 'GPTC Lenana - Teens Hall',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    description:
      'Weekly mentorship program designed to equip leaders with practical skills.',
  },
  {
    id: 3,
    title: 'Prayer Warriors',
    schedule: 'Daily',
    location: 'GPTC Lenana - Main Church',
    thumbnail: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389',
    description:
      'Daily morning prayer sessions focusing on spiritual warfare and intercession.',
  },
];
