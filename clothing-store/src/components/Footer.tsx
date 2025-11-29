import { FaLinkedin, FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white pt-10 pb-6 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="flex items-start">
          <img src="/logo.svg" alt="Logo" className="w-24 opacity-90" />
        </div>

        {/* Company */}
        <div>
          <h3 className="text-base font-semibold mb-3">Company</h3>
          <ul className="space-y-1.5 text-gray-300 text-sm">
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-base font-semibold mb-3">Services</h3>
          <ul className="space-y-1.5 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Custom Clothing Design</a></li>
            <li><a href="#" className="hover:text-white">Ready-to-Wear Collections</a></li>
            <li><a href="#" className="hover:text-white">Bulk Order & Corporate Branding</a></li>
            <li><a href="#" className="hover:text-white">Wardrobe Styling & Fashion Consultation</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-semibold mb-3">Contact</h3>
          <p className="text-gray-300 text-sm mb-2">
            <a href="tel:+254701007777" className="hover:text-white">+254(0)701007777</a>
          </p>
          <p className="text-gray-400 text-xs">For sale:</p>
          <p className="text-gray-300 text-sm mb-2">
            <a href="mailto:sales@jetman.co.ke" className="hover:text-white">sales@fashly.co.ke</a>
          </p>  
          <p className="text-gray-400 text-xs">For reservations:</p>
          <p className="text-gray-300 text-sm mb-4">
            <a href="mailto:reservations@jetman.co.ke" className="hover:text-white">reservations@fashly.co.ke</a>
          </p>
        </div>

        {/* Enquiry & Social Icons */}
        <div className="flex flex-col items-start">
          <h3 className="text-base font-semibold mb-3">Have an enquiry?</h3>
          <button className="bg-gray-700 hover:bg-gray-600 px-5 py-2 text-sm rounded-md w-full text-left">
            Request Quote
          </button>
          <button className="border border-gray-600 hover:border-white hover:text-white px-5 py-2 text-sm rounded-md w-full text-left text-gray-300 mt-3">
            Email Us
          </button>

          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl mt-4">
            <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-400">
        <p>© 2025 Fashly Global. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
