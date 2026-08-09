import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    gameLabel: "Spellbook",
    icon: "scroll",
    items: [
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "Kotlin" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Technologies",
    gameLabel: "Toolbelt",
    icon: "wrench",
    items: [
      { name: "Git" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "Firebase" },
      { name: "Linux / Unix" },
      { name: "CI/CD" },
      { name: "DevOps" },
      { name: "React Native" },
      { name: "Streamlit" },
    ],
  },
  {
    id: "data-ml",
    label: "Data & Machine Learning",
    gameLabel: "Alchemy Lab",
    icon: "flask",
    items: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Scikit-learn" },
      { name: "SHAP" },
    ],
  },
  {
    id: "other",
    label: "Other",
    gameLabel: "Relics",
    icon: "gem",
    items: [
      { name: "iOS / Android App Development" },
      { name: "Agile Methodology" },
      { name: "GraphViz" },
    ],
  },
];
