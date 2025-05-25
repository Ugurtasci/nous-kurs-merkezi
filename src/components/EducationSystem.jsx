import React, { useState } from 'react';
import { MdCalendarMonth, MdMonitor, MdPerson } from 'react-icons/md'; // Sol taraftaki ikonlar
import { IoIosAdd, IoIosRemove } from 'react-icons/io'; // Sağ taraftaki artı/eksi ikonlar

const EducationSystem = () => {
  const [openSections, setOpenSections] = useState({
    dataDriven: false,
    qualityAssessment: false,
    academicTracking: false,
    expertStaff: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-6xl mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sol Bölüm */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">NEDEN Nouse Vip Kurs Merkezi?</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <MdCalendarMonth className="text-[#5492b6] text-3xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-700">Deneme Sınavları</h3>
                <p className="text-gray-600 mt-1">
                  Sınavlara yönelik denemeler sayesinde öğrencinin bilgilerini test etmesi ve sınav deneyimi kazanması amaçlanır.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <MdMonitor className="text-[#5492b6] text-3xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-700">Videolu Soru Çözümleri</h3>
                <p className="text-gray-600 mt-1">
                  Öğrenciler deneme sınavlarının çözümlerine, sınavdan sonra internet sitemiz üzerinden ulaşabilmektedirler.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <MdPerson className="text-[#5492b6] text-3xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-700">Koçluk Desteği</h3>
                <p className="text-gray-600 mt-1">
                  Kursumuzda her öğrenciye birebir eğitim koçu desteği verilmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Bölüm */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Eğitim Sistemimiz</h2>
          <div className="space-y-4">
            {/* Veri Temelli Rehberlik Sistemi */}
            <div className="border border-gray-200 rounded-md">
              <button
                className="flex justify-between items-center w-full p-4 text-left text-gray-700 font-semibold"
                onClick={() => toggleSection('dataDriven')}
              >
                <span>Veri Temelli Rehberlik Sistemi</span>
                {openSections.dataDriven ? <IoIosRemove className="text-xl" /> : <IoIosAdd className="text-xl" />}
              </button>
              {openSections.dataDriven && (
                <div className="p-4 pt-0 text-gray-600">
                  {/* Buraya açılacak içerik gelecek */}
                  <p>Kişiye özgü gelişimsel ve kariyer odaklı rehberlik anlayışı ile  öğrenciler sınavlara sınav kaygısı yaşamadan hazırlanırlar.</p>
                </div>
              )}
            </div>

            {/* Nitelikli Ölçme ve Değerlendirme */}
            <div className="border border-gray-200 rounded-md">
              <button
                className="flex justify-between items-center w-full p-4 text-left text-gray-700 font-semibold"
                onClick={() => toggleSection('qualityAssessment')}
              >
                <span>Nitelikli Ölçme ve Değerlendirme</span>
                {openSections.qualityAssessment ? <IoIosRemove className="text-xl" /> : <IoIosAdd className="text-xl" />}
              </button>
              {openSections.qualityAssessment && (
                <div className="p-4 pt-0 text-gray-600">
                  {/* Buraya açılacak içerik gelecek */}
                  <p> Her Öğrenciye özel sınav sonuç karnesi ile konu kazanım performansı ayrıntılı bir şekilde raporlanır. Öğrencilerimiz 
                    akademik gelişimini gözlemleyerek öğrenme sürecini bilinçli bir şekilde sürdürür.
                  </p>
                </div>
              )}
            </div>

            {/* Akademik Performans Takibi */}
            <div className="border border-gray-200 rounded-md">
              <button
                className="flex justify-between items-center w-full p-4 text-left text-gray-700 font-semibold"
                onClick={() => toggleSection('academicTracking')}
              >
                <span>Akademik Performans Takibi</span>
                {openSections.academicTracking ? <IoIosRemove className="text-xl" /> : <IoIosAdd className="text-xl" />}
              </button>
              {openSections.academicTracking && (
                <div className="p-4 pt-0 text-gray-600">
                  {/* Buraya açılacak içerik gelecek */}
                  <p>Ayrıntılı konu kazanım analizleri ile öğrencilerin en küçük öğrenme parçası ile ilgili 
                    akademik performansları tespit edilir ve kazanım eksiği tamamlama programı ile giderilir. 
                  </p>
                </div>
              )}
            </div>

            {/* Alanında Uzman Eğitim Kadrosu */}
            <div className="border border-gray-200 rounded-md">
              <button
                className="flex justify-between items-center w-full p-4 text-left text-gray-700 font-semibold"
                onClick={() => toggleSection('expertStaff')}
              >
                <span>Alanında Uzman Eğitim Kadrosu</span>
                {openSections.expertStaff ? <IoIosRemove className="text-xl" /> : <IoIosAdd className="text-xl" />}
              </button>
              {openSections.expertStaff && (
                <div className="p-4 pt-0 text-gray-600">
                  {/* Buraya açılacak içerik gelecek */}
                  <p>Alanında uzman ve deneyimli eğitim kadromuzla öğrencilerimize en iyi eğitimi sunmayı hedefliyoruz. Öğretmenlerimiz sürekli güncel bilgi ve metotlarla donatılmıştır.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSystem;