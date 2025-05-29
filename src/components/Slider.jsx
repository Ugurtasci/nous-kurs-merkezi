import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsClock, BsGeoAlt, BsTelephone } from "react-icons/bs";
import { FaBookOpenReader } from "react-icons/fa6";
import { sliders } from "../utilis/helper";
import { Link } from "react-router-dom";



const slides = sliders.slice(0, 3);

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // useEffect ile otomatik geçiş
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // 3 saniye (2000ms) arayla slayt değişir.

    // Temizleme fonksiyonu
    return () => clearInterval(intervalId);
  }, []); // Boş bağımlılık dizisi ile sadece bir kez çalışır.

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full  overflow-hidden">
      {/* Slayt görseli */}
      <div className="relative h-[45vh] md:h-[80vh] w-full">
        {/* Slaytlar */}
        <div
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out`}
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          {/* Slayt içerikleri */}
          <div className="absolute bottom-10 left-0 w-full bg-[#fab303] opacity-80 px-4 py-4 md:px-8">
            <div className="w-full h-full text-white flex flex-col items-center">
              <h2 className="text-lg md:text-2xl font-semibold text-shadow-lg">
                {slides[current].title}
              </h2>
              <Link to={`/haberler/${slides[current].id}`}
               className="text-sm md:text-base text-shadow-lg">
                {slides[current].subtitle}
              </Link>
            </div>
          </div>
        </div>

        {/* Sol-sağ oklar */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Slaytlar arası noktalar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)} // Noktaya tıklama işlemi
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-[#fab303]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Sağ sabit menü */}
      <div className="hidden md:flex flex-col gap-2 absolute bottom-10 right-0 transform -translate-y-1/2 z-10">
        <MenuButton icon={<FaBookOpenReader className="text-xl" />} text="KURSLARIMIZ" href="/kurslar" />
        <MenuButton icon={<BsGeoAlt className="text-xl" />} text="LOKASYON" href={"/iletisim"} />
        <MenuButton icon={<BsTelephone className="text-xl" />} text="İLETİŞİM" />
      </div>
    </div>
  );
}

function MenuButton({ icon, text, href }) {
  if (text === "İLETİŞİM") {
    return (
      <a href="tel:+905555555" className="bg-[#3c3523] hover:bg-[#fab303]
       text-white px-4 py-3 flex items-center gap-2 w-48 text-sm font-medium rounded-l-full shadow-md transition-all duration-300">
        {icon} {text}
      </a>
    );
  }
  return (
    <Link to={href} className="bg-[#3c3523] hover:bg-[#fab303] cursor-pointer text-white px-4 py-3 flex items-center gap-2 w-48 text-sm font-medium rounded-l-full shadow-md transition-all duration-300">
      {icon} {text}
    </Link>
  );
}