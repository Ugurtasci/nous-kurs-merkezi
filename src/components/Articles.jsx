import Slider from "react-slick";

import { Link } from "react-router-dom";
import { articles } from "../utilis/helper";



export default function Articles() {
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
         <h2 className="text-3xl font-bold my-5  text-[#fab303] ">Güncel Makalelerimiz</h2>
            <p className="md:w-3/5 w-full text-center " >Nouse Vip Blogu'nda, eğitim dünyasındaki en yeni gelişmeleri ve öğrencilere değer katacak ipuçlarını bulabilirsiniz. Başarı hikayelerinden eğitim teknolojilerine kadar geniş bir konu yelpazesini keşfedin. Sizi bilgiye ve başarıya taşıyan güncel makalelerle dolu bir dünyaya davet ediyoruz.</p>
        </div>
      <Slider  {...settings}>
        {articles.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 flex items-start gap-4">
                <div className="text-center text-sm font-semibold">
                  <div className="text-2xl">{item.date}</div>
                  <div className="text-[#fab303]">{item.month}</div>
                  <div>{item.year}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <Link to={`/haberler/${item.id}`} className="mt-4 bg-[#fab303] cursor-pointer text-white px-4 py-1.5 rounded-full text-sm hover:bg-black transition">
                    Devamını Oku →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}