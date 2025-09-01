import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Nabil",
  lastName: "Najmudin",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Backend Engineer | Machine Learning Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nabiilNajm26",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nabil-najmudin/",
  },
  //   {
  //     name: "X",
  //     icon: "x",
  //     link: "",
  //   },
  {
    name: "Email",
    icon: "email",
    link: "mailto:nabil.najmudin10@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Backend & Machine Learning Engineer</>,
  subline: (
    <>
      I'm Nabil, currently building enterprise-grade systems as a Backend Engineer at{" "}
      <InlineCode>BSI Universitas Islam Indonesia</InlineCode>, where I've developed 
      140+ APIs and architected AI-powered automation workflows. I also work as a 
      Machine Learning Engineer at{" "}
      <InlineCode>Center of Data Science UII</InlineCode>, contributing to 
      production ML systems for global FMCG clients like Nestlé. With expertise in 
      Go, Laravel, Python, and distributed systems, I'm passionate about creating 
      scalable solutions that bridge academic research with real-world impact.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Nabil is a Yogyakarta-based Backend and Machine Learning Engineer with a proven 
        track record in enterprise software development and AI solutions. Currently pursuing 
        his Bachelor's in Informatics at UII (GPA: 3.82/4.00), he has published research in 
        SINTA 2 journals and presented at international conferences like ACCV 2024. 
        His expertise spans from building microservices architectures and distributed systems 
        to developing production-ready ML models for retail optimization. Nabil combines 
        strong technical skills in Go, Laravel, Python, and cloud technologies with a 
        data-driven approach to solve complex business challenges.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Badan Sistem Informasi UII",
        timeframe: "Jan 2025 - Present",
        role: "Backend Engineer → Fullstack Engineer",
        achievements: [
          <>
            Led backend development for Enterprise Architecture platform supporting entire 
            university ecosystem, implementing <InlineCode>140+ APIs</InlineCode> for core functionalities
          </>,
          <>
            Designed complete database architecture with 41 tables, 48 foreign keys, and 
            150+ optimized indexes, achieving <InlineCode>40% query performance improvement</InlineCode>
          </>,
          <>
            Executed Organizations v1→v2.2 database migration using compatibility VIEWs and 
            zero-downtime strategy with feature flags and adapter patterns
          </>,
          <>
            Built AI-powered business process workflow automation integrating Gemini AI & 
            OpenAI API, reducing process documentation from days to <InlineCode>120-second generation</InlineCode>
          </>,
          <>
            Developed multi-tenant security layer using custom header-based authentication, 
            adopted as best practice for Laravel/Lumen projects by PMO
          </>,
          <>
            Expanded to fullstack role (June 2025), developing 12 Angular components for 
            business process management and application catalog interfaces
          </>,
        ],
        images: [],
      },
      {
        company: "Center of Data Science UII",
        timeframe: "Feb 2023 - Present",
        role: "Machine Learning Engineer",
        achievements: [
          <>
            Contributed to end-to-end ML project for <InlineCode>Nestlé (global FMCG client)</InlineCode>, 
            developing On-Shelf Availability detection system deployed across Indonesian retail channels
          </>,
          <>
            Built automated preprocessing & annotation pipelines for <InlineCode>10,000+ retail images</InlineCode> across 
            506 classes, integrating MobileNetV3 optimization — reducing data preparation time by 60%
          </>,
          <>
            Invited to <InlineCode>CV4DC hosted by ACCV 2024</InlineCode> in Hanoi, Vietnam to present research paper
          </>,
          <>
            Co-authored SINTA 2 publication on "YOLO-based Small-scaled Model for On-Shelf 
            Availability in Retail" while delivering production-ready ML solutions
          </>,
          <>
            Designed and integrated UI/UX for mobile app using YOLO-based detection, 
            bridging academic research with enterprise deployment needs
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-03/cover-02.png",
            alt: "YOLO-based Model for On-Shelf Availability",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "SmartFarma Indonesia",
        timeframe: "Aug 2022 - Sep 2023",
        role: "AI Developer",
        achievements: [
          <>
            Developed AI chatbot with <InlineCode>150+ symptom patterns</InlineCode>, achieving 81.54% accuracy 
            and outperforming benchmarks like GPT-3 and biomedical-ner models
          </>,
          <>
            Improved diagnostic accuracy and reduced errors by <InlineCode>40%</InlineCode> through 
            rigorous testing and refined regular expressions
          </>,
          <>
            Collaborated with pharmacists to validate chatbot effectiveness in symptom 
            identification, enhancing user trust and adoption
          </>,
        ],
        images: [],
      },
      {
        company: "Student Staff Teknik Kimia UII",
        timeframe: "Feb 2023 - Present",
        role: "WordPress Developer",
        achievements: [
          <>
            Managed Chemical Engineering Department website, optimizing user experience 
            and ensuring updated content for recruitment
          </>,
          <>
            Posted <InlineCode>40+ announcements</InlineCode> and implemented design improvements 
            to boost user engagement
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Universitas Islam Indonesia",
        description: (
          <>
            Bachelor's Degree in Informatics (2021 - Present) • <InlineCode>GPA: 3.82/4.00</InlineCode>
            <br />
            Research: YOLO-based Small-scaled Model for On-Shelf Availability in Retail (Published in Jurnal Resti, SINTA 2)
            <br />
            Laboratory Assistant: Logic Programming & Fundamentals of Application Development
            <br />
            Assistant Lecturer: Fundamentals of Informatics, Indonesian for Scientific Communication, Arabic
          </>
        ),
      },
      {
        name: "PT. Dibimbing Digital Indonesia",
        description: (
          <>
            Data Engineering Bootcamp Batch 5 (Mar - July 2024)
            <br />
            Completed bootcamp covering GIT, SQL, ETL, and Big Data
            <br />
            <InlineCode>Ranked 1st with 94.6 post-test average</InlineCode>
          </>
        ),
      },
      {
        name: "Bangkit Academy 2024 by Google, GoTo, Traveloka",
        description: (
          <>
            Machine Learning Learning Path (Jan - July 2024)
            <br />
            Participated in structured curriculum with workshops, projects, and collaborative learning
            <br />
            Led by industry experts from Google, Tokopedia, Gojek, & Traveloka
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills & Achievements",
    skills: [
      {
        title: "Backend Development",
        description: (
          <>
            <strong>Languages:</strong> Go (Fiber, Gin), PHP (Laravel/Lumen 8.x), Python, TypeScript
            <br />
            <strong>Databases:</strong> MySQL, PostgreSQL, Redis
            <br />
            <strong>DevOps:</strong> Docker, Kubernetes, GitLab CI/CD, Git
            <br />
            <strong>APIs:</strong> RESTful APIs, Postman, Swagger/OpenAPI, WebSocket
          </>
        ),
        images: [],
      },
      {
        title: "Machine Learning & AI",
        description: (
          <>
            <strong>Frameworks:</strong> TensorFlow 1&2, TFLite, Keras, PyTorch
            <br />
            <strong>Libraries:</strong> NumPy, Pandas, Scikit-learn, OpenCV
            <br />
            <strong>Tools:</strong> LabelImg, CVAT, Label Studio, Protocol Buffers
            <br />
            <strong>APIs:</strong> Gemini AI, OpenAI API integration
          </>
        ),
        images: [],
      },
      {
        title: "Achievements & Publications",
        description: (
          <>
            • <strong>ACCV Computer Vision for Developing Countries (CV4DC) 2024</strong> - International Workshop Presenter, Hanoi, Vietnam
            <br />
            • <strong>1st Place Informatics Expo 2022</strong> - Universitas Islam Indonesia
            <br />
            • <strong>Big Data Challenge Semifinalist</strong> - SATRIA DATA 2023 (National Competition)
            <br />
            • <strong>PPK Ormawa Recipient</strong> - Ministry of Education Program
            <br />
            • <strong>Published Research:</strong> "YOLO-based Small-scaled Model for On-Shelf Availability in Retail" (SINTA 2 Journal)
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
