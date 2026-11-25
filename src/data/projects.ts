import { siteConfig } from "@/config/site";
import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "energy-dashboard",
    questNumber: 1,
    title: "WA Energy Emissions & Forecasting Dashboard",
    tagline: "Turning a decade of grid data into forecasts you can act on.",
    category: "Data / Machine Learning",
    icon: "energy",
    description:
      "An interactive dashboard for exploring Western Australia's electricity generation, emissions and electricity demand trends from 2013–2024, combining historical analysis with machine-learning forecasts.",
    features: [
      "Real-time filtering across a decade of generation and demand data",
      "Dynamic visualisations of generation mix and emissions trends",
      "ML models forecasting carbon intensity from seasonal, temporal and weather-based signals",
      "Scenario simulation tools for modelling changes in energy generation",
      "SHAP feature-importance analysis to explain model predictions",
    ],
    tech: ["Streamlit", "Python", "Pandas", "Matplotlib", "Scikit-learn", "SHAP"],
    githubUrl: siteConfig.projectLinks.energyDashboard.github,
    demoUrl: siteConfig.projectLinks.energyDashboard.demo,
    caseStudy: {
      problem:
        "WA's electricity market publishes generation, demand and emissions data across many disconnected sources. Understanding trends, let alone forecasting them, meant manually wrangling years of records before any analysis could start.",
      approach:
        "Consolidated 2013–2024 generation, demand and emissions data into a single Streamlit application. Built filtering and visualisation layers first so the raw trends were explorable, then layered supervised learning models on top to forecast carbon intensity using seasonal, temporal and weather-based features.",
      tools: ["Streamlit", "Python", "Pandas", "Matplotlib", "Scikit-learn", "SHAP"],
      challenges: [
        "Cleaning and aligning multi-year time-series data from disparate formats",
        "Selecting seasonal, temporal and weather-based features that meaningfully predict carbon intensity",
        "Keeping scenario-simulation and forecasting interactions responsive inside Streamlit's rerun model",
        "Explaining model behaviour to a non-technical audience using SHAP rather than treating it as a black box",
      ],
      result:
        "A working dashboard that lets a user filter WA generation/emissions history, run forecasting models for carbon intensity, simulate scenario changes in generation mix, and inspect SHAP explanations for what's driving each prediction.",
    },
  },
  {
    id: "air-traffic-control",
    questNumber: 2,
    title: "Multithreaded Air Traffic Control Simulator",
    tagline: "Concurrent aircraft, real airport pressure, zero deadlocks.",
    category: "Software Architecture / Concurrency",
    icon: "radar",
    description:
      "A real-time air traffic simulation managing concurrent aircraft and airport states, built to explore producer-consumer concurrency and thread-safe design under continuous load.",
    features: [
      "Producer-consumer architecture for asynchronous flight requests",
      "BlockingQueues coordinating aircraft and airport state",
      "Thread pools handling variable-duration plane servicing",
      "Locking strategies designed explicitly to avoid deadlocks",
      "Responsive JavaFX interface refreshing at a minimum of 10Hz while background processing continues",
    ],
    tech: ["Java", "JavaFX", "Concurrency", "Design Patterns"],
    githubUrl: siteConfig.projectLinks.airTrafficControl.github,
    demoUrl: siteConfig.projectLinks.airTrafficControl.demo,
    caseStudy: {
      problem:
        "Air traffic systems have to manage many aircraft requesting runway and gate resources concurrently, with servicing times that vary per aircraft. A naive single-threaded simulation can't represent that pressure or reveal the concurrency bugs a real system would face.",
      approach:
        "Modelled flights as asynchronous requests flowing through a producer-consumer pipeline. Used BlockingQueues to decouple aircraft producers from airport-resource consumers, and thread pools to service aircraft with variable-duration handling, while keeping the JavaFX UI on its own thread so it stayed responsive.",
      tools: ["Java", "JavaFX", "java.util.concurrent (BlockingQueue, ExecutorService)", "Design patterns (producer-consumer, thread pool)"],
      challenges: [
        "Designing locking strategies that prevented deadlocks under concurrent access to shared airport state",
        "Guaranteeing thread safety without serialising the whole simulation and losing concurrency",
        "Keeping the JavaFX UI refreshing at a minimum of 10Hz while background threads continued servicing aircraft",
        "Coordinating variable-duration servicing times without starving other queued aircraft",
      ],
      result:
        "A functioning simulator that services concurrent aircraft requests through a thread-safe producer-consumer pipeline, with a JavaFX interface that stays responsive and updates in real time as background threads process flights.",
    },
  },
  {
    id: "focuspal",
    questNumber: 3,
    title: "FocusPal Chrome Extension",
    tagline: "A pixel-simple Pomodoro companion that blocks the noise.",
    category: "Product / Frontend",
    icon: "focus",
    description:
      "A Pomodoro-style productivity Chrome extension designed to improve study focus through timed work sessions, automatic breaks and distraction blocking.",
    features: [
      "Distracting-site blocking during focus sessions",
      "Study and break timers with automatic break-mode transitions",
      "Streak tracking to encourage consistent use",
      "Persistent preferences via the Chrome Storage API",
      "Responsive popup UI with dynamic content updates",
    ],
    tech: ["JavaScript", "HTML", "CSS", "Chrome Storage API"],
    githubUrl: siteConfig.projectLinks.focusPal.github,
    demoUrl: siteConfig.projectLinks.focusPal.demo,
    caseStudy: {
      problem:
        "Existing Pomodoro tools rarely address the actual distraction: the browser tab. Timers alone don't stop a study session from dissolving into fifteen open tabs.",
      approach:
        "Built a Chrome extension combining a Pomodoro-style timer with active site blocking, so focus sessions and distraction control live in the same tool. Used the Chrome Storage API to persist timer state, streaks and preferences across sessions.",
      tools: ["JavaScript", "HTML", "CSS", "Chrome Extension APIs", "Chrome Storage API"],
      challenges: [
        "Managing automatic transitions between study and break modes without user intervention",
        "Persisting timers, streaks and preferences reliably across browser restarts using Chrome Storage",
        "Keeping the popup UI responsive and updating dynamically as timer state changes",
        "Blocking distracting sites cleanly without breaking normal browsing outside of focus sessions",
      ],
      result:
        "A working Chrome extension that runs Pomodoro-style study and break cycles, blocks distracting sites during focus time, and tracks streaks with preferences persisted locally via Chrome Storage.",
    },
  },
  {
    id: "icms",
    questNumber: 4,
    title: "ICMS: Integrated Capstone Management System",
    tagline: "A 7-person team capstone, run in agile sprints for a real client.",
    category: "Full-Stack / Web App",
    icon: "layers",
    description:
      "A full-stack system that replaces spreadsheets and email chains for running a university capstone unit, built over four two-to-three-week sprints by a 7-person team for a real client. My part was the student-facing side: applying to a round, ranking project preferences, and seeing allocation results, on top of the shared ASP.NET Core / EF Core data model the team built together.",
    features: [
      "Student dashboard showing enrolled rounds, application status and CV uploads",
      "Project-preference ranking flow, scoped to whichever round is currently open",
      "Group allocation view showing proposed groups, supervisors and members",
      "EF Core delete rules verified with an automated model test, not just read off the migration code",
      "Delivered in agile sprints with a demo to the client at the end of each one",
    ],
    tech: ["Nuxt", "Vue", "TypeScript", "ASP.NET Core", "EF Core", "PostgreSQL", "Vercel", "Railway"],
    githubUrl: siteConfig.projectLinks.icms.github,
    demoUrl: siteConfig.projectLinks.icms.demo,
    caseStudy: {
      problem:
        "A real client needed capstone admin (class lists, applications, rankings and group allocation) moved off spreadsheets and email into one system, built by a 7-person team against a fixed, two-month project timeline.",
      approach:
        "Ran the project in four sprints, each ending with a working demo to the client and supervisor, feedback captured in minutes, and open questions taken back to the client before the next sprint started rather than guessed at. Within that, I built the student dashboard, the per-round project-ranking flow, and the allocation view, all against the team's shared ASP.NET Core API and EF Core model. I also audited every foreign key touching the Application entity and wrote an automated test against the EF Core model itself to confirm the configured delete rules actually held.",
      tools: ["Nuxt", "Vue", "TypeScript", "ASP.NET Core", "EF Core", "PostgreSQL", "Agile sprints", "Client demos"],
      challenges: [
        "Projects to rank are scoped to a specific application round, not the unit as a whole, so the ranking UI had to track whichever round was currently open",
        "Keeping sprint scope realistic against client feedback that shifted priorities between demos",
        "Making the student view stay consistent with the coordinator's allocation decisions without duplicating state",
        "Proving cascade-vs-restrict delete behaviour across five linked tables without a live database, using EF Core's own model metadata instead of trusting the migration by eye",
      ],
      result:
        "A working student flow from application through ranking to allocation, delivered sprint by sprint with client sign-off along the way, plus a passing automated test proving an application can be deleted without losing other students' data, but not while a document like a CV still points to it.",
    },
  },
];
