import { useState, useEffect, useRef } from "react";
import galeri from "../assets/galeri.png";
import video1 from "../assets/Gallery/video1.mp4";
import img1 from "../assets/Gallery/img1.jpg";
import img2 from "../assets/Gallery/img2.jpg";
import img3 from "../assets/Gallery/img3.jpg";
import img4 from "../assets/Gallery/img4.jpg";
import img5 from "../assets/Gallery/img5.jpg";
import img6 from "../assets/Gallery/img6.jpg";
import img7 from "../assets/Gallery/img7.jpg";
import img8 from "../assets/Gallery/img8.jpg";
import img9 from "../assets/Gallery/img9.jpg";
import img10 from "../assets/Gallery/img10.jpg";
import img11 from "../assets/Gallery/img11.jpg";
import img12 from "../assets/Gallery/img12.jpg";
import { Link } from "react-router-dom";
import bgGecis from "../assets/bgGecis.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const media = [
   {
    type: "video",
    src: video1,
  },
  {
    type: "image",
    src: img1,
    orientation: "vertical", // "horizontal" da olabilir
  },
  {
    type: "image",
    src: img2,
    orientation: "vertical",
  },
  {
    type: "image",
    src: img3,
    orientation: "vertical",
  },
  {
    type: "image",
    src: img4,
    orientation: "vertical",
  },
 
  {
    type: "image",
    src: img5,
    orientation: "vertical",
  },
  {
    type: "image",
    src: img6,
    orientation: "vertical",
  },
  {
    type: "image",
    src: img7,
    orientation: "vertical",
  },
  {
    type: "image",
    src: img8,
    orientation: "vertical",
  },
  {
    type: "image",
    src: img9,
    orientation: "vertical",
  },
  {
    type: "image",
    src: img10,
    orientation: "vertical",
  },
  {
    type: "image",
    src: img11,
    orientation: "vertical",
  },
  {
    type: "image",
    src: img12,
    orientation: "vertical",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const videoRef = useRef(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % media.length);
  };

  useEffect(() => {
    if (activeIndex !== null && media[activeIndex].type === "video") {
      videoRef.current?.play();
    }
  }, [activeIndex]);

  return (
    <main className="mt-20 md:mt-20  min-h-screen">
      <section className="w-full relative ">
        <img src={galeri} alt="logo" className="w-full object-fit-contain" />
      </section>
      <section
        className="w-full py-4 shadow-lg border-b border-slate-200  px-5 lg:px-20 bg-[#f8f8f8] flex items-center
       text-sm text-slate-500"
      >
        <Link to={"/"}>Ana Sayfa </Link>
        <p> / Galeri</p>
      </section>
      <h1 className="text-3xl font-bold m-8 text-center">
        Fotoğraf ve Video Galerisi
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer overflow-hidden rounded shadow ${
              item.orientation === "vertical" ? "row-span-2" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover aspect-video"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover aspect-video"
                muted
                playsInline
                preload="metadata"
              />
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="fixed inset-0  bg-black/80 z-50 flex items-center justify-center">

          <button
            className="absolute top-4 right-6 text-white text-3xl"
            onClick={() => setActiveIndex(null)}
          >
            &times;
          </button>
          

          <button
            className="absolute left-4 text-white text-4xl"
            onClick={handlePrev}
          >
             <FaChevronLeft />
          </button>

          <div className="max-w-screen-md max-h-[80vh] mt-8 rounded-2xl overflow-hidden relative">
            {media[activeIndex].type === "image" ? (
              <img
                src={media[activeIndex].src}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <video
                ref={videoRef}
                controls
                autoPlay
                src={media[activeIndex].src}
                className="max-w-full max-h-full"
              />
            )}
          </div>

          <button
            className="absolute right-4 text-white text-4xl"
            onClick={handleNext}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
      <div>
        <img src={bgGecis} alt="" className="w-full h-36" />
      </div>
    </main>
  );
}
