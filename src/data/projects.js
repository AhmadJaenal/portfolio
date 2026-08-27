// Central project data. `id` is the URL slug used at /portfolio/:id
export const projects = [
  {
    id: "arp-cerol",
    title: "ARP (Cerol)",
    category: "Audit & Certification",
    date: "2026",
    company: "LPPOM MUI",
    role: "Flutter Developer",
    status: "Completed",
    themeColor: "#FF7A3D",
    featured: true,
    order: 1,
    media: {
      cover:
        "https://cdn.dribbble.com/userupload/16734510/file/original-f1e2b34a8a8030e12f2a83625ecac051.png?resize=752x&vertical=center",
      screenshots: [
        "/images/projects/cerol/1.png",
        "/images/projects/cerol/2.png",
        "/images/projects/cerol/3.png",
      ],
      demo: "",
    },
    links: { playStore: "", github: "", website: "" },
    description:
      "Mobile application developed to support the halal certification audit process by managing auditor assignments, task progress, reimbursement, and audit history.",
    tasks: [
      "Developed Audit Offer & Progress pages",
      "Built Task List & Task Detail pages",
      "Implemented Refund & Reimbursement features",
      "Developed History page",
      "Developed Profile page",
      "Implemented Year Filter feature",
    ],
    implementations: [
      "REST API Integration",
      "Firebase Integration",
      "UI Slicing from Figma",
      "Responsive UI Development",
      "Navigation & Routing",
      "Form Validation",
    ],
    technologies: ["Flutter", "Dart", "REST API", "Firebase"],
    stateManagement: "GetX",
  },
  {
    id: "sikomo",
    title: "Sikomo",
    category: "HR Management",
    date: "2026",
    company: "PT Koito Indonesia",
    role: "Flutter Developer",
    status: "Completed",
    themeColor: "#00A86B",
    featured: true,
    order: 2,
    media: {
      cover:
        "https://cdn.dribbble.com/userupload/16734510/file/original-f1e2b34a8a8030e12f2a83625ecac051.png?resize=752x&vertical=center",
      screenshots: [
        "/images/projects/sikomo/1.png",
        "/images/projects/sikomo/2.png",
        "/images/projects/sikomo/3.png",
      ],
      demo: "",
    },
    links: { playStore: "", github: "", website: "" },
    description:
      "Human Resource Management application that helps employees manage attendance, leave requests, maternity requests, vehicle requests, and other internal HR services.",
    tasks: [
      "Developed Vehicle Request feature",
      "Built Vehicle Request List page",
      "Implemented Leave Reschedule feature",
      "Developed Leave Recap page",
      "Implemented Maternity Request feature",
      "Built Maternity Request List page",
      "Developed Maternity Detail page",
    ],
    implementations: [
      "REST API Integration",
      "Firebase Integration",
      "Face Recognition Integration",
      "UI Slicing from Figma",
      "Responsive UI Development",
      "Form Validation",
    ],
    technologies: ["Flutter", "Dart", "REST API", "Firebase"],
    stateManagement: "GetX",
  },
  {
    id: "andon-calling",
    title: "Andon Calling",
    category: "Manufacturing",
    date: "2026",
    company: "PT Koito Indonesia",
    role: "Flutter Developer",
    status: "Completed",
    themeColor: "#2563EB",
    featured: true,
    order: 3,
    media: {
      cover:
        "https://cdn.dribbble.com/userupload/16734510/file/original-f1e2b34a8a8030e12f2a83625ecac051.png?resize=752x&vertical=center",
      screenshots: [
        "/images/projects/andon/1.png",
        "/images/projects/andon/2.png",
        "/images/projects/andon/3.png",
      ],
      demo: "",
    },
    links: { playStore: "", github: "", website: "" },
    description:
      "Manufacturing monitoring application used to report machine issues and monitor repair progress in real time to improve production efficiency.",
    tasks: [
      "Developed Main Dashboard",
      "Implemented Barcode Scanner feature",
      "Built Machine Detail page",
      "Developed Machine Status page",
      "Implemented Running & On Progress monitoring",
    ],
    implementations: [
      "REST API Integration",
      "Firebase Integration",
      "Barcode Scanner Integration",
      "UI Slicing from Figma",
      "Responsive UI Development",
      "Navigation & Routing",
    ],
    technologies: ["Flutter", "Dart", "REST API", "Firebase"],
    stateManagement: "GetX",
  },
];

export const getProject = (id) => projects.find((p) => p.id === id);
