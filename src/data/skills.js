import {
  BiMobileAlt,
  BiLayer,
  BiCubeAlt,
  BiData,
  BiPlug,
  BiGitBranch,
  BiTask,
  BiRocket,
  BiCodeCurly,
} from "react-icons/bi";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiMysql,
  SiSupabase,
  SiPostman,
  SiSentry,
  SiGit,
  SiGithub,
  SiGitlab,
  SiLaravel,
} from "react-icons/si";

// Capability cards shown on the Skills section (home) and About page.
export const capabilities = [
  {
    title: "Mobile App Development",
    category: "Flutter & Dart",
    description:
      "Building and maintaining cross-platform mobile applications with Flutter and Dart, translating UI/UX designs into functional, responsive interfaces.",
    Icon: BiMobileAlt,
  },
  {
    title: "State Management",
    category: "Architecture",
    description:
      "Managing application state with BLoC, Provider, and GetX to keep Flutter apps scalable and maintainable.",
    Icon: BiLayer,
  },
  {
    title: "Clean Architecture & OOP",
    category: "Architecture",
    description:
      "Applying Object-Oriented Programming principles together with Clean Architecture, MVC, and MVVM patterns.",
    Icon: BiCubeAlt,
  },
  {
    title: "Firebase, Backend & Storage",
    category: "BaaS & Database",
    description:
      "Integrating Firebase (Authentication, Cloud Messaging, Storage, Crashlytics, Analytics), MySQL, and Supabase, with local storage via SQLite, SharedPreferences, and Hive.",
    Icon: BiData,
  },
  {
    title: "API Integration",
    category: "Networking",
    description:
      "Consuming and testing RESTful APIs with JSON, using Postman for API testing and Sentry for monitoring and error tracking.",
    Icon: BiPlug,
  },
  {
    title: "DevOps & Version Control",
    category: "CI/CD & Version Control",
    description:
      "Version control with GitHub and GitLab, issue tracking through Jira, and automated builds with Codemagic.",
    Icon: BiGitBranch,
  },
];

// Tech stack chips.
export const techStack = [
  { name: "Flutter", Icon: SiFlutter },
  { name: "Dart", Icon: SiDart },
  { name: "GetX", Icon: BiLayer },
  { name: "BLoC", Icon: BiLayer },
  { name: "Provider", Icon: BiLayer },
  { name: "Firebase", Icon: SiFirebase },
  { name: "MySQL", Icon: SiMysql },
  { name: "Supabase", Icon: SiSupabase },
  { name: "REST API", Icon: BiPlug },
  { name: "JSON", Icon: BiCodeCurly },
  { name: "Postman", Icon: SiPostman },
  { name: "Sentry", Icon: SiSentry },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "GitLab", Icon: SiGitlab },
  { name: "Laravel", Icon: SiLaravel },
  { name: "Jira", Icon: BiTask },
  { name: "Codemagic", Icon: BiRocket },
];

// Proficiency bars.
export const proficiencies = [
  { name: "Flutter & Dart", level: 90 },
  { name: "State Management (BLoC / Provider / GetX)", level: 85 },
  { name: "REST API & JSON", level: 88 },
  { name: "Firebase Ecosystem", level: 85 },
  { name: "Clean Architecture (MVC / MVVM)", level: 80 },
  { name: "Local Storage (SQLite / Hive / SharedPreferences)", level: 82 },
];
