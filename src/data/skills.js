import {
  BiMobileAlt,
  BiLayer,
  BiCubeAlt,
  BiData,
  BiPlug,
  BiRocket,
} from "react-icons/bi";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiGit,
  SiGithub,
  SiGitlab,
  SiKotlin,
  SiSwagger,
} from "react-icons/si";

// Capability cards shown on the Skills section (home) and About page.
export const capabilities = [
  {
    title: "App Development",
    category: "Mobile",
    description:
      "Building high-performance and responsive cross-platform applications using the Flutter framework and Dart programming language.",
    Icon: BiMobileAlt,
  },
  {
    title: "State Management",
    category: "Architecture",
    description:
      "Managing application state efficiently and scalably using modern reactive approaches such as BLoC, GetX, and Provider.",
    Icon: BiLayer,
  },
  {
    title: "Software Design",
    category: "Architecture",
    description:
      "Implementing OOP principles, Clean Code Architecture, MVVM, and Modular architecture to create clean, maintainable, and scalable codebases.",
    Icon: BiCubeAlt,
  },
  {
    title: "Backend & Cloud Services",
    category: "BaaS & Database",
    description:
      "Seamlessly integrating backend services using MySQL and the Firebase ecosystem (Authentication, Storage, Cloud Messaging, Crashlytics, Analytics).",
    Icon: BiData,
  },
  {
    title: "API Integration",
    category: "Networking",
    description:
      "Designing, testing, and documenting RESTful API integrations quickly and accurately using testing tools like Postman and Swagger.",
    Icon: BiPlug,
  },
  {
    title: "DevOps & Version Control",
    category: "CI/CD & Version Control",
    description:
      "Managing code versions with GitHub/GitLab, and automating application testing and distribution workflows using Codemagic and GitHub Actions.",
    Icon: BiRocket,
  },
];

// Tech stack chips.
export const techStack = [
  { name: "Flutter", Icon: SiFlutter },
  { name: "Dart", Icon: SiDart },
  { name: "Kotlin", Icon: SiKotlin },
  { name: "Firebase", Icon: SiFirebase },
  { name: "MySQL", Icon: SiMysql },
  { name: "Postman", Icon: SiPostman },
  { name: "Swagger", Icon: SiSwagger },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "GitLab", Icon: SiGitlab },
];

// Proficiency bars.
export const proficiencies = [
  { name: "Flutter & Dart", level: 92 },
  { name: "State Management (BLoC / GetX / Provider)", level: 88 },
  { name: "REST API & Networking", level: 90 },
  { name: "Firebase Ecosystem", level: 85 },
  { name: "Clean Architecture & MVVM", level: 82 },
  { name: "CI/CD (Codemagic / GitHub Actions)", level: 75 },
];
