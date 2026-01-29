export enum SkillNames {
  PYTHON = "python",
  NUMPY = "numpy",
  PANDAS = "pandas",
  SEABORN = "seaborn",
  MATPLOTLIB = "matplotlib",
  SCIKITLEARN = "scikit-learn",
  TENSORFLOW = "tensorflow",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  STREAMLIT = "streamlit",
  EXCEL = "excel",
  POWERBI = "powerbi",
  TAILWINDCSS = "tailwind",
  NODEJS = "nodejs",
  MYSQL = "mysql",
  MONGODB = "mongodb",
  PYTORCH = "pytorch",
  JAVA = "java",
  AWS = "aws",
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
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "The snake that runs the world! �✨",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.NUMPY]: {
    id: 2,
    name: "numpy",
    label: "NumPy",
    shortDescription: "Number crunching at light speed! �⚡",
    color: "#013243",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.PANDAS]: {
    id: 3,
    name: "pandas",
    label: "Pandas",
    shortDescription: "Data manipulation wizardry! ��",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.SEABORN]: {
    id: 4,
    name: "seaborn",
    label: "Seaborn",
    shortDescription: "Making data look sexy! 📈✨",
    color: "#7db0bc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/seaborn/seaborn-original.svg",
  },
  [SkillNames.MATPLOTLIB]: {
    id: 5,
    name: "matplotlib",
    label: "Matplotlib",
    shortDescription: "The grandfather of plotting! ��",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
  },
  [SkillNames.SCIKITLEARN]: {
    id: 6,
    name: "scikit-learn",
    label: "Scikit-Learn",
    shortDescription: "Machine Learning made easy! 🤖🧠",
    color: "#f7931e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },
  [SkillNames.TENSORFLOW]: {
    id: 7,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Deep learning powerhouse! 🧠�",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.GIT]: {
    id: 9,
    name: "git",
    label: "Git",
    shortDescription: "The code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 10,
    name: "github",
    label: "GitHub",
    shortDescription: "Sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 11,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.JS]: {
    id: 13,
    name: "js",
    label: "JavaScript",
    shortDescription: "The language that makes the web dance! 💃🌐",
    color: "#f7df1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 14,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript with superpowers! 🦸‍♂️💪",
    color: "#3178c6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 15,
    name: "html",
    label: "HTML",
    shortDescription: "The skeleton of the web! 🦴🌍",
    color: "#e34f26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 16,
    name: "css",
    label: "CSS",
    shortDescription: "Making the web look fabulous! 💅✨",
    color: "#1572b6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.STREAMLIT]: {
    id: 17,
    name: "streamlit",
    label: "Streamlit",
    shortDescription: "Turning data scripts into apps in a flash! ⚡📊",
    color: "#ff4b4b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
  },
  [SkillNames.EXCEL]: {
    id: 18,
    name: "excel",
    label: "Excel",
    shortDescription: "Spreadsheet wizardry at its finest! 📈🧙‍♂️",
    color: "#217346",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/excel/excel-original.svg",
  },
  [SkillNames.POWERBI]: {
    id: 19,
    name: "powerbi",
    label: "Power BI",
    shortDescription: "Visualizing data like a boss! 📊👑",
    color: "#f2c811",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-plain.svg",
  },
  [SkillNames.TAILWINDCSS]: {
    id: 20,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Utility-first CSS that flies! 🛩️🎨",
    color: "#06b6d4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 21,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript on the server side! 🚀🖥️",
    color: "#339933",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 22,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Relational database reliability! 🗄️🔒",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 23,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL flexibility unleashed! 🍃💾",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.PYTORCH]: {
    id: 24,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Deep learning on fire! 🔥🧠",
    color: "#ee4c2c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 25,
    name: "java",
    label: "Java",
    shortDescription: "Write once, run anywhere! ☕🌍",
    color: "#ed8b00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.AWS]: {
    id: 26,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud computing powerhouse! ☁️⚡",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2025",
    endDate: "Present",
    title: "Machine Learning Intern",
    company: "EngiNow",
    description: [
      "Aspiring AI/ML and Software Developer with strong foundations in Python, machine learning, and data-driven problem solving.",
      "Experience building real-world projects including ML-powered systems, automation tools, and interactive web applications.",
      "Actively participate in hackathons and coding challenges, focusing on rapid prototyping, teamwork, and practical implementation.",
      "Passionate about continuous learning, scalable system design, and creating technology with real user impact.",
      "Key Skills: Python • Machine Learning • Data Structures & Algorithms • APIs • Automation • Model Building",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.NUMPY,
      SkillNames.PANDAS,
      SkillNames.MATPLOTLIB,
      SkillNames.SCIKITLEARN,
      SkillNames.TENSORFLOW,
      SkillNames.GIT,
    ],
  },
];


