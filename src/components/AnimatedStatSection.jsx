import { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaUserGraduate, FaGlobe } from "react-icons/fa";

const stats = [
  { icon: <FaChalkboardTeacher className="text-4xl text-white " />, label: "Deneyimli Eğitmen", value: 12, suffix: "+" },
  { icon: <FaUserGraduate className="text-4xl text-white" />, label: "Kayıtlı Öğrenci", value: 365, suffix: "+" },
  { icon: <FaGlobe className="text-4xl text-white" />, label: "Başarı Hikayesi", value: 44, suffix: "K" },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="text-2xl font-bold text-gray-800 ">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <div className="relative bg-[#fda314] overflow-hidden w-full pb-4 ">
      
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            {stat.icon}
            <Counter end={stat.value} suffix={stat.suffix} />
            <p className="text-gray-700 font-medium ">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
