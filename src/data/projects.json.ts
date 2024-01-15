export interface Template {
  url: string;
  description: string;
  title: string;
  image: string;
};
const projectOne: Template = {
  url: "/put/your-projects-url-here",
  title: "Monoqrom",
  description: "Quick method to start your design projects in Figma and Tailwind CSS.",
  image: "/images/monoqrom.svg",
};
const projectTwo: Template = {
  url: "/put/your-projects-url-here",
  image: "/images/diagonal.svg",
  description: "28 Dark mesh wallpapers to use on your projects or as wallpapers",
  title: "Diagonal",
};
const projectThree: Template = {
  url: "/put/your-projects-url-here",
  image: "/images/onda.svg",
  description: "16 Wave wallpapers to use on your projects or as wallpapers",
  title: "Onda",
};
const projectfour: Template = {
  url: "/put/your-projects-url-here",
  image: "/images/figmax.svg",
  description: "A set of Figma covers inspired on 90's VHS Covers",
  title: "FigMax90",
};
export const byName = {
  projectOne,
  projectTwo,
  projectThree,
  projectfour,
};
export const projects = Object.values(byName);