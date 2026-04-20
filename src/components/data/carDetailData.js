import bgImage from "../../assets/CarInsurance/Pineapple.jpg";
import { CheckSquare, CreditCard, AlignJustify } from "lucide-react";

const carDetailData = {
  modal: {
    heading: "Last Step to Best Quotes",
    subheading: "Insurance made easy.",
    submitText: "SEE PLANS",
    policyText: "We protect your information. Read our",
    policyLinkText: "policy.",
    policyLink: "#",
    bgImage,
  },

  formFields: [
    {
      id: "name",
      type: "text",
      placeholder: "Name *",
    },
    {
      id: "contactNumber",
      type: "text",
      placeholder: "Contact Number *",
    },
    {
      id: "email",
      type: "email",
      placeholder: "Email *",
    },
  ],

  features: [
    {
      id: 1,
      icon: CheckSquare,
      text: "FREE COMPARISON",
    },
    {
      id: 2,
      icon: CreditCard,
      text: "PAY ONLINE",
    },
    {
      id: 3,
      icon: AlignJustify,
      text: "NO OBLIGATION QUOTES",
    },
  ],
};

export default carDetailData;