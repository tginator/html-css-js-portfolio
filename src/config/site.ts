/**
 * Central configuration for external links and site-wide constants.
 * Update URLs here — nothing else in the codebase should hardcode them.
 */
export const siteConfig = {
  name: "Tyler Gabriel Gordon",
  shortName: "Tyler Gordon",
  title: "Tyler.dev — Tyler's Dev Quest",
  role: "Final-Year Software Engineering Student",
  university: "Curtin University",
  domain: "https://tyler-gordon.com",

  email: "gordontyler11@outlook.com",

  links: {
    github: "https://github.com/tginator",
    linkedin: "https://linkedin.com/in/tylergabrielgordon",
    resume: "/resume/Tyler-Gordon-Resume.pdf",
  },

  // Per-project links. Fill in `demo` when a live deployment exists —
  // leave `null` and the UI will simply omit the "Live Demo" button.
  projectLinks: {
    energyDashboard: {
      github: "https://github.com/tginator/EnergyInsightDashboard",
      demo: null as string | null,
    },
    airTrafficControl: {
      github: "https://github.com/tginator/CrudeAirTrafficSimulator",
      demo: null as string | null,
    },
    focusPal: {
      github: "https://github.com/tginator/FocusPal",
      demo: null as string | null,
    },
  },
} as const;
