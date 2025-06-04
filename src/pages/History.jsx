import React from "react";
import history from "../assets/history.png";
import tarihcemiz from "../assets/tarihcemiz.jpg";
import AnimatedStatSection from "../components/AnimatedStatSection";
import bgGecis from "../assets/bgGecis.png";
import tarihImage from "../assets/tarih.jpg";
import { Link } from "react-router-dom";
const History = () => {
  return (
    <main className="mt-14 md:mt-20  min-h-screen">
      <section className="w-full relative ">
        <img src={history} alt="logo" className="w-full object-fit-contain" />
      </section>
      <section
        className="w-full py-4 shadow-lg border-b border-slate-200  px-5 lg:px-20 bg-[#f8f8f8] flex items-center
       text-sm text-slate-500"
      >
        <Link to={"/"}>Ana Sayfa </Link>
        <p> / Tarihçemiz</p>
      </section>
      <section className="flex flex-col md:flex-row  items-center justify-center gap-10 px-6 md:px-20 lg:px-32 py-12 bg-white">
        {/* Left Section */}
        <div className="relative w-full md:w-1/2">
          <img
            src={tarihcemiz}
            alt="Ofis"
            className="w-full lg:h-[600px] md:h-[500px] h-[350px] rounded-lg shadow-2xl border-2 border-white object-fit-contain"
          />

          {/* Üst sol köşedeki etiket */}
          <div className="absolute top-4 left-4 bg-[#fab303] text-white font-semibold px-4 py-1 rounded-tl-xl rounded-br-xl shadow">
            2009'dan beri
          </div>

          {/* Alttaki küçük fotoğraf */}
          <img
            src={tarihImage}
            alt="Öğrenciler"
            className="absolute bottom-[-20px] left-4 md:w-64 w-50 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 space-y-5">
          <div className="relative h-12  overflow-hidden">
            {/* Arka plan metni - daha büyük ve opak olmayan */}
            <h1 className="absolute left-0 text-5xl font-bold text-gray-300 opacity-50 z-0 select-none tracking-[20px]">
              Tarihçemiz
            </h1>

            {/* Ön plan metni - daha küçük ve belirgin */}
            <h2 className="relative text-2xl mt-4 font-bold text-[#fab303] z-10 tracking-[5px]">
              TARİHÇEMİZ
            </h2>
          </div>
          <h2 className="text-4xl font-bold text-gray-800">
            Nous Vip Kurs Merkezi
          </h2>

          <p className="text-gray-700">
            Nous Vip Kurs Merkezi, alanında uzman ve tecrübeli öğretmenlerin bir
            araya gelerek oluşturduğu, öğrenci merkezli eğitim anlayışını
            benimseyen bir kurum olarak eğitim yolculuğuna başlamıştır.
            Kuruluşumuzun temelinde her öğrencinin farklı potansiyellere sahip
            olduğu inancı ve bu potansiyelin doğru yönlendirme, kaliteli eğitim
            ve yüksek motivasyonla başarıya dönüşeceği fikri yer almaktadır.
          </p>

          <p className="text-gray-700">
            Kurs merkezimiz, kuruluşundan itibaren öğrencilere bireysel
            farklılıklarını gözeten eğitim imkanları sunmayı hedeflemiş;
            ortalama 8-10 kişilik sınıflarda, seviyeye uygun eğitim modeliyle
            öğretim faaliyetlerini sürdürmüştür. Öğrencilerin hazır bulunuşluk
            durumları dikkate alınarak, onların öğrenme süreçlerine en verimli
            şekilde katkı sağlayacak programlar geliştirilmiştir.
          </p>

          <p>
            Nous VIP Kurs Merkezi, 2022 yılında sınavlara hazırlık sürecini
            bireysel takiple destekleyen, butik sınıf anlayışına dayalı özgün
            bir eğitim modeli sunmak amacıyla kurulmuştur. 8, 10 ve 12 kişilik
            sınıflarla öğrencilerin birebir takip edilmesini sağlayan yapısıyla
            kısa sürede fark yaratan merkezimiz, öğrenci başarısını önceleyen
            güçlü kadrosu ve rehberlik odaklı yaklaşımıyla dikkat çekmiştir.
          </p>

          <p>
            Kuruluşunun üzerinden henüz bir yıl geçmişken, 2023 yılında %90'lık
            başarı oranı ve Yükseköğretim Kurumları Sınavı'nda (YKS) Türkiye
            2.si ile önemli bir akademik başarıya imza atmıştır.
          </p>
          <p>
            2024 yılı itibarıyla Nous VIP Kurs Merkezi, sınav başarısında
            sürdürülebilirliği sağlamış ve şu sonuçlara ulaşmıştır:
          </p>
          <p className="font-semibold text-md">- İlk 5.000'de 2 öğrenci</p>
          <p className="font-semibold text-md">- İlk 10.000'de 6 öğrenci</p>
          <p className="font-semibold text-md">- İlk 30.000'de 16 öğrenci</p>
          <p className="font-semibold text-md">- İlk 100.000'de 40 öğrenci</p>
          <p className="font-semibold text-md">- 20 Tıp Sıralaması</p>
          <p className="font-semibold text-md">- 10 Diş Hekimliği Sıralaması</p>
          <p className="font-semibold text-md">
            - 8 Eczacılık Fakültesi Sıralaması
          </p>
          <p>
            Bugün Nous VIP, bireysel başarıya odaklı eğitim modeli, güçlü
            akademik kadrosu ve motivasyonu yüksek öğrenci kitlesiyle, sınavlara hazırlıkta yenilikçi, güvenilir ve lider bir kurum olma yolunda kararlılıkla ilerlemektedir.
          </p>
        </div>
      </section>
      <div>
        <img src={bgGecis} alt="" className="w-full h-36" />
      </div>
      <AnimatedStatSection />
    </main>
  );
};

export default History;
