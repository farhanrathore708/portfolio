export type ProjectCategory =
  | "Brand Identity"
  | "UI/UX"
  | "Social Media"
  | "Digital Art";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Aurora — Rebrand & Identity",
    category: "Brand Identity",
    imageUrl: "https://picsum.photos/seed/aurora-brand/900/675",
  },
  {
    id: 2,
    title: "FinFlow — Analytics Dashboard",
    category: "UI/UX",
    imageUrl: "https://picsum.photos/seed/finflow-ui/900/675",
  },
  {
    id: 3,
    title: "Neon Threads — Launch Campaign",
    category: "Social Media",
    imageUrl: "https://picsum.photos/seed/neon-threads/900/675",
  },
  {
    id: 4,
    title: "Kaffa Coffee Co. — Packaging",
    category: "Brand Identity",
    imageUrl: "https://picsum.photos/seed/kaffa-coffee/900/675",
  },
  {
    id: 5,
    title: "Verse — Reading App Redesign",
    category: "UI/UX",
    imageUrl: "https://picsum.photos/seed/verse-app/900/675",
  },
  {
    id: 6,
    title: "Bloom — Festival Poster Series",
    category: "Digital Art",
    imageUrl: "https://picsum.photos/seed/bloom-poster/900/675",
  },
];
