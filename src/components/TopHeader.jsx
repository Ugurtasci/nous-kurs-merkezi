import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";

function TopHeader() {
  return (
    <div className="bg-gray-900 text-white text-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        {/* Sosyal Medya */}
        <div className="flex items-center space-x-3">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/bingolnouskurs_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/905555555555"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* İletişim */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#fab301]">
            <MdPhone className="text-lg " />
            <a href="+90 555 555 55 55">+90 555 555 55 55</a>
          </div>
          <div className="flex items-center gap-1 hover:text-[#fab301]">
            <MdEmail className="text-lg" />

            <a
              href="mailto:nouskursmerkezi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@nouskursmerkezi.com
            </a>
          </div>
        </div>
        {/* giriş */}
        <div className="bg-[#fab301] p-1 border rounded-md text-center  font-semibold hover:text-black transition duration-300">
          <a
            href="http://nousobs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            GİRİŞ YAP
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
