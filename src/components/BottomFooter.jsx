import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
const BottomFooter = () => {
  return (
    <footer className='flex items-center justify-between bg-black text-white p-4 mt-8'>
      <div className='text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} Nouse Vip Kurs Merkezi. Tüm Hakları Saklıdır
      </div>
      <div className=' md:space-x-4 space-x-1 hidden md:flex'>
        <Link to='https://www.instagram.com/bingolnouskurs_/' target="_blank" className='text-gray-500 hover:text-[#fab303] transition-colors'>
          <FaInstagram className='text-2xl ' />
        </Link>
        <Link to='https://www.instagram.com/bingolnouskurs_/' target="_blank" className='text-gray-500 hover:text-[#fab303] transition-colors'>
          <FaFacebookF className='text-xl ' />
        </Link>
      </div>
      <div className='text-sm text-gray-500'>
        <Link to="https://www.instagram.com/codevionn/" target='_blank' className='text-gray-500 hover:text-white hover:underline cursor-pointer'>
        Codevion</Link>
      </div>
    </footer>
  )
}

export default BottomFooter