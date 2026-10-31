/**
 * Farhan's social profiles — single source of truth used by Hero and Footer.
 *
 * Lucide removed brand icons from its set, so Behance / Instagram / LinkedIn /
 * TikTok are inline SVGs drawn to blend with Lucide's 24x24 rhythm.
 */

function BehanceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M8.84 10.83c.75-.38 1.28-1.1 1.28-2.1 0-2.19-1.62-2.73-3.55-2.73H1.5v11.94h5.22c2.14 0 4.15-1 4.15-3.42 0-1.46-.7-2.51-2.03-3.69ZM4.08 8.07h2.3c.92 0 1.62.28 1.62 1.24 0 .9-.63 1.28-1.5 1.28h-2.4V8.07Zm2.52 7.8H4.08v-3h2.58c1.05 0 1.72.47 1.72 1.55 0 1.1-.83 1.45-1.78 1.45Zm12.34-8.02h-5.66v1.53h5.66V7.85ZM17.5 8.8c-3 0-4.9 2.08-4.9 5 0 3.04 1.85 5 4.9 5 2.28 0 3.93-1.16 4.53-3.4h-2.3c-.2.75-1 1.3-2.1 1.3-1.58 0-2.28-.93-2.28-2.4h6.76c.17-3.14-1.53-5.5-4.61-5.5Zm-2.1 4.1c.02-1.13.87-2 2.03-2 1.23 0 1.87.75 2 2h-4.03Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.53.02C13.84 0 15.14.71 15.76 1.91c.53 1.01 1.3 1.9 2.24 2.56.91.65 2.03 1.02 3.2 1.03v3.07c-1.5.03-2.99-.44-4.23-1.29-.38-.26-.73-.56-1.03-.89v6.13c0 3.31-2.55 6.16-5.85 6.4-2.55.19-5.05-1.14-6.29-3.38-.53-.99-.74-2.12-.63-3.22.24-2.4 2.16-4.4 4.55-4.78.66-.1 1.33-.08 1.97.05v3.15c-.4-.13-.82-.17-1.24-.09-1.31.24-2.2 1.5-1.97 2.81.19 1.1 1.16 1.94 2.27 1.99 1.31.07 2.42-1.02 2.42-2.33V5.62c.02-.19.02-.39.02-.58Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.116-.199.058-.371-.058-.52-.116-.148-.058-.371-.058-.52 0-.148-.058-.371-.058-.52 0-.148.058-.371.058-.52 0-.148-.174-.52-.347-.694-.173-.173-.058-.52.058-.694.116-.173.232-.347.347-.52.116-.173.29-.199.449-.24.28-.075.558-.075.857-.075.297 0 .644.058.892.232.247.173.545.371.792.619.247.247.495.52.692.767.198.247.419.462.641.62.222.157.438.284.653.379.214.095.429.102.644.057.215-.044.406-.114.574-.21.168-.097.308-.203.42-.318.113-.114.203-.24.27-.379.067-.138.1-.28.1-.425 0-.145-.05-.28-.15-.399-.1-.119-.227-.21-.38-.27-.153-.058-.31-.08-.468-.06-.166.02-.294.078-.385.172-.09.095-.135.2-.135.303 0 .103.05.197.15.28.099.083.222.148.368.194.146.046.297.07.45.07.155 0 .282-.04.38-.12.098-.08.147-.186.147-.32 0-.132-.05-.24-.147-.32-.098-.078-.223-.13-.37-.153-.148-.022-.3-.03-.46-.03M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.057 22l5.3-1.39c1.45.79 3.08 1.21 4.73 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67c2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24z" />
    </svg>
  );
}

export interface Social {
  label: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const whatsappIcon = WhatsappIcon;

export const socials: Social[] = [
  {
    label: "Behance",
    href: "https://www.behance.net/farhanrathore",
    Icon: BehanceIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/farhanvisual.1",
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@farhanvisual.1",
    Icon: TikTokIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/farhan-rathore-71b4ab36a",
    Icon: LinkedinIcon,
  },
];
