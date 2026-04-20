import logo from "../../assets/Logo/logo-text.png";
import bgImage from "../../assets/your-bg-folder/pineapple-bg.png";

const quoteHeroData = {
  header: {
    logo,
    navLinks: [
      { label: "HOME", path: "/" },
      { label: "ABOUT", path: "/about" },
    ],
  },

  hero: {
    backgroundImage: bgImage,
    title: "Last Step to Best Quotes",
    subtitle: "Insurance made easy.",
    buttonText: "SEE PLANS",
    buttonArrow: "→",
    policyText: "We protect your information. Read our",
    policyLinkText: "policy",
    policyLink: "#",
  },

  formFields: [
    { type: "text", placeholder: "Name *", name: "name" },
    { type: "text", placeholder: "Contact Number *", name: "contactNumber" },
    { type: "email", placeholder: "Email *", name: "email" },
  ],

  features: [
    {
      label: "FREE COMPARISON",
      icon: "checkSquare",
    },
    {
      label: "PAY ONLINE",
      icon: "creditCard",
    },
    {
      label: "NO OBLIGATION QUOTES",
      icon: "alignJustify",
    },
  ],
};

export default quoteHeroData;