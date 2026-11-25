/**
 * Central configuration for external links and site-wide constants.
 * Update URLs here. Nothing else in the codebase should hardcode them.
 */
export const siteConfig = {
  name: "Tyler Gabriel Gordon",
  shortName: "Tyler Gordon",
  title: "Tyler.dev | Tyler's Dev Quest",
  role: "Software Engineering Graduate",
  university: "Curtin University",
  domain: "https://tginator.github.io/html-css-js-portfolio",

  email: "gordontyler11@outlook.com",

  links: {
    github: "https://github.com/tginator",
    linkedin: "https://linkedin.com/in/tylergabrielgordon",
    // BASE_URL keeps this correct whether the site is served from a domain
    // root or from a GitHub Pages project subpath.
    resume: import.meta.env.BASE_URL + "resume/Tyler-Gordon-Resume.pdf",
  },

  // Per-project links. Fill in `demo` when a live deployment exists;
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
    icms: {
      github: null as string | null,
      demo: "https://icms-frontend-psi.vercel.app" as string | null,
    },
  },
} as const;
