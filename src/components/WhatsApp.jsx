import React from 'react'

import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
    const handleWhatsappRedirect = () => {
        // Whatsapp numarası ve mesaj
        const phoneNumber = '905555555555'; // Örnek bir numara
        const message = 'Merhaba, bilgi almak istiyorum.';
    
        // Whatsapp uygulamasına yönlendirme URL'i
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
        // Yönlendirme işlemi
        window.location.href = whatsappUrl;
  };

  return (
    <div className='whatsApp p-3 md:py-2 md:px-4 bottom-20'
     onClick={handleWhatsappRedirect} >
        <FaWhatsapp className='text-3xl' />
        <p className='hidden md:inline-block'>WhatsApp</p>
      
    </div>
  )
}

export default WhatsApp