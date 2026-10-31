export type ProjectCategory =
  | "Social Media"
  | "Thumbnail Design"
  | "Print Design"
  | "Branding";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  imageUrl: string; // Cover image for the portfolio card
  images: string[]; // Individual designs belonging to this project/category
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Social Media Posts",
    category: "Social Media",
    imageUrl: "/work/social-media-posts.jpg",
    images: [
      "/work/social-media/post-1.jpg",
      "/work/social-media/post-2.jpg",
      "/work/social-media/post-3.jpg",
      "/work/social-media/post-4.jpg",
      "/work/social-media/post-5.jpg",
      "/work/social-media/post-6.jpg",
    ],
  },
  {
    id: 2,
    title: "YouTube Thumbnails",
    category: "Thumbnail Design",
    imageUrl: "/work/youtube-thumbnails.jpg",
    images: [
      "/work/thumbnails/thumb-1.jpg",
      "/work/thumbnails/thumb-2.jpg",
      "/work/thumbnails/thumb-3.jpg",
    ],
  },
  {
    id: 3,
    title: "Banner Design",
    category: "Print Design",
    imageUrl: "/work/banner-design.jpg",
    images: [
      "/work/banners/banner-1.jpg",
      "/work/banners/banner-2.jpg",
      "/work/banners/banner-3.jpg",
      "/work/banners/banner-4.jpg",
      "/work/banners/banner-5.jpg",
      "/work/banners/banner-6.jpg",
      "/work/banners/banner-7.jpg",
      "/work/banners/banner-8.jpg",
    ],
  },
  {
    id: 4,
    title: "Visiting Card Design",
    category: "Branding",
    imageUrl: "/work/visiting-card-design.jpg",
    images: [
      "/work/visiting-cards/card-1.jpg",
      "/work/visiting-cards/card-2.jpg",
      "/work/visiting-cards/card-3.jpg",
      "/work/visiting-cards/card-4.jpg",
      "/work/visiting-cards/card-5.jpg",
      "/work/visiting-cards/card-6.jpg",
      "/work/visiting-cards/card-7.jpg",
      "/work/visiting-cards/card-8.jpg",
      "/work/visiting-cards/card-9.jpg",
    ],
  },
  {
    id: 5,
    title: "Logo Design",
    category: "Branding",
    imageUrl: "/work/logo-design.jpg",
    images: [
      "/work/logos/logo-1.jpg",
      "/work/logos/logo-2.jpg",
      "/work/logos/logo-3.jpg",
      "/work/logos/logo-4.jpg",
      "/work/logos/logo-5.jpg",
      "/work/logos/logo-6.jpg",
      "/work/logos/logo-7.jpg",
      "/work/logos/logo-8.jpg",
    ],
  },
  {
    id: 6,
    title: "Invitation & Menu Card Design",
    category: "Print Design",
    imageUrl: "/work/invitation-menu-cards.jpg",
    images: [
      "/work/invitations/card-1.jpg",
      "/work/invitations/card-2.jpg",
      "/work/invitations/card-3.jpg",
      "/work/invitations/card-4.jpg",
      "/work/invitations/card-5.jpg",
      "/work/invitations/card-6.jpg",
      "/work/invitations/card-7.jpg",
      "/work/invitations/card-8.jpg",
    ],
  },
  {
    id: 7,
    title: "Standee Design",
    category: "Print Design",
    imageUrl: "/work/standee-design.jpg",
    images: [
      "/work/standees/standee-1.jpg",
      "/work/standees/standee-2.jpg",
      "/work/standees/standee-3.jpg",
      "/work/standees/standee-4.jpg",
    ],
  },
];
