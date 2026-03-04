"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/jp_aluminium_windows?igsh=cmsyeXk1ZHNiY3l5&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <FaInstagram size={26} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919585740777?text=Hi%2C%20I%27m%20interested%20in%20your%20aluminium%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <FaWhatsapp size={26} />
      </a>

    </div>
  );
}