export const translations = {
  ID: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.hire": "Hire Me",

    // Hero
    "hero.availability": "Tersedia untuk kolaborasi",
    "hero.hello": "Halo, Saya",
    "hero.desc": "Fullstack Developer yang suka bikin web yang ga cuma fungsional, tapi juga fun buat dilihat.",
    "hero.btn.projects": "Lihat Proyek",
    "hero.btn.contact": "Hubungi Saya",
    "hero.stat.projects": "Proyek selesai",
    "hero.stat.exp": "Tahun pengalaman",
    "hero.stat.clients": "Klien puas",
    "hero.stat.title": "Sekilas tentang saya.",
    "hero.stat.subtitle": "Statistik",

    // About
    "about.title": "Kenali Lebih Jauh.",
    "about.subtitle": "Tentang Saya",
    "about.p1": "Halo! Saya adalah seorang Fullstack Developer yang bersemangat menciptakan pengalaman digital yang menarik dan solutif. Saya memiliki ketertarikan yang besar pada pengembangan antarmuka pengguna yang responsif serta sistem backend yang solid dan efisien.",
    "about.p2": "Dengan latar belakang di bidang pengembangan perangkat lunak, saya terbiasa menerjemahkan masalah bisnis menjadi solusi teknologi. Fokus saya adalah menulis kode yang bersih, mudah di-maintain, dan dapat berkembang seiring kebutuhan proyek.",
    "about.p3": "Di waktu luang, saya suka mengeksplorasi teknologi baru, berkontribusi pada proyek open-source, dan berbagi ilmu dengan komunitas developer.",
    "about.cv": "Download CV",
    "about.tech": "Teknologi & Tools",

    // Projects
    "projects.title": "Proyek Pilihan.",
    "projects.subtitle": "Karya Saya",
    "projects.header_desc": "Beberapa proyek pilihan yang pernah saya kerjakan. Menampilkan berbagai solusi dari masalah yang kompleks menjadi aplikasi yang mudah digunakan.",
    "projects.demo": "Lihat Demo",
    "projects.p1.title": "E-Commerce Dashboard",
    "projects.p1.desc": "Dashboard analitik lengkap untuk mengelola penjualan, stok barang, dan laporan keuangan secara real-time.",
    "projects.p2.title": "Aplikasi Booking Travel",
    "projects.p2.desc": "Platform pemesanan tiket perjalanan dengan fitur pembayaran terintegrasi dan sistem rekomendasi.",
    "projects.p3.title": "Sistem Manajemen Klinik",
    "projects.p3.desc": "Aplikasi untuk mengelola data pasien, jadwal dokter, dan rekam medis digital secara aman.",

    // Contact
    "contact.title": "Mari Berkolaborasi.",
    "contact.subtitle": "Kontak",
    "contact.desc": "Punya ide proyek, peluang kerja sama, atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya melalui form ini atau lewat email langsung.",
    "contact.location.label": "Lokasi",
    "contact.location.value": "Jember, Indonesia",
    "contact.form.name": "Nama",
    "contact.form.name.ph": "Masukkan nama Anda",
    "contact.form.email": "Email",
    "contact.form.email.ph": "anda@email.com",
    "contact.form.msg": "Pesan",
    "contact.form.msg.ph": "Tulis pesan Anda di sini...",
    "contact.btn.sending": "Mengirim...",
    "contact.btn.sent": "Terkirim!",
    "contact.btn.send": "Kirim Pesan",
    "contact.footer": "All rights reserved."
  },
  EN: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.hire": "Hire Me",

    // Hero
    "hero.availability": "Available for collaboration",
    "hero.hello": "Hello, I'm",
    "hero.desc": "A Fullstack Developer who loves building websites that are not only functional but also fun to look at. Specializing in Next.js, Laravel, and engaging UIs.",
    "hero.btn.projects": "View Projects",
    "hero.btn.contact": "Contact Me",
    "hero.stat.projects": "Projects completed",
    "hero.stat.exp": "Years of experience",
    "hero.stat.clients": "Satisfied clients",
    "hero.stat.title": "A glimpse about me.",
    "hero.stat.subtitle": "Statistics",

    // About
    "about.title": "Get to Know Me Better.",
    "about.subtitle": "About Me",
    "about.p1": "Hello! I am a Fullstack Developer passionate about creating engaging and solution-oriented digital experiences. I have a strong interest in developing responsive user interfaces as well as solid and efficient backend systems.",
    "about.p2": "With a background in software development, I am accustomed to translating business problems into technological solutions. My focus is on writing clean, maintainable code that can scale with project needs.",
    "about.p3": "In my free time, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.",
    "about.cv": "Download CV",
    "about.tech": "Technologies & Tools",

    // Projects
    "projects.title": "Featured Projects.",
    "projects.subtitle": "My Work",
    "projects.header_desc": "Some of the selected projects I have worked on. Showcasing various solutions from complex problems into easy-to-use applications.",
    "projects.demo": "Live Demo",
    "projects.p1.title": "E-Commerce Dashboard",
    "projects.p1.desc": "A comprehensive analytics dashboard for managing sales, inventory, and real-time financial reports.",
    "projects.p2.title": "Travel Booking App",
    "projects.p2.desc": "A travel booking platform with integrated payment features and a recommendation system.",
    "projects.p3.title": "Clinic Management System",
    "projects.p3.desc": "An application to securely manage patient data, doctor schedules, and digital medical records.",

    // Contact
    "contact.title": "Let's Collaborate.",
    "contact.subtitle": "Contact",
    "contact.desc": "Have a project idea, a partnership opportunity, or just want to say hi? Feel free to reach out via this form or email me directly.",
    "contact.location.label": "Location",
    "contact.location.value": "Jember, Indonesia",
    "contact.form.name": "Name",
    "contact.form.name.ph": "Enter your name",
    "contact.form.email": "Email",
    "contact.form.email.ph": "you@email.com",
    "contact.form.msg": "Message",
    "contact.form.msg.ph": "Write your message here...",
    "contact.btn.sending": "Sending...",
    "contact.btn.sent": "Sent!",
    "contact.btn.send": "Send Message",
    "contact.footer": "All rights reserved."
  }
};

export type TranslationKey = keyof typeof translations.ID;
