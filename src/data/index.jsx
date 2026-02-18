import { link } from "framer-motion/client";
import { 
    SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, 
    SiPostgresql, SiTailwindcss, SiFigma, SiGit, 
    SiCloudflare, SiSupabase, SiJavascript, SiPhp, SiVercel
} from "react-icons/si";

export const techIcons = [
    { icon: <SiReact size={40} />, name: "React" },
    { icon: <SiNextdotjs size={40} />, name: "Next.js" },
    { icon: <SiJavascript size={40} />, name: "JavaScript" },
    { icon: <SiTypescript size={40} />, name: "TypeScript" },
    { icon: <SiPhp size={45} />, name: "PHP" },
    { icon: <SiNodedotjs size={40} />, name: "Node.js" },
    { icon: <SiPostgresql size={40} />, name: "PostgreSQL" },
    { icon: <SiSupabase size={38} />, name: "Supabase" },
    { icon: <SiCloudflare size={45} />, name: "Cloudflare" },
    { icon: <SiVercel size={38} />, name: "Vercel" },
    { icon: <SiTailwindcss size={40} />, name: "Tailwind" },
    { icon: <SiFigma size={38} />, name: "Figma" },
    { icon: <SiGit size={40} />, name: "Git" },
];

export const experiences = [
    {
      role: "Asah 2025",
      type: "React and Back-end with AI Cohort",
      company: "Dicoding Indonesia",
      period: "AUG 2025 - JAN 2026",
      desc: "Spearheaded a full-stack Capstone Project by integrating React with AI technologies, following a rigorous intensive training program."
    },
    {
      role: "Informatics Engineering Student",
      type: "Full-time Student",
      company: "Universitas Negeri Surabaya",
      period: "AUG 2023 - PRESENT",
      desc: "Developed key academic projects such as 'EasExam' and a Library Management System, demonstrating strong problem-solving skills."
    },
    {
      role: "Web developer freelancer",
      type: "Freelance",
      company: "Pikarlabs",
      period: "JUL 2021 - OCT 2021",
      desc: "Specialized in crafting responsive Front-End architectures, while maintaining proficiency in PHP for server-side integration."
    },
    {
      role: "Web developer intern",
      type: "Internship",
      company: "Pikarlabs",
      period: "JAN 2021 - MAR 2021",
      desc: "Specialized in crafting responsive Front-End architectures, while maintaining proficiency in PHP for server-side integration."
    }
];

export const projects = [
    {
      title: "EduCheckAI",
      tech: ["React", "Node.js", "Express", "Cerebras", "Upstash", "Cloudflare", "TailwindCSS"],
      desc: "An AI-powered formative assessment platform delivering instant, personalized feedback to enhance student learning.",
      color: "from-blue-700 to-sky-500", 
      span: "md:col-span-2",
      isConfidential: true,
      note: "Internal Project. Demo restricted due to privacy."
    },
    {
      title: "OpenMusic API",
      tech: ["Node.js", "Express", "PostgreSQL", "Redis", "RabbitMQ"],
      desc: "A robust backend REST API for music management, featuring authentication, playlists, and high-performance caching.",
      color: "from-blue-500 to-cyan-500",
      span: "md:col-span-1",
      link: "https://github.com/rizzuworks/openmusic-api",
      isConfidential: false
    },
    {
      title: "Sunglaze Music Festival",
      tech: ["React", "Vite", "TailwindCSS", "Framer Motion"],
      desc: "A responsive fictional website for a music festival, showcasing event details and artist information.",
      color: "from-green-500 to-emerald-500",
      span: "md:col-span-1",
      link: "https://sunglaze-fest.pages.dev",
      isConfidential: false
    },
    {
      title: "EasExam",
      tech: ["React Native", "Supabase", "Expo", "NativeWind"],
      desc: "A secure cross-platform mobile examination app designed for a seamless and user-friendly testing experience.",
      color: "from-orange-500 to-red-500",
      span: "md:col-span-2",
      link: "https://github.com/rizzuworks/easexam",
      isConfidential: false
    }
];