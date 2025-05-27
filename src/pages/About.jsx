import React from 'react'
import { Link } from 'react-router-dom'
import hakkimizda from "../assets/hakkimizda.png"
import { FaPlay } from 'react-icons/fa';
import aboutKurs from "../assets/aboutKurs.jpg"
import studentsImage from "../assets/students.jpg"
import bgGecis from "../assets/bgGecis.png"
import AnimatedStatSection from "../components/AnimatedStatSection";


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
      Alanında tecrübeli öğretmenler ile Nous Vip Kurs Merkezi olarak yola çıkan kurumumuzda, öğrenci merkezli öğretim programlarımız ve motivasyonu yükselten eğitim ortamımız ile her öğrencinin başarıyı hak ettiğine inanıyoruz. Kurs önerileri içinde ön plana çıkan Nous Vip Kurs öğrencilerini eksiksiz şekilde başarıya ulaştırmayı hedefler.
        </p>

        <p className="text-gray-700">
          Nous Vip Kursumuza gelen öğrencinin hazır bulunuşluk durumu belirlenerek, seviyesine uygun ortalama 8-10 kişilik sınıflarda eğitim öğretim faaliyetlerine başlar. Teknolojinin sunduğu bütün imkanlar ile öğretim etkinliklerine devam eder. Yoğun bir tempo ile çalışması gerektiğinin bilincinde ve kendisine her açıdan destek olan öğretmenler ile iş birliği içindedir.
        </p>

        <p>
           Sınav dönemindeki bir öğrencinin yapması gereken ilk şey hedef belirlemektir. Öğrenci koçluğu sistemimiz ile öğrenci hedefinden haberdar olur. Yeteneklerinin farkına varır ve bu doğrultuda amaç edinir. Öğrenci koçluğu sistemi ilk aşamadan itibaren çalışma sistemi belirleme, çalışma ortamlarını düzenleme, değerlendirme süreçleri, deneme analizleri gibi her alanda öğrenciyi destekler.
        </p>

        <p>
           Nous Vip Kurs Merkezi, güncel eğitim programlarına hızla adapte olması ve dijital ortamları öğretim yöntemlerinde etkin şekilde kullanılmasıdır. Online ve yüz yüze eğitim sürecinde kullandığımız öğrenci takip sistemi, çevresel koşulların etkisi ile motivasyonu ve çalışma enerjisi düşen öğrenci hakkında bilgi verir. Öğrenci öğrenme eksiğine uğramayacak şekilde hızlı bir müdahale ile rehber ve branş öğretmenlerinin desteği sayesinde çalışma temposunu tekrar yakalar. Öğrenci ve çalışmaları hakkında net bilgi sağlayan öğrenci takip sistemi, online eğitim sürecinde de etkili bir şekilde kullanılır.
        </p>
      </div>
    </section>
    <div>
      <img src={bgGecis} alt="" className="w-full h-36" />
    </div>
    <AnimatedStatSection />
     
    </main>
  )
}

export default About