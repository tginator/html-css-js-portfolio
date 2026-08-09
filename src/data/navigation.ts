export interface NavLocation {
  id: string;
  gameLabel: string;
  plainLabel: string;
  hudLabel: string;
  description: string;
}

/**
 * Canonical list of portfolio sections. Used to drive the sticky nav,
 * the mobile menu, the world/hub map, and the terminal easter egg —
 * so every entry point into the site stays in sync.
 */
export const navLocations: NavLocation[] = [
  {
    id: "profile",
    gameLabel: "Player Profile",
    plainLabel: "About Me",
    hudLabel: "PROFILE",
    description: "Who I am and how I got into building things.",
  },
  {
    id: "quests",
    gameLabel: "Project Lab",
    plainLabel: "Projects",
    hudLabel: "QUESTS",
    description: "Selected projects, presented as engineering quests.",
  },
  {
    id: "inventory",
    gameLabel: "Skill Forge",
    plainLabel: "Technical Skills",
    hudLabel: "INVENTORY",
    description: "Languages, tools and technologies I work with.",
  },
  {
    id: "academy",
    gameLabel: "The Academy",
    plainLabel: "Education",
    hudLabel: "ACADEMY",
    description: "Curtin University — Bachelor of Computing, Software Engineering.",
  },
  {
    id: "achievements",
    gameLabel: "Achievement Hall",
    plainLabel: "Certifications",
    hudLabel: "ACHIEVEMENTS",
    description: "Certifications earned outside the classroom.",
  },
  {
    id: "log",
    gameLabel: "Quest Log",
    plainLabel: "Experience",
    hudLabel: "LOG",
    description: "My work history and what it taught me.",
  },
  {
    id: "side-quests",
    gameLabel: "Side Quests",
    plainLabel: "Interests",
    hudLabel: "SIDE QUESTS",
    description: "Video editing and soccer — life outside the codebase.",
  },
  {
    id: "contact",
    gameLabel: "Communication Portal",
    plainLabel: "Contact",
    hudLabel: "CONTACT",
    description: "Get in touch about opportunities.",
  },
];
