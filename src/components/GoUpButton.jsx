import React, { useEffect, useState } from 'react'

const GoUpButton = () => {
      const [showScrollTop, setShowScrollTop] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setShowScrollTop(window.scrollY > 200);
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
  return (
    <div>
         {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-14 border-2 border-white  right-6 bg-black text-white w-12 h-12 rounded-full shadow-lg hover:bg-white hover:text-black transition-all z-50"
          aria-label="Yukarı Çık"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default GoUpButton