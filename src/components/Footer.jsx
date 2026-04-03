
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../images/logo.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img src={Logo} alt="proTaskWorkflow Logo" className="w-32 mb-4" />
            <p className="text-sm">
              proTaskWorkflow helps you effortlessly manage and track your projects—
              from planning and scheduling to real-time updates and reporting.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about"    className="hover:text-white">About Us</a></li>
              <li><a href="/careers"  className="hover:text-white">Careers</a></li>
              <li><a href="/blog"     className="hover:text-white">Blog</a></li>
              <li><a href="/contact"  className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/docs"     className="hover:text-white">Documentation</a></li>
              <li><a href="/faq"      className="hover:text-white">FAQ</a></li>
              <li><a href="/support"  className="hover:text-white">Support</a></li>
              <li><a href="/terms"    className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com"  aria-label="Twitter"  className="hover:text-white">
                <FaTwitter   size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          © {year} proTaskWorkflow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
