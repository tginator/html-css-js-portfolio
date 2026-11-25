import type { ExperienceEntry, SideQuest } from "./types";

export const experience: ExperienceEntry[] = [
  {
    id: "crown-resorts",
    role: "Banquets Waiter",
    organisation: "Crown Resorts",
    period: "August 2023 – Present",
    bullets: [
      "Delivered high-quality service for large-scale corporate and private events, including functions of 100+ guests",
      "Communicated clearly under pressure across kitchen, floor and event-management teams",
      "Adapted quickly to changing event requirements and last-minute logistics",
      "Managed time across multiple concurrent service tasks to consistent deadlines",
    ],
    transferableValue:
      "Not a software role, but it built the communication, adaptability and stakeholder-facing habits that carry directly into collaborative engineering work: staying composed under pressure, coordinating with a team, and keeping people satisfied with the outcome.",
  },
  {
    id: "costa-logistics",
    role: "Warehouse Operator",
    organisation: "Costa Logistics",
    period: "January 2022 – August 2023",
    bullets: [
      "Picked and packed orders in a fast-paced cold-storage environment against daily KPIs",
      "Operated RF scanners and pallet jacks as part of daily inventory workflows",
      "Worked within inventory and data-entry systems to track stock accurately",
      "Gained exposure to basic warehouse automation technology",
    ],
    transferableValue:
      "Also not an engineering role, but it demonstrates reliability, process awareness and the ability to work effectively within existing operational systems, habits that matter just as much inside a codebase as they do on a warehouse floor.",
  },
];

export const sideQuests: SideQuest[] = [
  {
    id: "freelance-video",
    title: "Freelance Video Editor",
    period: "2022 – Present",
    bullets: [
      "Produced promotional, event and short-form social media content for clients",
      "Edited using Adobe After Effects and Blender",
      "Worked from client briefs through revisions to final delivery under deadlines",
      "Solved creative and technical problems throughout the editing process",
    ],
  },
  {
    id: "soccer",
    title: "Amateur Soccer Player",
    period: "2014 – Present",
    organisation: "Murdoch University Melville FC",
    bullets: [
      "Playing in goal-driven, team environments for over a decade",
      "Built discipline, resilience and teamwork through consistent competitive play",
    ],
  },
];
