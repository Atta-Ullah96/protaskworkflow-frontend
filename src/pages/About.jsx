
import { Link } from 'react-router-dom';
// import teamImg from '../assets/team-collaboration.png';   // placeholder, replace with your asset
import workflowImg from '../images/about.jpg'; // placeholder, replace with your asset
import Logo from '../images/logo.png'
const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              About proTaskWorkflow
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              proTaskWorkflow is a lightweight, intuitive task-board system designed to help students,
              teachers, and teams manage workflows effortlessly. With drag-and-drop task sections,
              real-time updates, and history tracking, you’ll never lose sight of your deadlines again.
            </p>
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow"
            >
              Back to Home
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={workflowImg}
              alt="Team Collaboration"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower educators and learners with a simple but powerful tool that
              streamlines task management, fosters collaboration, and elevates productivity
              in every learning environment.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the go-to platform for academic and small-team project coordination,
              bridging gaps between planning and execution with clear, visual workflows.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="space-y-12">
            {[
              {
                step: '1. Create Your Board',
                desc: 'Set up your task board with three default sections: To Do, In Progress, and Completed.',
              },
              {
                step: '2. Add & Assign Tasks',
                desc: 'Quickly create tasks, assign them to users, and set deadlines with just a few clicks.',
              },
              {
                step: '3. Drag & Drop',
                desc: 'Move tasks between sections seamlessly to reflect real-time progress.',
              },
              {
                step: '4. Track History',
                desc: 'Review your task history to analyze trends and pinpoint bottlenecks.',
              },
            ].map((item, idx) => (
              <div key={idx} className="md:flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="text-3xl font-bold text-blue-600">{idx + 1}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.step}</h3>
                  <p className="mt-2 text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Illustration */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Visualize Your Workflow
          </h2>
          <img
            src={Logo}
            alt="Workflow Diagram"
            className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Attaullah', role: 'Lead Developer', img: '/images/atta.jpg' },
              { name: 'Bilal', role: 'UI/UX Designer', img: '/images/bilal.jpg' },
              { name: 'Waqas', role: 'Backend Engineer', img: '/images/waqas.jpg' },
              { name: 'Hafeez', role: 'Quality Analyst', img: '/images/hafeez.jpg' },
            ].map((m, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                <p className="text-gray-600">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience proTaskWorkflow?</h2>
          <Link
            to="/signup"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:shadow-lg transition"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
