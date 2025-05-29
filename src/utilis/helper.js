import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.png'
import slider3 from '../assets/slider3.jpg'
import article1 from "../assets/article1.jpg"
import article2 from "../assets/article2.jpg"
import article3 from "../assets/article3.jpg"
import course1 from "../assets/course1.jpg"
import course2 from "../assets/course2.jpg"
import course3 from "../assets/course3.jpg"
import annocement1 from "../assets/annocement1.jpeg"
import annoucement2 from "../assets/annoucement2.jpeg"
import annoucement3 from "../assets/annoucement3.jpeg"
import teacherbay from "../assets/teacherbay.jpg"
import teacherWoman from "../assets/teacherWoman.jpg"



export  const sliders = [
  {
    id: 1,
    date: "08",
    month: "Mart",
    year: "2025",
    title: "YKS'de Son 100 Metre",
    image: slider1,
    subtitle: "Haberin devamı için tıklayınız",
    detail: [
      { p: "YKS'ye çok az bir süre kaldı. Bu süreçte motivasyonunuzu yüksek tutmak, zamanı verimli kullanmak ve zihinsel olarak güçlü kalmak büyük önem taşıyor." },
      { p: "Bu dönemde yeni konu öğrenmekten çok, tekrar yapmak ve bol bol deneme çözmek daha faydalı olacaktır. Eksik olduğunuz konuları belirleyin ve odaklanın." },
      { li: "Zaman yönetimi yapın, günlük plan hazırlayın." },
      { li: "Deneme sınavlarında gerçek sınav süresine uyun." },
      { li: "Uyku düzeninizi bozmayın, sağlıklı beslenin." },
      { li: "Kendinize zaman ayırın, kısa yürüyüşler veya nefes egzersizleri yapın." },
      { b: "Unutmayın: Bu son virajda istikrar ve moral en büyük güçleriniz!" }
    ]
  },
  {
    id: 2,
    date: "07",
    month: "Şub",
    year: "2025",
    title: "Deneme Kulübü Kayıtları Başladı",
    image: slider2,
    subtitle: "Haberin devamı için tıklayınız",
    detail: [
      { p: "Gerçek sınav deneyimi kazanmak, zaman yönetimini geliştirmek ve eksiklerinizi tespit etmek için Deneme Kulübü kayıtlarımız başlamıştır!" },
      { p: "Kulübümüz her hafta farklı branşlarda deneme sınavları yaparak öğrencilerin gelişimini yakından takip eder ve bireysel analiz sunar." },
      { b: "Deneme Kulübü ile kazandıklarınız:" },
      { li: "Gerçek sınav ortamına benzer deneyim" },
      { li: "Düzenli denemelerle gelişim takibi" },
      { li: "Sınav sonrası detaylı sonuç analizi" },
      { li: "Zaman yönetimi ve hız kazanımı" },
      { p: "Kayıtlarımız kontenjanla sınırlıdır. Katılmak isteyen öğrenciler danışman öğretmenleriyle iletişime geçebilirler." },
      { b: "Unutma: Deneme sınavları, başarıya giden yolda en iyi rehberindir!" }
    ]
  },  
    {
      id: 3,
      date: "09",
      month: "Nis",
      year: "2025",
      title: "Erken Kayıt Avantajlarından Yararlanın",
      image: slider3,
      subtitle: "Haberin devamı için tıklayınız",
      detail: [
        { b: "Erken kayıt neden önemlidir?" },
        { li: "Sınırlı kontenjanlardan öncelikli olarak yararlanabilirsiniz." },
        { li: "Avantajlı fiyatlarla kayıt olabilirsiniz." },
        { li: "Program ve materyal seçimini daha erken yapabilirsiniz." },
        { li: "Planlamanızı daha rahat yapabilirsiniz." },
        { b: "Unutmayın: Erken kayıt fırsatlarını kaçırmayın!" }
      ]
    }
    
   
  ];

 export const courses = [
    {
        id: 1,
        date: "08",
        month: "Mart",
        year: "2025",
        title: "Bire Bir İlginin Zirvesindeyiz",
        desc: "12. Sınıf ve Mezun Kursu koçluk destekli YKS hazırlığı sunar. YKS kursu kapsamında öğrenciler bire bir koçluk ve ödevlendirme seanslarıyla kendi seviyelerine ve yetkinliklerine uygun bir yks hazırlık süreci izlerler.",
        image: course1,
        href: "/kursDetay/1",
        detail: [
          { p: "YKS süreci öğrenciler için hem akademik hem de psikolojik olarak oldukça zorlu bir dönemdir. Bu süreçte doğru yönlendirme, kişiye özel çalışma planı ve motivasyon takibi büyük önem taşır." },
          { p: "12. sınıf ve mezun gruplarına yönelik hazırlanan kurs programımız, öğrencilerin bireysel farklılıklarını dikkate alarak özel bir yol haritası sunar. Her öğrenciye özel belirlenen koçluk sistemi ile başarı hedeflerine ulaşmak daha planlı ve sürdürülebilir hâle gelir." },
          { b: "Programımızda neler var?" },
          { li: "Her öğrenciye özel bire bir koçluk seansları" },
          { li: "Haftalık hedef belirleme ve performans değerlendirme toplantıları" },
          { li: "Düzenli ödevlendirme ve takip sistemi" },
          { li: "Deneme sınavları sonrası analiz ve bireysel rehberlik" },
          { li: "Zaman yönetimi, stresle başa çıkma ve motivasyon çalışmaları" },
          { p: "Koçlarımız, öğrencilerin akademik başarılarını artırmanın yanı sıra moral ve motivasyonlarını da yüksek tutmayı hedefler. Bu sayede öğrenciler sınav sürecinde yalnız olmadıklarını hisseder ve daha güçlü ilerlerler." },
          { b: "Unutma: Doğru yönlendirme, sistemli takip ve bire bir ilgi başarıyı getirir!" }
        ]
        
    },
    {
        id: 2,
        date: "08",
        month: "Mart",
        year: "2025",
        title: "YKS Maratonuna Erken Başla",
        desc: "11. Sınıf Kursu ile öğrencilerimiz yazılılara en iyi şekilde hazırlanır, tüm TYT ve AYT deneme sınavlarına katılarak sınav tecrübesi edinme şansı yakalarlar. Ödevlendirme ve koçluk sistemine dahil olarak YKS serüveni için disiplinli çalışma alışkanlığı kazanırlar.",
        image: course2,
        href: "/kursDetay/2",
        detail: [
          { p: "YKS hazırlık süreci sadece 12. sınıfta değil, 11. sınıftan itibaren disiplinli ve planlı bir şekilde başlatıldığında çok daha verimli sonuçlar doğurur. Erken başlayan öğrenciler, sınav temposuna daha çabuk adapte olur ve fark yaratır." },
          { p: "11. sınıf kurs programımız, okul yazılılarına destek sağlarken aynı zamanda öğrencileri YKS’ye temelden hazırlamayı hedefler. TYT ve AYT formatında yapılan düzenli deneme sınavları ile öğrenciler sınav psikolojisine erken aşina olur." },
          { b: "Programın Avantajları:" },
          { li: "Yazılı sınavlara yönelik konu tekrarları ve soru çözümleri" },
          { li: "TYT ve AYT deneme sınavları ile sınav pratiği kazanımı" },
          { li: "Bire bir koçluk görüşmeleri ile hedef belirleme ve süreç yönetimi" },
          { li: "Düzenli ödevlendirme sistemi ile pekiştirici tekrarlar" },
          { li: "Akademik gelişim takibi ve motivasyon desteği" },
          { p: "Koçluk sistemimizle öğrencilerin yalnızca akademik başarıları değil, özgüven ve zaman yönetimi becerileri de gelişir. Böylece YKS yolculuklarına sağlam ve bilinçli bir adım atarlar." },
          { b: "Erken başlayan kazanır! Şimdiden adım at, sınav gününde öne çık!" }
        ]
        
    },
    {
        id: 3,
        date: "08",
        month: "Mart",
        year: "2025",
        title: "Temellerini Sağlam At",
        desc: "10. sınıf kursu TYT sınavına yönelik konuların pekiştirilmesini, konuların temellerinin en iyi şekilde oluşturulmasını sağlarken okula destek seanslarıyla yazılılarda öğrencilerin en iyi sonuçları elde edebilmesini hedefler.",
        image: course3,
        href: "/kursDetay/3",
        detail: [
          { p: "TYT’ye hazırlık süreci erken yaşta başladığında, öğrenciler konulara daha sağlam temellerle hâkim olur. 0. sınıf kurs programımız, öğrencilerin hem okul derslerinde başarı sağlamasını hem de YKS için güçlü bir akademik altyapı oluşturmasını amaçlar." },
          { p: "Bu program, özellikle matematik ve Türkçe gibi TYT’nin temel derslerine odaklanarak, öğrencilerin kavramsal eksiklerini gidermelerine ve temel becerilerini geliştirmelerine destek olur." },
          { b: "Program İçeriği:" },
          { li: "TYT’ye temel oluşturacak konuların sade ve anlaşılır anlatımı" },
          { li: "Konu sonlarında pekiştirici testler ve birebir soru çözüm seansları" },
          { li: "Okula destek amaçlı yazılı sınavlara hazırlık çalışmaları" },
          { li: "Ödevlendirme sistemiyle düzenli takip ve bireysel geri bildirimler" },
          { li: "Koçluk görüşmeleriyle öğrencilerin motivasyonlarının artırılması" },
          { p: "0. sınıf programı, öğrencilerin konuları yüzeysel değil, derinlemesine anlamasını sağlar. Böylece sonraki yıllarda karşılaşacakları yoğun sınav temposuna hazır hale gelirler." },
          { b: "Sağlam bir temel, sağlam bir gelecek demektir. Yola bugünden çıkın, avantajı erkenden yakalayın!" }
        ]
        
    },
]
export const teachers = [
  {
    name:"Kemal Uçar",
    image:teacherbay,
    jop:"Matematik Öğretmeni"
  },
  {
    name:"Ayşe Yıldız",
    image:teacherWoman,
    jop:"Türkçe Öğretmeni"
  },
  {
    name:"Emrah Burkay",
    jop:"Fizik Öğretmeni",
    image:teacherbay
  },
  {
    name:"Zeynep Arslan",
    image:teacherWoman,
    jop:"Kimya Öğretmeni"
  },
  {
    name:"Kemal Uçar",
    image:teacherbay,
    jop:"Biyoloji Öğretmeni"
  },
  {
    name:"Ayşe Yıldız",
    image:teacherWoman,
    jop:"Tarih Öğretmeni"
  },
  {
    name:"Emrah Burkay",
    jop:"Coğrafya Öğretmeni",
    image:teacherbay
  },
  {
    name:"Zeynep Arslan",
    image:teacherWoman,
    jop:"Geometri Öğretmeni"
  },

]
export const articles= [
  {  id:1,
    author: "Dr. Ahmet Yılmaz",
    date: "08",
    month: "Mart",
    year: "2025",
    title:"Yks Hangi Konudan Kaç Soru Geliyor? 2025 Hazırlık Rehberi",
    image:article1,
    desc:[
      {b:"Yks'de hangi konudan kaç soru geliyor sorusu, sınav hazırlığı yapan öğrenciler için oldukça önemlidir. 2025 Yks hazırlık rehberimizde, Yks'de hangi konulardan kaç soru geleceğini detaylı bir şekilde inceleyeceğiz."},
      {p:"Yks, Türkiye'de üniversiteye giriş sınavıdır ve her yıl milyonlarca öğrenci tarafından alınır. Sınav, Temel Yeterlilik Testi (TYT) ve Alan Yeterlilik Testi (AYT) olmak üzere iki aşamadan oluşur. TYT, genel yetenek ve genel kültür konularını kapsarken, AYT ise öğrencinin seçtiği alanla ilgili konuları içerir."},
      {p:"Yks'de hangi konudan kaç soru geldiğini bilmek, öğrencilerin sınav hazırlıklarını daha etkili bir şekilde planlamalarına yardımcı olur. Bu nedenle, Yks konularını ve soru dağılımını iyi bilmek önemlidir."},
    ]
    },
    { id:2,
      author: "Dr. Ahmet Yılmaz",
      date: "08",
      month: "Mart",
      year: "2025",
      title:"2025 Ykss Sınav Tarihleri ve Detayları",
      image:article2,
      desc:[
        {b:"2025 Ykss sınav tarihleri ve detayları, üniversiteye giriş sürecinde önemli bir yer tutar. Bu makalede, 2025 Ykss sınav tarihlerini, başvuru süreçlerini ve sınavın nasıl gerçekleştirileceğini inceleyeceğiz."},
        {p:"Ykss, Türkiye'de üniversiteye giriş için yapılan önemli bir sınavdır. Her yıl milyonlarca öğrenci bu sınava katılır ve başarılı olmak için yoğun bir şekilde hazırlanır. 2025 Ykss sınav tarihleri, öğrencilerin hazırlık süreçlerini planlamaları açısından kritik öneme sahiptir."},
        {p:"Ykss'nin iki aşaması vardır: Temel Yeterlilik Testi (TYT) ve Alan Yeterlilik Testi (AYT). TYT, genel yetenek ve genel kültür konularını kapsarken, AYT ise öğrencinin seçtiği alanla ilgili konuları içerir."}
      ]
      },
      {  id:3,
        author: "Fatma Demir",
        date: "08",
        month: "Mart",
        year: "2025",
        title:"Sınav Kaygısından Nasıl Kurtulunur? 2025 Yks İçin İpuçları",
        image:article3,
        detail:[
         {b:"Sınav kaygısı, birçok öğrencinin karşılaştığı yaygın bir sorundur. 2025 Yks için sınav kaygısından nasıl kurtulunacağına dair ipuçlarını bu makalede bulabilirsiniz."},
         {p:"Sınav kaygısı, öğrencilerin sınav performansını olumsuz etkileyebilir. Bu nedenle, sınav kaygısını yönetmek ve azaltmak önemlidir. 2025 Yks için sınav kaygısından nasıl kurtulunacağına dair bazı ipuçları şunlardır:"},
         {li:"Düzenli ve etkili bir çalışma programı oluşturun."},
         {li:"Sınav öncesi yeterli dinlenme ve uyku alın."},
         {li:"Sınav günü için hazırlığınızı önceden yapın."},
         {li:"Sınav kaygısını azaltmak için nefes egzersizleri yapın."},
         {li:"Olumlu düşünmeye odaklanın ve kendinize güvenin."},
         {li:"Sınavdan önceki günlerde aşırı kafein ve şeker tüketiminden kaçının."},
         {li:"Sınav günü stres yönetimi tekniklerini uygulayın."},
         {li:"Sınav sonrası kendinizi ödüllendirin ve başarılarınızı kutlayın."}
        ]
        },

]

