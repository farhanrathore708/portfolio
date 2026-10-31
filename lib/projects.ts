export type ProjectCategory =
  | "Social Media"
  | "Thumbnail Design"
  | "Print Design"
  | "Branding";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
}

/**
 * Real projects, taken from the section headers of Farhan's portfolio PDF.
 * Each image is the actual artwork sheet extracted from the PDF
 * (kept locally in /public/work).
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "Social Media Posts",
    category: "Social Media",
    imageUrl: "/work/social-media-posts.jpg",
  },
  {
    id: 2,
    title: "YouTube Thumbnails",
    category: "Thumbnail Design",
    imageUrl: "/work/youtube-thumbnails.jpg",
  },
  {
    id: 3,
    title: "Banner Design",
    category: "Print Design",
    imageUrl: "/work/banner-design.jpg",
  },
  {
    id: 4,
    title: "Visiting Card Design",
    category: "Branding",
    imageUrl: "/work/visiting-card-design.jpg",
  },
  {
    id: 5,
    title: "Logo Design",
    category: "Branding",
    imageUrl: "/work/logo-design.jpg",
  },
  {
    id: 6,
    title: "Invitation & Menu Card Design",
    category: "Print Design",
    imageUrl: "/work/invitation-menu-cards.jpg",
  },
  {
    id: 7,
    title: "Standee Design",
    category: "Print Design",
    imageUrl: "/work/standee-design.jpg",
  },
];
