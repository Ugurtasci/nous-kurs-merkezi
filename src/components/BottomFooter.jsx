import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoCodevion from "../assets/logoCodevion.png";
const BottomFooter = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-2 mt-8">
      <div className="flex items-center md:w-[50%] w-full justify-between">
        <div className="text-sm ">
        Nous Vip Kurs Merkezi &copy; {new Date().getFullYear()} | Tüm Hakları
        Saklıdır.
      </div>
        <div className=" md:space-x-4 space-x-1 flex">
          <Link
            to="https://www.instagram.com/bingolnouskurs_/"
            target="_blank"
            className=" hover:text-[#fa0330] transition-colors"
          >
            <FaInstagram className="text-2xl " />
          </Link>
          <Link
            to="https://www.instagram.com/bingolnouskurs_/"
            target="_blank"
            className=" hover:text-[#0341fa] transition-colors"
          >
            <FaFacebookF className="text-xl " />
          </Link>
        </div>
      </div>
      

      <Link
        to="https://www.instagram.com/codevionn/"
        target="_blank"
        className="text-sm border-black hover:shadow-lg shadow-white border hover:border-white rounded-lg py-1 px-4 flex items-center justify-center gap-2 "
      >
        <img
          src={logoCodevion}
          alt="logo"
          className="w-12 object-fit-contain"
        />
        <p className=" hover:text-white hover:underline cursor-pointer">
          Codevion
        </p>
      </Link>
    </footer>
  );
};

export default BottomFooter;