export const comments = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    type:"Öğrenci",
    date: "08 Mart 2025",
    comment: "Yks hazırlık sürecim için çok faydalı bilgiler buldum. Teşekkürler!",
  },
  {
    id: 2,
    name: "Fatma Demir",
    type:"Öğrenci",
    date: "09 Mart 2025",
    comment: "Sınav kaygısı ile başa çıkmak için harika ipuçları. Çok yardımcı oldu.",
  },
  {
    id: 3,
    name: "Mehmet Çalışkan",
    type:"Veli",
    date: "10 Mart 2025",
    comment: "Yks konularını ve soru dağılımını öğrenmek, çalışma planımı daha iyi yapmamı sağladı.",
  },
]

export const announcements = [
  {
    id:1,
    title:"Yks Sınav Tarihleri Açıklandı",
    date:"08 Nisan 2025",
    description:"2025 Yks sınav tarihleri açıklandı. Öğrencilerimizi sınav tarihlerini not almaya davet ediyoruz. Sınavlar 15-16 Haziran 2025 tarihlerinde gerçekleşecektir.",
    image:annocement1
  },
  {
    id:1,
    title:"Deneme Sınavı Sonuçları Açıklandı",
    date:"10 Mayıs 2025",
    description:"Deneme Sınavı sonuçları açıklandı. Öğrencilerimiz sonuçlarını öğrenci panelinde görüntüleyebilirler. Başarılarının devamını dileriz.",
    image:annoucement2
  },
  {
    id:3,
    title:"Yaz Dönemi Kurs Kayıtları Başladı",
    date:"25 Mayıs 2025",
    description:"Yaz dönemi kurs kayıtları başlamıştır. Öğrencilerimiz yaz tatilinde de Yks hazırlıklarına devam edebilirler. Kayıt için denışmanlarımızla iletişime geçebilirsiniz.",
    image:annoucement3
  }
]
