// src/components/Footer.jsx
import React from 'react';
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-white text-[#fcad32] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Section 1: Logo and Contact Info */}
        <div className="flex flex-col items-center  sm:items-start text-center sm:text-left">
          <img src={logo} alt="logo" className='' />
          <div className="text-3xl font-bold mb-2">444 7 923</div>
          <a href="mailto:nouse@gmail.com" className="text-gray-300 hover:underline">nouse@gmail.com</a>
        </div>

        {/* Section 2: Kültürde Eğitim */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg mb-3">Nouse'da Eğitim</h3>
          <ul className="space-y-2 text-black">
            <li><a href="#" className="hover:underline">Yayınlar</a></li>
            <li><a href="#" className="hover:underline">Danışmanlık Sistemi</a></li>
            <li><a href="#" className="hover:underline">Rehberlik ve Kariyer Planlama</a></li>
            <li><a href="#" className="hover:underline">Ölçme ve Değerlendirme</a></li>
          </ul>
        </div>

        {/* Section 3: Bağlantılar */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg mb-3">Bağlantılar</h3>
          <ul className="space-y-2 text-black">
            <li><a href="#" className="hover:underline">Hakkımızda</a></li>
            <li><a href="#" className="hover:underline">Nouse'da Eğitim</a></li>
            <li><a href="#" className="hover:underline">İletişim</a></li>
          </ul>
        </div>

        {/* Section 4: İletişim */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg mb-3">İletişim</h3>
          <ul className="space-y-2 text-black">
            <li><a href="#" className="hover:underline">Sizi Arayalım</a></li>
            <li><a href="#" className="hover:underline">İnsan Kaynakları</a></li>
            <li><a href="#" className="hover:underline">İletişim Kutusu</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;