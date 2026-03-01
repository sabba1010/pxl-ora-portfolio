export enum SkillNames {
  WORDPRESS = "wordpress",
  SHOPIFY = "shopify",
  CUSTOM_WEB = "custom_web",
  GRAPHIC_DESIGN = "graphic_design",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  MONGODB = "mongodb",
  POSTGRES = "postgres",
  JS = "js",
  TS = "ts",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.WORDPRESS]: {
    id: 1,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "Crafting beautiful, scalable, and easy-to-manage websites using the world's most popular CMS. 🌐✨",
    color: "#21759b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.SHOPIFY]: {
    id: 2,
    name: "shopify",
    label: "Shopify",
    shortDescription: "Building high-converting e-commerce stores that drive sales and elevate your brand. 🛍️🚀",
    color: "#95bf47",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg",
  },
  [SkillNames.CUSTOM_WEB]: {
    id: 3,
    name: "custom_web",
    label: "Custom Web Development",
    shortDescription: "Tailor-made web solutions built with modern frameworks for ultimate performance and flexibility. 💻🔥",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.GRAPHIC_DESIGN]: {
    id: 4,
    name: "graphic_design",
    label: "Graphic Design",
    shortDescription: "Stunning visual identities and marketing materials that capture your brand's essence. 🎨🖌️",
    color: "#ff61f6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Building interactive and dynamic user interfaces with the most powerful frontend library.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "The React framework for production, offering SSR and static generation for peak performance.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Rapid UI development with utility-first CSS for sleek and responsive designs.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Scalable backend solutions powered by JavaScript for high-performance applications.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 9,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Flexible and scalable NoSQL database solutions for modern data-driven applications.",
    color: "#47adb5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 10,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Advanced open-source relational database for robust and reliable data management.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.JS]: {
    id: 11,
    name: "js",
    label: "JavaScript",
    shortDescription: "The logic behind the modern web, creating interactive experiences for every user.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 12,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Bringing type safety and enhanced developer experience to JavaScript projects.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

