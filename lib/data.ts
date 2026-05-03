import {
  Beaker,
  RoboticArm,
  HardHat,
  Forklift,
  Calendar,
  GraduationCap,
} from "@/components/icons";

export const industries = [
  {
    id: "manufacturing",
    icon: Beaker,
    name: "Manufacturing Labs",
    blurb:
      "Precision tools and consumables for advanced manufacturing operations.",
    env: "manufacturing" as const,
    metric: "68%",
    metricLabel: "Downtime Reduction",
    summary:
      "Automated supply access cuts our tool down time by 68% and gave our crews back hours every week.",
    quote: "Operations Manager, Tier 1 Industrial Contractor",
  },
  {
    id: "robotics",
    icon: RoboticArm,
    name: "Robotics & Engineering",
    blurb:
      "Support for build, test, and innovation at every stage of development.",
    env: "robotics" as const,
    metric: "42%",
    metricLabel: "Efficiency Increase",
    summary:
      "Right tools, right place. Crews spend less time sourcing and more time building.",
    quote: "Director of Engineering, Robotics Lab",
  },
  {
    id: "construction",
    icon: HardHat,
    name: "Construction & Trades",
    blurb:
      "Rugged supplies that withstand the job and the elements.",
    env: "construction" as const,
    metric: "31%",
    metricLabel: "Hard Cost Reduction",
    summary:
      "Programmatic stocking and usage visibility delivered measurable inventory and expedited shipping savings.",
    quote: "VP Operations, Civil Construction Firm",
  },
  {
    id: "warehouses",
    icon: Forklift,
    name: "Warehouses & Logistics",
    blurb:
      "High-wear essentials that keep operations flowing.",
    env: "warehouses" as const,
    metric: "24/7",
    metricLabel: "Floor Coverage",
    summary:
      "We replaced four supply rooms with a single Iron Vein deployment. Auditable, accountable, always stocked.",
    quote: "Operations Director, 3PL Warehouse Operator",
  },
  {
    id: "events",
    icon: Calendar,
    name: "Events & Venues",
    blurb:
      "On-site essentials for production, crew, and live events.",
    env: "events" as const,
    metric: "100%",
    metricLabel: "On-Site Readiness",
    summary:
      "Stage Tools support and pred-iction tuning ensures stock-at-show shape on its dedicated pace.",
    quote: "Production Lead, National Music Festival",
  },
  {
    id: "campuses",
    icon: GraduationCap,
    name: "Campuses & Housing",
    blurb:
      "Tools and supplies for students and facility crews.",
    env: "campuses" as const,
    metric: "92%",
    metricLabel: "Student Satisfaction",
    summary:
      "Hands-on programs gained real shop access. Students self-serve. Faculty stays on instruction.",
    quote: "Engineering Faculty, R1 University",
  },
];

export type NodeKey =
  | "forge"
  | "circuit"
  | "field"
  | "shift"
  | "venue"
  | "campus";

export const nodes: Record<
  NodeKey,
  {
    name: string;
    variant: "orange" | "blue" | "green" | "red" | "purple" | "cyan";
    blurb: string;
    tagline: string;
    description: string;
    bestFor: string[];
    features: string[];
    specs: { label: string; value: string }[];
  }
