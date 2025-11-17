import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

export default function Footer() {
  // Mobile accordion toggle states
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 px-5 sm:px-10 py-10">
      {/* ===== Main Footer Grid (Desktop) ===== */}
      <div className="hidden sm:grid max-w-7xl mx-auto grid-cols-3 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">
        {/* About */}
        <FooterColumn
          title="ABOUT"
          items={[
            "Contact Us",
            "About Us",
            "Careers",
            "Flipkart Stories",
            "Press",
            "Corporate Information",
          ]}
        />

        {/* Group Companies */}
        <FooterColumn
          title="GROUP COMPANIES"
          items={["Myntra", "Cleartrip", "Shopsy"]}
        />

        {/* Help */}
        <FooterColumn
          title="HELP"
          items={["Payments", "Shipping", "Cancellation & Returns", "FAQ"]}
        />

        {/* Consumer Policy */}
        <FooterColumn
          title="CONSUMER POLICY"
          items={[
            "Cancellation & Returns",
            "Terms Of Use",
            "Security",
            "Privacy",
            "Sitemap",
            "Grievance Redressal",
            "EPR Compliance",
          ]}
        />

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm sm:text-base">
            FOLLOW US
          </h3>
          <div className="flex space-x-5 text-xl">
            <a href="https://www.facebook.com/share/1McxULQsW2/" target="_blank"><FaFacebookF className="hover:text-blue-500 transition cursor-pointer" /></a>
            <FaTwitter className="hover:text-sky-400 transition cursor-pointer" />
            <FaYoutube className="hover:text-red-500 transition cursor-pointer" />
            <a href="https://www.instagram.com/its_suhail_malik_22?igsh=MW1qdWZ5NXpzamZqNw==" target="_blank"><FaInstagram className="hover:text-pink-500 transition cursor-pointer" /></a>
          </div>
          <p className="text-xs text-gray-500 mt-5">
            © 2025 Flipkart Clone UI by Suhail Malik
          </p>
        </div>
      </div>

      {/* ===== Mobile Footer (Accordion Style) ===== */}
      <div className="sm:hidden max-w-2xl mx-auto border-b border-gray-700 pb-6">
        {[
          {
            title: "ABOUT",
            items: [
              "Contact Us",
              "About Us",
              "Careers",
              "Flipkart Stories",
              "Press",
              "Corporate Information",
            ],
          },
          {
            title: "GROUP COMPANIES",
            items: ["Myntra", "Cleartrip", "Shopsy"],
          },
          {
            title: "HELP",
            items: ["Payments", "Shipping", "Cancellation & Returns", "FAQ"],
          },
          {
            title: "CONSUMER POLICY",
            items: [
              "Cancellation & Returns",
              "Terms Of Use",
              "Security",
              "Privacy",
              "Sitemap",
              "Grievance Redressal",
              "EPR Compliance",
            ],
          },
        ].map((section, idx) => (
          <div key={idx} className="border-t border-gray-800">
            <button
              onClick={() => toggleSection(idx)}
              className="w-full flex justify-between items-center py-3 text-left"
            >
              <span className="text-white font-semibold text-sm">
                {section.title}
              </span>
              <IoChevronDown
                className={`text-gray-400 transform transition-transform ${
                  openSection === idx ? "rotate-180" : ""
                }`}
              />
            </button>

            <ul
              className={`overflow-hidden transition-all duration-300 ${
                openSection === idx ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="py-1 text-xs text-gray-400 pl-2 border-l border-green-700 hover:text-green-400 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social (Always visible on mobile) */}
        <div className="border-t border-gray-800 mt-3 pt-3 text-center">
          <h3 className="text-white font-semibold text-sm mb-2">FOLLOW US</h3>
          <div className="flex justify-center space-x-5 text-xl mb-2">
            <a href="https://www.facebook.com/share/1McxULQsW2/" target="_blank"><FaFacebookF className="hover:text-blue-500 transition cursor-pointer" /></a>
            <FaTwitter className="hover:text-sky-400 transition cursor-pointer" />
            <FaYoutube className="hover:text-red-500 transition cursor-pointer" />
            <a href="https://www.instagram.com/its_suhail_malik_22?igsh=MW1qdWZ5NXpzamZqNw==" target="_blank"><FaInstagram className="hover:text-pink-500 transition cursor-pointer" /></a>
          </div>
          <p className="text-xs text-gray-500">
            © 2025 Flipkart Clone UI by Suhail Malik
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===== Reusable Column Component for Desktop =====
function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-3 text-sm sm:text-base">
        {title}
      </h3>
      <ul className="space-y-2 text-xs sm:text-sm">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="hover:text-green-400 cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
