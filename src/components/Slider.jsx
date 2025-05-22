import React, { useEffect, useState } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.jpg";

// Görsel + metin eşleşmesi
const slides = [
  {
    image: slider1,
    title: "Başarı Tesadüf Değil, Sistemli Çalışmanın Sonucudur",
    /*  description: "Modern ve kullanıcı dostu arayüzlerle fark yaratın.", */
  },
  {
    image: slider2,
    title: "Bugünün Öğrencisi, Yarının Lideri",
    /* description: "Tüm cihazlarda mükemmel görüntüleme deneyimi.", */
  },
  {
    image: slider3,
    title: "Her Başarı Bir Adımla Başlar – O Adım Nous’ta Atılır",
    /* description: "Hızlı ve optimize edilmiş web siteleri.", */
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  // Otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (i) => {
    setIndex(i);
  };
  return (
    <main className="w-full h-screen bg-cyan-50">
      <div
        className="relativ w-full h-full   "
        style={{ position: "relative", maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* Görsel */}
        <img
          src={slides[index].image}
          alt={`Slide ${index}`}
          className="w-full h-[600px] object-cover transition duration-500 shadow-xl rounded-lg overflow-hidden"
        />
        {/* Metin katmanı */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-opacity-50 rounded-lg">
          <h2 className="text-4xl text-center font-bold text-white font-serif">
            {slides[index].title}
          </h2>
          <p className="text-3xl font-serif text-[#fab301] mt-8">
            {slides[index].description}
          </p>
        </div>

        {/* Oklar */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "40%",
            left: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgb(250, 179, 1)",
            color: "black",
            border: "none",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
            fontSize: "30px",
          }}
        >
          <IoMdArrowDropleftCircle />
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "40%",
            right: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgb(250, 179, 1)",
            color: "black",
            border: "none",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
            fontSize: "30px",
          }}
        >
          <IoMdArrowDroprightCircle className="" />
        </button>

        {/* Noktalar */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => goToSlide(i)}
              style={{
                display: "inline-block",
                height: "12px",
                width: "12px",
                margin: "0 5px",
                backgroundColor: i === index ? "#000" : "#fab301",
                borderRadius: "50%",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Slider;
