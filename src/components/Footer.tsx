import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>123 Business Street</li>
              <li>Tech City, TC 12345</li>
              <li>contact@company.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-secondary transition-colors"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-secondary transition-colors"><FaLinkedin /></a>
              <a href="#" className="text-2xl hover:text-secondary transition-colors"><FaGithub /></a>
              <a href="#" className="text-2xl hover:text-secondary transition-colors"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}