import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Aleksandra Sikora",
  about: "Open-source developer at The Guild. Focused on TypeScript, React, databases.",
  image: {
    url: "people/aleksandra.jpg",
  },
  tagline: "",
  social: {
    homepage: "https://www.aleksandra.codes/",
    mastodon: "https://mas.to/@aleksandra", // This has to be a whole link
    twitter: "aleksandrasays", // Handle without @ is enough
    github: "beerose",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "aleksandra-sikora-b54699132",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Poland",
      code: "PL",
    },
    city: "Wroclaw",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
