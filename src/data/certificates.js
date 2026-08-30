// Certificate images live in `public/images/certificates/`.
// `image` = thumbnail / full scan shown on the card.
// `url`   = credential verification link (falls back to the image scan).
// `group` + `level` drive the grouped, tiered layout in <Certificates />.
const DIR = "/images/certificates";

// Display order of the groups (mobile development first).
export const certificateGroups = [
  "Mobile Development",
  "Programming Fundamentals",
  "Web Development",
  "Programs & Internships",
];

// Higher rank = shown first inside a group, and stronger badge styling.
export const levelRank = {
  Expert: 4,
  Advanced: 3,
  Certified: 3,
  Intermediate: 2,
  Fundamental: 1,
  "": 0,
};

export const certificates = [
  // ---- Mobile Development ----
  {
    title: "Menjadi Flutter Developer Expert",
    issuer: "Dicoding Indonesia",
    group: "Mobile Development",
    level: "Expert",
    date: "Jul 2026",
    credentialId: "81P2O0LQOZOY",
    image: `${DIR}/Dicoding%20Flutter%20Expert.png`,
    url: "https://www.dicoding.com/certificates/81P2O0LQOZOY",
    repo: "https://github.com/AhmadJaenal/dicoding_project",
    skills: ["Clean Architecture", "TDD", "CI/CD", "Modularization"],
  },
  {
    title: "IDCamp 2025 Scholarship — Mobile (Intermediate)",
    issuer: "Indosat Ooredoo Hutchison",
    group: "Mobile Development",
    level: "Intermediate",
    date: "2025",
    credentialId: "IDCAMP2025/L2-MP-081",
    image: `${DIR}/IDCamp%20Level%20Intermediate.png`,
    url: `${DIR}/IDCamp%20Level%20Intermediate.png`,
    skills: ["Mobile Programming", "Flutter"],
  },
  {
    title: "Mastering Flutter 2.0: Build Travel App",
    issuer: "BuildWithAngga",
    group: "Mobile Development",
    level: "Intermediate",
    date: "Jul 2022",
    credentialId: "qibhUfSmVH",
    image: `${DIR}/BWA%20Mastering%20Flutter%202.0.png`,
    url: `${DIR}/BWA%20Mastering%20Flutter%202.0.png`,
    skills: ["Flutter", "UI Development", "State Management"],
  },
  {
    title: "Mastering Flutter and Dart: Find House App",
    issuer: "BuildWithAngga",
    group: "Mobile Development",
    level: "Fundamental",
    date: "Apr 2022",
    credentialId: "WNWjuZ6NT8",
    image: `${DIR}/BWA%20Mastering%20Flutter%20and%20Dart%20Find%20House%20App.png`,
    url: `${DIR}/BWA%20Mastering%20Flutter%20and%20Dart%20Find%20House%20App.png`,
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
    issuer: "Dicoding Indonesia",
    group: "Mobile Development",
    level: "Fundamental",
    date: "Nov 2023",
    credentialId: "JLX1WY9Q2P72",
    image: `${DIR}/Dicoding%20Belajar%20Flutter.png`,
    url: "https://www.dicoding.com/certificates/JLX1WY9Q2P72",
    skills: ["Flutter", "Dart", "Widget"],
  },

  // ---- Programming Fundamentals ----
  {
    title: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding Indonesia",
    group: "Programming Fundamentals",
    level: "Intermediate",
    date: "Nov 2023",
    credentialId: "JMZV17O43XN9",
    image: `${DIR}/Dicoding%20SOLID%20Principles.png`,
    url: "https://www.dicoding.com/certificates/JMZV17O43XN9",
    skills: ["SOLID", "Clean Code", "OOP"],
  },
  {
    title: "Memulai Pemrograman Dengan Dart",
    issuer: "Dicoding Indonesia",
    group: "Programming Fundamentals",
    level: "Fundamental",
    date: "Jun 2022",
    credentialId: "JLX1G2DGJZ72",
    image: `${DIR}/Dicoding%20Memulai%20Pemrograman%20Dart.png`,
    url: "https://www.dicoding.com/certificates/JLX1G2DGJZ72",
    skills: ["Dart", "OOP"],
  },

  // ---- Web Development ----
  {
    title: "Junior Web Programmer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    group: "Web Development",
    level: "Certified",
    date: "Mar 2025",
    credentialId: "62090 2513 3 0136333 2025",
    image: `${DIR}/BNSP%20web.jpg`,
    url: `${DIR}/BNSP%20web.jpg`,
    skills: ["Web Development", "National Competency"],
  },

  // ---- Programs & Internships ----
  {
    title: "Internship Completion — Mobile Developer",
    issuer: "PT. Ragdalion Revolusi Industri",
    group: "Programs & Internships",
    level: "",
    date: "Jun 2026",
    credentialId: "Grade 85.75 (Very Good)",
    image: `${DIR}/Sertifikat%20Maganghub%20Ragdalion.png`,
    url: `${DIR}/Sertifikat%20Maganghub%20Ragdalion.png`,
    skills: ["Flutter", "GetX", "REST API", "Jira"],
  },
  {
    title: "College Graduate Internship Program",
    issuer: "Kementerian Ketenagakerjaan RI",
    group: "Programs & Internships",
    level: "",
    date: "Jun 2026",
    credentialId: "MN.032.016197.03.2025",
    image: `${DIR}/Sertifikat%20Maganghub%20Kemnaker.png`,
    url: `${DIR}/Sertifikat%20Maganghub%20Kemnaker.png`,
    skills: ["Mobile Developer"],
  },
  {
    title: "Badan Ekraf Digital Talent 2026",
    issuer: "Kementerian Ekonomi Kreatif RI",
    group: "Programs & Internships",
    level: "",
    date: "May 2026",
    credentialId: "",
    image: `${DIR}/bdt.jpg`,
    url: `${DIR}/bdt.jpg`,
    skills: ["Digital Talent Program"],
  },
];
