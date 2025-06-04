import React from "react";
import { Link } from "react-router-dom";
import bgBlog from "../assets/blog.png";
import { articles } from "../utilis/helper";
import bgGecis from "../assets/bgGecis.png";
const Blogs = () => {
  return (
    <main className="mt-14 md:mt-20 w-full">
      <section className="w-full ">
        <img src={bgBlog} alt="logo" className="w-full object-fit-contain" />
      </section>
      <section className="w-full py-4 shadow-lg border-b border-slate-200 px-5 lg:px-20 bg-[#f8f8f8] flex items-center text-sm text-slate-500">
        <Link to={"/"}>Ana Sayfa</Link>
        <p> / Makaleler</p>
      </section>
      <section className="w-full px-5 lg:px-20 py-10 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                  <Link
                    to={`/blog/${item.id}`}
                    className="mt-4 bg-[#fab303] cursor-pointer text-white px-4 py-1.5 rounded-full text-sm hover:bg-black transition"
                  >
                    Devamını Oku →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <img src={bgGecis} alt="" className="w-full h-36" />
    </main>
  );
};

export default Blogs;
