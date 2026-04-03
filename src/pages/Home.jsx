import { Link } from "react-router-dom";

import heroImage from "../images/hero.png";
import FeaturesSection from "../components/Features";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Can I switch tasks back to ‘To Do’?",
    a: "Yes—drag any completed task back to ‘To Do’ just as easily.",
  },
  {
    q: "Is there a mobile app?",
    a: "We’re launching iOS & Android apps Q3 2025—stay tuned!",
  },
  {
    q: "How do I invite team members?",
    a: "Under ‘Settings’ → ‘Team’, enter emails to send invites instantly.",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <main className="flex-1 flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Streamline Your Project Management with Ease
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Effortlessly manage and track your projects with our innovative
            platform designed to simplify your administrative tasks. Whether
            you're a student or a teacher, our solution offers a seamless
            experience to enhance productivity and keep your records organized.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Link
              to="/login"
              className="inline-block px-6 py-3 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow"
            >
              Login Here
            </Link>
            <Link
              to="/about"
              className="inline-block px-6 py-3 text-center bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow"
            >
              How It Works?
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Calendar overview"
            className="max-w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </main>

      <FeaturesSection />



     {/* 4. FAQ Accordion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="p-4 bg-white rounded-lg shadow">
                <summary className="flex justify-between items-center cursor-pointer">
                  <span className="font-medium">{item.q}</span>
                  <ChevronDown size={20} />
                </summary>
                <p className="mt-2 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>



      {/* Newsletter Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Subscribe to Our Newsletter
          </h3>

          <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gray-900 hover:bg-black text-white font-medium rounded-lg shadow"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

   
    </>
  );
};

export default Home;
