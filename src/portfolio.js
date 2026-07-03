import * as en from "./portfolio.en";
import * as ja from "./portfolio.ja";

const lang = localStorage.getItem("language") || "en";
const data = lang === "en" ? en : ja;

export const settings = data.settings;
export const seo = data.seo;
export const greeting = data.greeting;
export const socialMediaLinks = data.socialMediaLinks;
export const skills = data.skills;
export const competitiveSites = data.competitiveSites;
export const degrees = data.degrees;
export const certifications = data.certifications;
export const experience = data.experience;
export const projectsHeader = data.projectsHeader;
export const publicationsHeader = data.publicationsHeader;
export const publications = data.publications;
export const contactPageData = data.contactPageData;
