// components/Features.js
import { FaUserAlt, FaBookOpen, FaGlasses } from 'react-icons/fa';

const features = [
  {
    id:1,
    icon: <FaUserAlt size={40} className="text-primary text-[#fab303]" />,
    title: 'Sınırsız Bire Bir Destek',
    description:
      'Nouse Vip öğrencileri eksiklerine yönelik sınırsız bire bir destek alır, zamanında tüm eksiklerini giderir.',
  },
  { id:2,
    icon: <FaBookOpen size={40} className="text-primary text-white" />,
    title: 'Tam Verimli Ders Anlatımı',
    description:
      'Nouse Vip’de 5-8 kişilik seviye sınıflarında bire bir ders kalitesinde, interaktif gerçekleşen derslerle tüm konular en iyi şekilde öğrenilir.',
  },
  {
    id:3,
    icon: <FaGlasses size={40} className="text-primary text-[#fab303]" />,
    title: 'Sıkı Bireysel Takip ve Analiz',
    description:
      'Nouse Vip bünyesinde her öğrencinin gelişimi adım adım takip edilir. Öğrenciler kişiye özel ve seviyesine uygun ödevlendirme ve koçluk ile YKS sınavına hazırlanırlar.',
  },
];

export default function Features() {
  return (
    <div className="py-8 md:py-12 lg:py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={` rounded-xl shadow-md p-6 md:h-72 text-center hover:-translate-y-2 hover:shadow-lg transition
                 ${feature.id ==2 ? "bg-[#fab303]":"bg-white"}`}
            >
              <div className={`flex justify-center mb-4 border-2  w-20 h-20 items-center rounded-full mx-auto
                ${feature.id===2 ? "border-white":"border-[#fab303]"}`}>
                {feature.icon}

                </div>
              <h3 className={`text-lg font-semibold  mb-2 ${feature.id===2 ? "text-white":"text-black"}`}>
                {feature.title}
              </h3>
              <div className="w-25 h-1 bg-[#fab303] mx-auto mb-4" />
              <p className={` text-sm ${feature.id===2 ? "text-white":"text-gray-700"}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
