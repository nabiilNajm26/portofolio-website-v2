import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Nabil",
  lastName: "Najmudin",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Backend & Data Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
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
    link: "mailto:nabilbisnis121@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data & back-end engineer</>,
  subline: (
    <>
      I'm Nabil, a software developer at
      <InlineCode>
        Badan Sistem Informasi Universitas Islam Indonesia
      </InlineCode>{" "}
      , a machine learning engineer at{" "}
      <InlineCode>
        Center of Data Science Universitas Islam Indonesia
      </InlineCode>{" "}
      and wordpress developer at{" "}
      <InlineCode>
        Student Staff Teknik Kimia Universitas Islam Indonesia
      </InlineCode>
      where I work on developing machine learning models and manage content for
      the university’s Chemical Engineering department website.
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
        Nabil is a Yogyakarta-based data & backend engineer with expertise in
        building scalable systems, optimizing data pipelines, and implementing
        machine learning models for real-world applications. Passionate about
        using technology to solve practical challenges, Nabil brings a strong
        background in data engineering and backend development to create
        efficient, user-centric solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Badan Sistem Informasi UII",
        timeframe: "2024 - Present",
        role: "Software Developer",
        achievements: [
          <>
            Contributed to enhancing UII’s environment by implementing Scrum
            methodologies, DevOps practices, and microservices architecture.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Center of Data Science UII",
        timeframe: "2023 - Present",
        role: "Machine Learning & Data Engineer, UI & UX Designer",
        achievements: [
          <>
            Contributed to SINTA 2-class paper 'YOLO-based Small-scaled Model
            for On-Shelf Availability in Retail’.
          </>,
          <>
            Handled 6 models from the largest food and beverage company in the
            world, ensuring optimal performance and accuracy for each.
          </>,
          <>
            Maintaining Image Detection with CNN, Tensorflow Object Detection
            API with MobileNetV3, prepared for mobile deployment.
          </>,
          <>
            Managing annotation of 10,000+ images for robust ML model training
            in PASCAL/VOC format using LabelImg.
          </>,
          <>
            Preprocessing datasets for 27 training iterations, managing 506+
            classes.
          </>,
          <>
            Designed UI/UX for a mobile app using a YOLO-based model for retail
            shelf availability, enhancing user experience and integrating
            seamlessly with the ML model.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-03/cover-02.png",
            alt: "YOLO-based Small-scaled Model for On-Shelf Availability in Retail paper",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Smartfarma Indonesia",
        timeframe: "Aug 2022 - Sep 2023",
        role: "AI Developer",
        achievements: [
          <>
            Achieved 81.54% accuracy for SmartFarma, surpassing benchmarks like
            Chat GPT 3 and biomedical-ner-all model.
          </>,
          <>
            Crafted a chatbot system with over 150 symptom patterns,
            significantly improving diagnostic accuracy.
          </>,
          <>
            Collaborated with pharmacists to validate chatbot effectiveness in
            symptom identification, enhancing user trust and adoption.
          </>,
          <>
            Conducted rigorous testing and refined regular expressions to
            enhance chatbot capability, reducing errors by 40%.
          </>,
        ],
        images: [],
      },
      {
        company: "Student Staff Teknik Kimia UII",
        timeframe: "2023 - Present",
        role: "Wordpress Developer",
        achievements: [
          <>
            Managed the Chemical Engineering Department’s website, optimizing
            user experience and ensuring updated content for recruitment and
            information dissemination.
          </>,
          <>
            Posted 30+ announcements and news, while implementing design
            improvements to boost user engagement.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universitas Islam Indonesia",
        description: <>Bachelor of Informatics.</>,
      },
      {
        name: "Data Engineering Bootcamp Batch 5",
        description: (
          <>
            Led by PT. Dibimbing Digital Indonesia | Studied Data Engineering.
          </>
        ),
      },
      {
        name: "Bangkit Academy 2024 Batch 1",
        description: (
          <>
            Led by Google, Tokopedia, Gojek, & Traveloka | Studied Machine
            Learning.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: (
          <>Using python to do machine learning & data engineering tasks.</>
        ),
        images: [
          {
            src: "/images/projects/project-03/cover-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-04/cover-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Figma",
        description: <>Able to prototype in Figma.</>,
        images: [
          {
            src: "/images/projects/project-02/cover-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-03/cover-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-04/cover-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Laravel",
        description: <>Building apps with Laravel.</>,
        images: [
          {
            src: "/images/projects/project-02/cover-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
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
