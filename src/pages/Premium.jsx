import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function Premium() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Premium Access</h1>
          <p className="text-xl text-gray-600">
            Get exclusive access to premium content and resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">
                  KSh {plan.price}
                  <span className="text-base font-normal text-gray-500">
                    /month
                  </span>
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-orange-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-orange-500 transition duration-300">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const plans = [
  {
    name: 'Basic',
    price: 999,
    features: [
      'Access to recorded sermons',
      'Weekly devotionals',
      'Prayer request submissions',
      'Monthly newsletter',
    ],
  },
  {
    name: 'Premium',
    price: 1999,
    features: [
      'All Basic features',
      'Live stream access',
      'Exclusive teaching materials',
      'Monthly virtual meetings',
      'Priority prayer support',
    ],
  },
  {
    name: 'Ministry',
    price: 4999,
    features: [
      'All Premium features',
      'Leadership resources',
      'Ministry consultation',
      'Sermon preparation tools',
      'Private coaching sessions',
    ],
  },
];
