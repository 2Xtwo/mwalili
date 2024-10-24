import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Blog() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Updates and Catch Up
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-900 font-semibold hover:text-orange-500 transition duration-300">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

const blogPosts = [
  {
    id: 1,
    title: 'Finding Peace in Turbulent Times',
    excerpt:
      "Discover practical ways to maintain inner peace and spiritual balance in today's challenging world.",
    date: '2023-08-15',
    author: 'Bishop Mwalili',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
  },
  {
    id: 2,
    title: 'The Power of Community',
    excerpt:
      'Understanding the importance of spiritual community and how to build meaningful connections.',
    date: '2023-08-10',
    author: 'Pastor Abel Green',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
  },
  {
    id: 3,
    title: 'Leadership in Ministry',
    excerpt:
      'Essential principles for effective leadership in both spiritual and secular contexts.',
    date: '2023-08-05',
    author: 'Bishop Mwalili',
    image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff',
  },
];
