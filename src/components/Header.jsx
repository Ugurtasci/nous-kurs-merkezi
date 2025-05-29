import { useEffect, useState } from 'react';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from "../assets/logo.png";

const menuItems = [
  { label: "Ana Sayfa", path: "/", icon: <FaHome />, external: false },
  {
    label: "Kurumsal",
    submenu: [
      { label: "Hakkımızda", path: "/hakkimizda" },
      { label: "Misyon ve Vizyonumuz", path: "/misyon-vizyon" },
      { label: "Tarihçemiz", path: "/tarihce" },
    ]
  },
  { label: "Kurslarımız", path: "/kurslarimiz" },
  { label: "Kadromuz", path: "/kadro" },
  { label: "Duyurular", path: "/duyurular" },
  { label: "Etkinliklerimiz", path: "/etkinlikler" },
  { label: "Blog", path: "/blog" },
  { label: "Galeri", path: "/galeri" },
  { label: "İletişim", path: "/iletisim" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <header
    className={`bg-[#fab303]  w-full lg:px-20 px-5 fixed shadow-2xl left-0 z-50 transition-all duration-300 ${
      scrolled ? "top-0" : "md:top-12 top-0"
    }`}
  >
      <div className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        <nav className="hidden md:flex space-x-6 items-center font-medium text-gray-800">
          {menuItems.map((item, index) =>
            item.submenu ? (
              <div key={index} className="relative group ">
                <button className={`flex items-center text-white gap-1 relative after:content-[""] after:absolute 
                  after:-bottom-1 after:left-0 after:bg-white after:h-1 after:rounded-2xl 
              after:w-0 after:transition-all after:duration-500 hover:after:w-full  ${item.submenu.some(i => isActive(i.path)) ? "after:w-full" : ""}`}>
                  {item.label} <IoIosArrowDown />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block bg-[#fab303] border border-[#fab303] text-white shadow-lg w-48 z-10">
                  {item.submenu.map((sub, i) =>
                    <NavLink key={i} to={sub.path} className="block px-4 py-2  hover:bg-gray-100 hover:text-[#fab303]">
                    {sub.label}
                    </NavLink>
                  )}
                </div>
              </div>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className={`flex items-center text-white gap-1 relative after:content-[""] after:absolute 
                  after:-bottom-1 after:left-0 after:bg-white after:h-1 after:rounded-2xl 
              after:w-0 after:transition-all after:duration-500 hover:after:w-full  ${isActive(item.path) ? "after:w-full" : ""}`}
              >
                {item.icon && item.icon} {item.label}
              </NavLink>
            )
          )}

          {/*  // giriş 
        <div className="bg-black py-1 px-4 rounded-md text-center hover:bg-white  font-semibold hover:text-[#fab301] transition duration-300 text-white">
          <a
            href="http://nousobs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            GİRİŞ YAP
          </a>
        </div> */}
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

       
      </div>

      {/* Mobil Menü */}
      {isOpen && (
        <div className="md:hidden absolute z-50 bg-[#fab303] left-0 w-full shadow-lg px-4 pb-4 space-y-2 text-sm font-medium text-white border-t">
          {menuItems.map((item, index) =>
            item.submenu ? (
              <details key={index} className="group border-b border-slate-300">
                <summary className="cursor-pointer flex items-center gap-1">
                  <span>{item.label}</span>
                  <IoIosArrowDown className="group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="pl-4 mt-2 space-y-1">
                  {item.submenu.map((sub, i) =>
                    sub.external ? (
                      <a
                        key={i}
                        href={sub.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.label}
                      </a>
                    ) : (
                      <Link key={i} to={sub.path} onClick={() => setIsOpen(false)} className="block">
                        {sub.label}
                      </Link>
                    )
                  )}
                </div>
              </details>
            ) : (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 ${isActive(item.path) ? "text-black" : ""}`}
              >
                {item.icon && item.icon} {item.label}
              </Link>
            )
          )}
        </div>
      )}

     

    </header>
  );
}
