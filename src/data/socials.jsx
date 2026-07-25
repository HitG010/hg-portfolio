import { Github, Linkedin, Mail } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

// Single source of truth for every outbound personal link. The label is
// what screen readers announce, so it names the destination rather than
// the icon.
export const email = "guptahitesh201105@gmail.com";

export const socialLinks = {
  email: {
    label: "Email Hitesh",
    name: "Email",
    handle: email,
    description: "Best for anything detailed",
    href: `mailto:${email}`,
    Icon: Mail,
  },
  linkedin: {
    label: "Hitesh on LinkedIn",
    name: "LinkedIn",
    handle: "in/hiteshgupta201105",
    description: "Work history and updates",
    href: "https://www.linkedin.com/in/hiteshgupta201105/",
    Icon: Linkedin,
  },
  github: {
    label: "Hitesh on GitHub",
    name: "GitHub",
    handle: "@HitG010",
    description: "Code and experiments",
    href: "https://www.github.com/HitG010",
    Icon: Github,
  },
  leetcode: {
    label: "Hitesh on LeetCode",
    name: "LeetCode",
    handle: "@HiteshGupta20",
    description: "Problem solving",
    href: "https://leetcode.com/u/HiteshGupta20/",
    Icon: SiLeetcode,
  },
  codeforces: {
    label: "Hitesh on Codeforces",
    name: "Codeforces",
    handle: "@Hitesh10",
    description: "Competitive programming",
    href: "https://codeforces.com/profile/Hitesh10",
    Icon: SiCodeforces,
  },
  x: {
    label: "Hitesh on X",
    name: "X",
    handle: "@HiteshGupta2005",
    description: "Occasional thoughts",
    href: "https://x.com/HiteshGupta2005",
    Icon: RiTwitterXLine,
  },
  telegram: {
    label: "Hitesh on Telegram",
    name: "Telegram",
    handle: "@HiteshG20",
    description: "Quickest reply",
    href: "https://t.me/HiteshG20",
    Icon: FaTelegram,
  },
};

// TODO: host the PDF in public/ and version it with the site. Linking to
// Drive means the resume can rot without the repo knowing.
export const resumeUrl =
  "https://drive.google.com/file/d/1E1gq8PaaVyQeFxWtTzP3V39Lh9dBhtS1/view?usp=sharing";

// The hero leads with competitive-programming profiles; the contact
// sections lead with the ways someone would actually reach out.
export const heroSocialIds = [
  "email",
  "linkedin",
  "github",
  "leetcode",
  "codeforces",
];

export const contactSocialIds = [
  "email",
  "linkedin",
  "github",
  "x",
  "telegram",
];