> = {
  forge: {
    name: "Forge Node",
    variant: "orange",
    blurb: "Heavy-duty tools & maintenance.",
    tagline: "Heavy-duty tools and maintenance equipment.",
    description:
      "Built for industrial environments where downtime stops production. Forge Nodes carry the high-value, high-wear inventory crews need at the line, the bench, and the shop floor.",
    bestFor: [
      "Industrial Maintenance",
      "Facilities Teams",
      "MRO Operations",
      "Plant Shutdowns",
      "Heavy Equipment Crews",
    ],
    features: [
      "Built for industrial environments",
      "High-value tool security",
      "Custom stocking",
      "Usage reporting",
      "24/7 access",
    ],
    specs: [
      { label: "Dimensions", value: '79"H x 36"W x 35"D' },
      { label: "Weight", value: "820 lbs" },
      { label: "Capacity", value: "Up to 1,100 items" },
      { label: "Temperature", value: "Operating 20°F to 120°F" },
      { label: "Power", value: "120V / 15A" },
      { label: "Connectivity", value: "LTE (primary) / Ethernet" },
      { label: "Access", value: "PIN / RFID / Mobile App" },
      { label: "Security", value: "2-point lock, audit logs" },
    ],
  },
  circuit: {
    name: "Circuit Node",
    variant: "blue",
    blurb: "Electrical, test & electronics.",
    tagline: "Electrical, test, and electronics inventory.",
    description:
      "For technical teams that work with current. Circuit Nodes are calibrated for sensitive instruments, components, and cable inventory with ESD-safe cubbies and authenticated access.",
    bestFor: [
      "Electrical Contractors",
      "Test & Measurement Labs",
      "Service Technicians",
      "Electronics Manufacturing",
      "QA / Reliability",
    ],
    features: [
      "ESD-safe storage cubbies",
      "Calibrated tool checkout",
      "Component-level audit trail",
      "Cable & connector inventory",
      "Battery and charger ready",
    ],
    specs: [
      { label: "Dimensions", value: '76"H x 34"W x 32"D' },
      { label: "Weight", value: "740 lbs" },
      { label: "Capacity", value: "Up to 950 items" },
      { label: "ESD Compliant", value: "ANSI/ESD S20.20" },
      { label: "Power", value: "120V / 15A" },
      { label: "Connectivity", value: "LTE / Wi-Fi / Ethernet" },
      { label: "Access", value: "PIN / RFID / Mobile App" },
    ],
  },
  field: {
    name: "Field Node",
    variant: "green",
    blurb: "Rugged gear for any job site.",
    tagline: "Rugged gear and consumables for the field.",
    description:
      "Trailer-ready, weather-sealed, and built to take a beating. Field Nodes deploy where work happens — remote sites, mobile offices, and active job sites.",
    bestFor: [
      "Civil Construction",
      "Field Service Teams",
      "Disaster Response",
      "Energy / Utilities",
      "Forestry & Land Mgmt",
    ],
    features: [
      "Weather-sealed enclosure",
      "Trailer-mountable footprint",
      "Solar-ready power option",
      "Cellular-first connectivity",
      "Rugged shock-rated frame",
    ],
    specs: [
      { label: "Dimensions", value: '74"H x 36"W x 36"D' },
      { label: "Weight", value: "880 lbs" },
      { label: "Enclosure Rating", value: "NEMA 3R / IP54" },
      { label: "Operating Temp", value: "-10°F to 130°F" },
      { label: "Power", value: "120V or 12V/Solar option" },
      { label: "Connectivity", value: "LTE primary, satellite optional" },
    ],
  },
  shift: {
    name: "Shift Node",
    variant: "red",
    blurb: "24/7 access for round-the-clock teams.",
    tagline: "Round-the-clock access for round-the-clock teams.",
    description:
      "Built for shift work. Multi-user authentication, full-shift transaction logs, and high-throughput dispense for 1st, 2nd, and 3rd shift teams operating without supply room staff.",
    bestFor: [
      "24/7 Manufacturing",
      "Healthcare Facilities",
      "Distribution Centers",
      "Critical Infrastructure",
      "Public Safety",
    ],
    features: [
      "Multi-user shift accounts",
      "Per-shift inventory analytics",
      "Hand-off audit reports",
      "Emergency-grade lighting",
      "Temperature-monitored bays",
    ],
    specs: [
      { label: "Dimensions", value: '79"H x 36"W x 35"D' },
      { label: "Weight", value: "840 lbs" },
      { label: "Concurrent Users", value: "Unlimited (PIN / RFID)" },
      { label: "Throughput", value: "Up to 600 transactions/day" },
      { label: "Power", value: "120V / 15A + UPS option" },
      { label: "Connectivity", value: "Ethernet primary / LTE backup" },
    ],
  },
  venue: {
    name: "Venue Node",
    variant: "purple",
    blurb: "Event ops, staging & on-site support.",
    tagline: "Event operations, staging, and on-site support.",
    description:
      "Tour-ready and venue-friendly. Venue Nodes wheel into place and serve production crews, riggers, and runners for the duration of an event — then roll out clean.",
    bestFor: [
      "Touring Productions",
      "Sports & Concert Venues",
      "Convention Centers",
      "Film & TV Sets",
      "Festival Operations",
    ],
    features: [
      "Caster-mounted, road-case rated",
      "Crew check-in / check-out",
      "Restock-by-show analytics",
      "Quiet operation",
      "Branded face plate options",
    ],
    specs: [
      { label: "Dimensions", value: '76"H x 34"W x 32"D' },
      { label: "Weight", value: "720 lbs" },
      { label: "Mobility", value: "4 locking casters, fork-pocket base" },
      { label: "Noise", value: "< 35 dBA at 1m" },
      { label: "Power", value: "120V / 15A" },
      { label: "Connectivity", value: "LTE / Wi-Fi / Ethernet" },
    ],
  },
  campus: {
    name: "Campus Node",
    variant: "cyan",
    blurb: "Student labs, research & residential needs.",
    tagline: "Student labs, research, and residential needs.",
    description:
      "Engineered for higher-ed and student housing environments. Card-credentialed access, departmental cost centers, and supplies that keep teaching labs running.",
    bestFor: [
      "Engineering Schools",
      "Maker Spaces",
      "Research Facilities",
      "Student Housing",
      "Campus Facilities",
    ],
    features: [
      "Student ID integration",
      "Departmental cost-center billing",
      "Faculty admin overrides",
      "Quiet, classroom-friendly",
      "ADA-accessible interface",
    ],
    specs: [
      { label: "Dimensions", value: '74"H x 34"W x 32"D' },
      { label: "Weight", value: "700 lbs" },
      { label: "Access", value: "Campus card / SSO / Mobile" },
      { label: "ADA", value: "Reach-range compliant interface" },
      { label: "Power", value: "120V / 15A" },
      { label: "Connectivity", value: "Wi-Fi / Ethernet primary" },
    ],
  },
};

