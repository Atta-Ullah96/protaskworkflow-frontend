
import { Calendar, Move, Clock, Lock, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Calendar size={32} />,
    title: 'Three Sections',
    desc: 'To Do, In Progress, Completed',
  },
  {
    icon: <Move size={32} />,
    title: 'Drag & Drop',
    desc: 'Easily move tasks between sections',
  },
  {
    icon: <Clock size={32} />,
    title: 'History Tracking',
    desc: 'Monitor your past task progress',
  },
  {
    icon: <Lock size={32} />,
    title: 'Secure Access',
    desc: 'User authentication built-in',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Responsive Design',
    desc: 'Full web & mobile support',
  },
];

const FeaturesSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">
        Countdown Board Features
      </h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
          >
            <div className="text-blue-600 mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
