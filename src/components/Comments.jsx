import Slider from "react-slick";

import { Link } from "react-router-dom";
import { comments } from "../utilis/helper";



export default function Comments() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  

  return (
    <div className="max-w-7xl mx-auto px-4 my-20">
        <div className="mb-12 pb-3 border-[#fab303] border-b flex flex-col items-center">
         <h2 className="text-3xl font-bold my-5  text-[#fab303] ">Öğrencilerimizin Görüşleri</h2>
          
        </div>
      <Slider  {...settings}>
        {comments.map((item, index) => (
         
         <div key={index} className="px-2">
                 <div key={index} className="relative max-w-md p-6 rounded-2xl h-52 shadow-lg backdrop-blur-md bg-white/10 text-white border border-white/20 overflow-hidden">
                {/* Gradient background bubbles */}
                <div className="absolute -top-10 -left-10 w-28 h-28 bg-[#fab303] rounded-full opacity-40 blur-2xl z-0"></div>
                <div className="absolute -bottom-10 right-10 w-28 h-28 bg-black rounded-full opacity-40 blur-2xl z-0"></div>

                {/* Profile image */}
                <img
                    src={`https://picsum.photos/id/${index}/200/300`}
                    alt="Profile"
                    className="absolute bottom-5 right-6 w-24 h-24 rounded-full border-4 border-white object-cover z-10"
                />

                {/* Content */}
                <div className="relative text-black z-10 mt-8">
                    <p className="text-sm">
                    {item.comment}
                    </p>
                    <div className="mt-4">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-300">{item.type}</p>
                    </div>
                    <div className="mt-2">
                    <p className="text-sm font-semibold">{item.date}</p>
                    </div>
                </div>
                </div>

            </div>
        ))}
      </Slider>
    </div>
  );
}