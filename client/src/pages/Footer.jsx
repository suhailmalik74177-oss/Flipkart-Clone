import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">

        <div>
          <h3 className="text-white font-semibold mb-3">ABOUT</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">GROUP COMPANIES</h3>
          <ul className="space-y-2 text-sm">
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">CONSUMER POLICY</h3>
          <ul className="space-y-2 text-sm">
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>

        <div className="md:col-span-1 col-span-2">
          <h3 className="text-white font-semibold mb-2">Social:</h3>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

      </div>
    </footer>
  );
}
