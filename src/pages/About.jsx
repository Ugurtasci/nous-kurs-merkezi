import React from 'react'
import { Link } from 'react-router-dom'
import hakkimizda from "../assets/hakkimizda.png"
import { FaPlay } from 'react-icons/fa';
import aboutKurs from "../assets/aboutKurs.jpg"
import studentsImage from "../assets/students.jpg"

const About = () => {
  return (
    <main className='mt-20 min-h-screen'>
      <section className='w-full relative '>
        <img src={hakkimizda} alt="logo"
        className='w-full object-fit-contain' />
      </section> 
      <section className='w-full py-4 shadow-lg border-b border-slate-200  px-5 lg:px-20 bg-[#f8f8f8] flex items-center
       text-sm text-slate-500'>
        <Link to={"/"}>Ana Sayfa </Link>
        <p> / Hakkımızda</p>
      </section> 
      <section className="flex flex-col md:flex-row  items-center justify-center gap-10 px-6 md:px-20 lg:px-32 py-12 bg-white">
      {/* Left Section */}
      <div className="relative w-full md:w-1/2">
        <img
          src={aboutKurs}
          alt="Ofis"
          className="w-full lg:h-[600px] md:h-[500px] h-[350px] rounded-lg shadow-2xl border-2 border-white object-fit-contain"
        />

        {/* Üst sol köşedeki etiket */}
        <div className="absolute top-4 left-4 bg-[#fab303] text-white font-semibold px-4 py-1 rounded-tl-xl rounded-br-xl shadow">
          2009'dan beri
        </div>

        {/* Alttaki küçük fotoğraf */}
        <img
          src={studentsImage}
          alt="Öğrenciler"
          className="absolute bottom-[-20px] left-4 md:w-64 w-50 object-cover rounded-lg shadow-lg"
        />

        {/* Oynat ikon butonu */}
        <button className="absolute bottom-6 right-6 cursor-pointer bg-[#fab303] text-white p-4 rounded-full shadow-lg hover:bg-black transition">
          <FaPlay />
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 space-y-5">
      <div className="relative flex items-center justify-center  overflow-hidden">
      {/* Arka plan metni - daha büyük ve opak olmayan */}
      <h1 className="absolute text-5xl font-bold text-gray-200 opacity-50 z-0 select-none">
        Biz Kimiz?
      </h1>

      {/* Ön plan metni - daha küçük ve belirgin */}
      <h2 className="relative text-2xl font-bold text-blue-700 z-10">
        BİZ KİMİZ?
      </h2>
      </div>
        <h2 className="text-4xl font-bold text-gray-800">Nous Vip Kurs Merkezi</h2>

        <p className="text-gray-700">
        Nous Vip Kur Merkezi olarak, öğrencilerimize çağın gereksinimlerine uygun bir şekilde hizmet sunmayı amaçlıyoruz. Özel eğitimde çığır açan online eğitim modelimizle, öğrencilerimizin her an her yerde öğrenme şansına sahip olmalarını sağlıyoruz.
        </p>

        <p className="text-gray-700">
          Her öğrencinin potansiyelini en üst düzeye çıkarmak ve onları başarıya taşımak için buradayız...
        </p>

        <p>
          <span className="font-semibold">Vizyonumuz:</span> Öğrencilerimizin akademik başarılarını artırmak ve onları hayallerine ulaştırmak için çaba harcıyoruz. Uzman eğitmen kadromuz ve çeşitli programlarımızla, öğrencilere özelleştirilmiş bir öğrenme deneyimi sağlamak için buradayız.
        </p>

        <p>
          <span className="font-semibold">Misyonumuz:</span> Nous Vip Kur Merkezi, her öğrenciye saygı gösterir ve onların benzersiz ihtiyaçlarına duyarlı bir şekilde yaklaşır. Nitelikli eğitmenlerimizle birlikte, öğrencilerin güçlü yönlerini keşfetmelerine, zayıf yönlerini geliştirmelerine ve kendilerini en iyi şekilde ifade etmelerine yardımcı oluyoruz.
        </p>
      </div>
    </section>
     
    </main>
  )
}

export default About