import React, { useEffect, useRef, useState } from "react";

import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const location = useLocation();

  const menuRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);

  // Boşluğa tıklanınca menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="shadow-md w-full lg:px-20 px-5 bg-[#fab301]">
      <div className="flex items-center justify-between w-full  py-4 ">
        {/* Sol Logo ve Başlık */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-auto object-cover ml-8 cursor-pointer"
            />
          </Link>
          {/*  <div>
            <p className="text-lg font-bold">NOUS KURS MERKEZİ</p>
          </div> */}
        </div>

        {/* Menü - Masaüstü */}
        <nav className="items-center hidden md:flex lg:space-x-4 space-x-2 lg:text-xl text-lg font-medium text-gray-800">
          <Link to={"/"}>
            <FaHome
              className={`cursor-pointer hover:text-white ${
                location.pathname === "/"
              } text-3xl `}
            />
          </Link>

          {/* Kurumsal Menü */}
          <div className="relative group" ref={menuRef}>
            <button
              onClick={() =>
                setActiveMenu(activeMenu === "kurumsal" ? null : "kurumsal")
              }
              className={`flex items-center gap-1  px-2 py-1 rounded   hover:bg-white h-14 w-auto ${
                location.pathname === "/kurumsal"
              }`}
            >
              Kurumsal <IoIosArrowDown />
            </button>
            {activeMenu === "kurumsal" && (
              <div className="absolute left-0 top-full bg-gray-100 shadow-lg w-36 z-10">
                <NavLink
                  to="/hakkimizda"
                  className="block px-1 py-2 hover:bg-[#fab301] hover:text-white hover:border hover:border-black "
                  onClick={() => setActiveMenu(null)}
                >
                  Hakkımızda
                </NavLink>

                <NavLink
                  to="/misyonvevizyon"
                  className="block px-1 py-2  hover:bg-[#fab301] hover:text-white hover:border hover:border-black"
                  onClick={() => setActiveMenu(null)}
                >
                  Misyon ve Vizyon
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to={"/hizmetlerimiz"}
            className={`flex items-center rounded hover:bg-white h-14 w-auto  ${
              location.pathname === "/hizmetlerimiz"
            }`}
          >
            Hizmetlerimiz
          </NavLink>

          <NavLink
            to={"/kadromuz"}
            className={`flex items-center rounded hover:bg-white h-14 w-auto  ${
              location.pathname === "/kadromuz"
            }`}
          >
            Kadromuz
          </NavLink>
          <NavLink
            to={"/duyurular"}
            className={`flex items-center rounded hover:bg-white h-14 w-auto  ${
              location.pathname === "/duyurular"
            }`}
          >
            Duyurular
          </NavLink>
          <NavLink
            to={"/iletişim"}
            className={`flex items-center rounded hover:bg-white h-14 w-auto  ${
              location.pathname === "/iletişim"
            }`}
          >
            İletişim
          </NavLink>
        </nav>
        {/* Hamburger Menü */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-8 cursor-pointer"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBarsStaggered size={22} />}
        </button>

        {/* Mobil Menü */}
        {isOpen && (
          <div className="md:hidden absolute  top-36 left-0 w-full z-50 bg-[#fab301] shadow-xl px-4 pb-4 space-y-2 text-xl font-medium text-gray-900">
           

            <Link
              onClick={() => setIsOpen(false)}
              to={"/"}
              className="flex items-center gap-1 py-1 rounded hover:text-white w-full"
            >
              <FaHome />
              Ana Sayfa
            </Link>

            {/* Kurumsal */}
            <details className="group border-b border-slate-200">
              <summary className="cursor-pointer flex items-center gap-1 py-2 rounded hover:text-white w-full">
                <span>Kurumsal</span>
                <IoIosArrowDown className="group-open:rotate-180 transition-transform duration-200" />
              </summary>
              <div className="pl-4 mt-2 space-y-1 text-lg rounded bg-gray-100">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/hakkimizda"
                  className="block py-1 rounded  hover:bg-[#fab301] hover:text-white hover:border hover:border-black w-full"
                >
                  Hakkımızda
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/misyonvevizyon"
                  className="block py-1 rounded hover:bg-[#fab301] hover:text-white hover:border hover:border-black w-full"
                >
                  Misyon ve Vizyon
                </Link>
              </div>
            </details>

           <NavLink
              onClick={() => setIsOpen(false)}
              to="/havalandırmasistemleri"
              className="block py-1 rounded hover:text-white "
            >
              Hizmetlerimiz
            </NavLink>

            {/* Diğer Menüler */}
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/havalandırmasistemleri"
              className="block py-1 rounded hover:text-white "
            >
              Kadromuz
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/klimasistemleri"
              className="block py-1 rounded hover:text-white"
            >
              Duyurular
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/iletisim"
              className="block py-1 rounded hover:text-white"
            >
              İletişim
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
