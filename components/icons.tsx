import type { SVGProps } from "react";

type Icon = (props: SVGProps<SVGSVGElement>) => React.ReactElement;

const make = (path: React.ReactNode, viewBox = "0 0 24 24"): Icon =>
  function I(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        {...props}
      >
        {path}
      </svg>
    );
  };

export const ArrowRight = make(<path d="M5 12h14M13 6l6 6-6 6" />);
export const ArrowLeft = make(<path d="M19 12H5M11 6l-6 6 6 6" />);
export const ChevronDown = make(<path d="M6 9l6 6 6-6" />);
export const Menu = make(<path d="M4 6h16M4 12h16M4 18h16" />);
export const X = make(<path d="M6 6l12 12M18 6L6 18" />);
export const Check = make(<path d="M5 12l5 5L20 7" />);
export const Play = make(
  <polygon points="6,4 20,12 6,20" fill="currentColor" stroke="none" />,
);

// Industrial / feature icons
export const Wrench = make(
  <>
    <path d="M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.5 2.5-2.5-2.5z" />
  </>,
);
export const Clock = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>,
);
export const Box = make(
  <>
    <path d="M3 7l9-4 9 4-9 4-9-4z" />
    <path d="M3 7v10l9 4 9-4V7" />
    <path d="M12 11v10" />
  </>,
);
export const ChartBars = make(
  <>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </>,
);
export const Target = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </>,
);
export const Bolt = make(
  <path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" fill="currentColor" stroke="none" />,
);
export const Shield = make(
  <>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </>,
);
export const Eye = make(
  <>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </>,
);
export const Cpu = make(
  <>
    <rect x="6" y="6" width="12" height="12" rx="1" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
  </>,
);
export const HardHat = make(
  <>
    <path d="M3 17h18v3H3z" />
    <path d="M5 17v-3a7 7 0 0 1 14 0v3" />
    <path d="M10 8V5h4v3" />
  </>,
);
export const Forklift = make(
  <>
    <path d="M2 16h11" />
    <circle cx="6" cy="19" r="2" />
    <circle cx="14" cy="19" r="2" />
    <path d="M2 6h6l3 6h2v4M16 4v12M16 8h4" />
  </>,
);
export const Building = make(
  <>
    <path d="M3 21h18M5 21V5l7-2 7 2v16" />
    <path d="M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2" />
  </>,
);
export const RoboticArm = make(
  <>
    <circle cx="6" cy="20" r="2" />
    <path d="M6 18V12l5-3 4 3v3l4 3" />
    <rect x="13" y="6" width="6" height="3" transform="rotate(20 16 8)" />
  </>,
);
export const Sparkle = make(
  <path
    d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"
    fill="currentColor"
    stroke="none"
  />,
);
export const Calendar = make(
  <>
    <rect x="3" y="5" width="18" height="16" rx="1" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </>,
);
export const GraduationCap = make(
  <>
    <path d="M2 9l10-4 10 4-10 4-10-4z" />
    <path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
  </>,
);
export const Phone = make(
  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
);
export const Mail = make(
  <>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="M3 7l9 6 9-6" />
  </>,
);
export const MapPin = make(
  <>
    <path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </>,
);
export const Quote = make(
  <path
    d="M7 7H3v6h4l-2 4h3l3-4V7zm10 0h-4v6h4l-2 4h3l3-4V7z"
    fill="currentColor"
    stroke="none"
  />,
);

// Brand-aligned tile icons (filled with current orange tone via stroke)
export const Beaker = make(
  <>
    <path d="M9 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V3" />
    <path d="M8 3h8" />
  </>,
);

export const PlayCircle = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
  </>,
);

export const Download = make(
  <>
    <path d="M12 4v12M6 10l6 6 6-6M4 20h16" />
  </>,
);

export const Linkedin = make(
  <>
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v4" />
  </>,
);

export const Youtube = make(
  <>
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <polygon points="11,9 16,12 11,15" fill="currentColor" stroke="none" />
  </>,
);

export const TwitterX = make(
  <path
    d="M4 4l16 16M20 4L4 20"
    strokeWidth="2"
  />,
);
