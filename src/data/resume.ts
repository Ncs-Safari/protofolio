// ====== Types ======

export type Link = {
  label: string;
  href: string;
};

export type SubProject = {
  name: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
};

export type Experience = {
  period: string;
  company: string;
  role: string;
  type?: string;
  summary?: string;
  highlights?: string[];
  tech?: string[];
  subProjects?: SubProject[];
};

export type Project = {
  name: string;
  company?: string;
  description: string;
  tech: string[];
  links: Link[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export type SkillGroup = { category: string; items: string[] };

// ====== Data ======

export const profile = {
  name: "Eri Safari",
  title: "Software Engineer",
  subtitle: "Full Stack Developer (.NET & React)",
  tagline:
    "I build reliable web applications with C# / .NET, Go and Python on the back end, and React / Next.js on the front end.",
  about: [
    "I'm a software engineer with **over ten years** of experience building web applications for government agencies, manufacturing, automotive and energy companies. My main focus is **Go**, **Python**, **C#** and the **.NET** ecosystem on the back end, together with **React** and **Next.js** on the front end.",
    "I have worked on **geospatial information systems** for national ministries, **RFID-based goods tracking** for **Toyota Motor Manufacturing Indonesia (TMMIN)**, and backend services as a Backend Engineer at **Laku6 (Carousell Group)**, using tools such as **Redis** and **Docker**.",
    "I hold a Bachelor's degree in Information Management from **Universitas Indonesia Membangun** and an Associate degree from **Universitas Padjadjaran**.",
  ],
  email: "safari.erie@gmail.com",
  github: "https://github.com/safari05",
  resumePdf: "/Eri-Safari-Resume.pdf",
  photo: "/foto_profile_square.jpg",
  // Badge di header. Kosongkan ("") untuk menyembunyikan.
  availability: "Open to new opportunities",
};

export const experiences: Experience[] = [
  {
    period: "Oct 2024 – Present",
    company: "PT. Berlian Sistem Informasi",
    role: "Software Engineer",
    type: "Full-time",
    summary:
      "Developed and maintained web applications for client projects, covering both front-end and back-end development.",
    subProjects: [
      {
        name: "New DNet (Dealer Network)",
        period: "May 2026 – Present",
        description:
          "Migrating the legacy DNet system to a new microservice-based platform.",
        highlights: [
          "Migrated the Training Management System module from legacy DNet to New DNet.",
          "Developed **SAP integration** for Delivery Order processing.",
          "Applied **Domain-Driven Design (DDD)** to structure business logic into clear domain boundaries.",
          "Implemented **Redis caching** to improve application performance.",
        ],
        tech: [
          "C#",
          ".NET",
          "DDD",
          "Microservices",
          "Entity Framework",
          "SQL Server",
          "Redis",
          "Docker",
        ],
      },
      {
        name: "DNet (Dealer Network) – Change Request Team",
        period: "Jan 2025 – Feb 2026",
        description:
          "Developed new features and enhancements for DNet After Sales, the dealer network system of MMKSI (Mitsubishi Motors Krama Yudha Sales Indonesia).",
        highlights: [
          "Built a randomized customer satisfaction survey generator for after-sales service.",
          "Developed a global service reminder feature with automatic re-notification (**up to 3 times**) to remind customers to complete the survey.",
          "Integrated DNet with the **DMS** (Dealer Management System) for service reminder follow-up.",
          "Fixed bugs in the E-Coupon Free Service module.",
        ],
        tech: ["C#", "VB.NET", "AutoMapper", "SQL Server"],
      },
      {
        name: "Hyto – Employee Competency Assessment Module",
        period: "Oct – Dec 2024",
        description:
          "Designed and built a new competency assessment feature for the Hyto application.",
        highlights: [
          "Developed master data management for competency assessments, enabling administrators to define and maintain competency standards.",
          "Built assessment reports to give management visibility into employee competency results.",
        ],
        tech: ["C#", "ASP.NET Framework 4.5", "Dapper", "SQL Server"],
      },
    ],
  },
  {
    period: "Feb – Oct 2024",
    company: "LAPI – ITB",
    role: "Web Developer",
    type: "Part-time",
    summary:
      "Developed and maintained PROPAR (Property Asset and Recovery) for PHE SHU Pertamina.",
    highlights: [
      "Refactored code to support new enhancements.",
      "Built **asynchronous Excel import** processing.",
      "Consumed external APIs for regional data and the master structure hierarchy.",
      "Created schedulers (hourly, daily, weekly, monthly, yearly) for data updates.",
      "Collaborated with stakeholders to define project requirements and timelines.",
      "Set up virtual machines, IIS (.NET 4.8 and .NET Core 6) and Microsoft SQL Server.",
    ],
    tech: ["C#", "ASP.NET 4.8", "Entity Framework", "SQL Server", "IIS"],
  },
  {
    period: "2021 – 2024",
    company: "PT Laku6 (Carousell Group)",
    role: "Backend Developer",
    summary:
      "Built and maintained backend services for Laku6, a used-phone trade-in platform, with a focus on the Retail Buy Back (RBB) program and marketplace integrations.",
    highlights: [
      "Developed backend services for Retail Buy Back (RBB), integrating the trade-in flow with **Tokopedia** and **Blibli** so customers could sell their used phones directly from the marketplace.",
      "Built backend services for the **Samsung Trade-In** program in **Indonesia and Singapore**, including AYCT, which accepts phones in any condition, even completely dead devices.",
      "Designed and developed backend APIs using a microservices architecture and test-driven development (TDD).",
      "Built a **gRPC service in Go** (Gin) to calculate price additions and deductions, monitored with Grafana.",
      "Maintained the WhatsApp broadcast messaging feature for Maujual.com using Python and Django.",
      "Worked in an Agile team, planning and tracking sprints in Jira and collaborating with engineers, QA and product through Slack.",
    ],
    tech: ["PHP", "Symfony", "Go", "Gin", "gRPC", "Python", "Django", "Ruby", "PostgreSQL", "Grafana"],
  },
  {
    period: "2019 – 2021",
    company: "PT. Arkamaya",
    role: "Software Engineer",
    summary:
      "Built applications for **Toyota Motor Manufacturing Indonesia**, including goods tracking from vendors to TMMIN using **RFID**, following Toyota's TDK development standards.",
    tech: ["C#", "SQL Server", "RFID"],
  },
  {
    period: "2015 – 2019",
    company: "PT Virtua Internasional Pratama",
    role: "Software Engineer",
    summary:
      "Worked on government projects, mostly **Geographic Information Systems (GIS)** for geospatial information agencies.",
    tech: ["C#", "PostgreSQL", "GIS"],
  },
];

export const projects: Project[] = [
  {
    name: "PIR – Potensi Investasi Regional",
    company: "PT Virtua Internasional Pratama",
    description:
      "A geospatial information system for investment potential and opportunities across **38 provinces** and **514 regencies/cities** in Indonesia, part of the **Ministry of Investment (BKPM)** website. It covers regional profiles, demographics, commodities, income, regional minimum wage and supporting infrastructure. The PIR Admin platform manages investment and commodity data, access rights, textual data and spatial uploads (.shp).",
    tech: ["C#", "PostgreSQL", "GIS"],
    links: [
      { label: "PIR", href: "https://regionalinvestment.bkpm.go.id/pir" },
      { label: "PIR Admin", href: "https://regionalinvestment.bkpm.go.id/admin" },
    ],
  },
  {
    name: "Satu Data MUBA",
    company: "PT Sawerigading Multi Kreasi",
    description:
      "A One Data platform for the local government of Musi Banyuasin with **three access levels**: open data for the public, limited data for specific departments (OPD), and closed data for authorized personnel. Integrated with **Satu Data Indonesia (data.go.id)** for consistency across national data systems.",
    tech: ["ASP.NET Core 8", "PostgreSQL", "React", "Next.js"],
    links: [{ label: "Satu Data MUBA", href: "https://satudata.mubakab.go.id/" }],
  },
  {
    name: "Sistem Informasi Bantuan Sosial Musi Banyuasin",
    description:
      "A web application to monitor the distribution of social assistance to the people of Musi Banyuasin Regency.",
    tech: ["ASP.NET Core 3", "PostgreSQL"],
    links: [],
  },
];

export const education: Education[] = [
  {
    school: "Universitas Indonesia Membangun",
    degree: "Bachelor's Degree, Information Management",
    period: "2025 – 2026",
  },
  {
    school: "Universitas Padjadjaran",
    degree: "Associate Degree, Information Management",
    period: "2006 – 2010",
  },
];

export const courses: string[] = [
  "Laravel Development – Sanbercode (Apr – May 2021)",
  "Udemy: React & TypeScript – The Practical Guide",
  "Udemy: Microservices API Development with Hexagonal Architecture in Go – Ashish Juyal",
  "Udemy: Complete Guide to Building an App with .NET 7, React 18 (TypeScript) and MobX – Neil Cummings",
  "Udemy: Configuring a Media Server for ASP.NET Core Applications – Biswa Nath Ghosh",
  "Udemy: OOP Fundamentals Applied to C# – Zoran Horvat",
  "Udemy: Flutter & Dart – The Complete Guide – Maximilian Schwarzmüller",
];

export const certificates: string[] = ["Microsoft Technology Associate (MTA)"];

export const skills: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "C#",
      "ASP.NET",
      ".NET Core",
      "React",
      "Next.js",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "Symfony",
    ],
  },
  {
    category: "Databases",
    items: ["SQL Server", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "Tools",
    items: ["Visual Studio 2022", "VS Code", "DataGrip", "Git", "Fork"],
  },
  {
    category: "Operating Systems",
    items: ["Linux", "Windows Server"],
  },
];