import type { Product } from "@/components/product-card";

export const featuredProducts: Product[] = [
  {
    id: "p-1",
    name: "Digital Caliper Kit",
    brand: "Mitutoyo Absolute",
    price: "$299.00",
    category: "test",
  },
  {
    id: "p-2",
    name: "Multimeter & Test Kit",
    brand: "Fluke 87V Max",
    price: "$629.00",
    category: "test",
  },
  {
    id: "p-3",
    name: "Borescope Inspection Cam",
    brand: "Depstech DS450",
    price: "$199.00",
    category: "test",
  },
  {
    id: "p-4",
    name: "Precision Driver Set",
    brand: "Wiha KraftForm",
    price: "$149.00",
    category: "fasteners",
  },
  {
    id: "p-5",
    name: "Fastener Assortment",
    brand: "1,400 Piece",
    price: "$69.00",
    category: "fasteners",
  },
  {
    id: "p-6",
    name: "USB-C Charger 140W",
    brand: "Anker",
    price: "$79.00",
    category: "consumables",
  },
  {
    id: "p-7",
    name: "Safety Glasses",
    brand: "Uvex S3890X",
    price: "$29.00",
    category: "safety",
  },
  {
    id: "p-8",
    name: "Hydration Pack",
    brand: "CamelBak M.U.L.E.",
    price: "$89.00",
    category: "safety",
  },
];

export const catalogProducts: Product[] = [
  ...featuredProducts,
  {
    id: "p-9",
    name: "Impact Driver Kit",
    brand: "Milwaukee M18",
    price: "$249.00",
    category: "power-tools",
  },
  {
    id: "p-10",
    name: "Tool Backpack",
    brand: "Klein Tools",
    price: "$199.00",
    category: "storage",
  },
  {
    id: "p-11",
    name: "Socket Set",
    brand: 'TEKTON 1/2" Drive',
    price: "$249.00",
    category: "mro",
  },
  {
    id: "p-12",
    name: "Cutting Disc Pack",
    brand: 'DeWalt 4-1/2"',
    price: "$45.00",
    category: "mro",
  },
  {
    id: "p-13",
    name: "Headlamp",
    brand: "Streamlight ProTac",
    price: "$59.00",
    category: "lighting",
  },
  {
    id: "p-14",
    name: "Mechanix Gloves",
    brand: "M-Pact",
    price: "$34.00",
    category: "safety",
  },
];

export const partners = [
  "OSHA",
  "ISO 9001",
  "NIST",
  "SAM.gov",
  "HUBZone Certified",
];

export const supplierLogos = ["CAT", "BOSCH", "MILWAUKEE", "KLEIN TOOLS", "FLUKE"];
