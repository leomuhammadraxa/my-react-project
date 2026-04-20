import bg from "../../assets/CarInsurance.png";
import logo from "../../assets/Logo/logo-text.png";

export const carInsuranceData = {
  assets: {
    bg,
    logo,
  },

  header: {
    navLinks: [
      { label: "HOME", href: "#" },
      { label: "ABOUT", href: "#" },
      { label: "PLANS", href: "#" },
      {},
    ],
    phone: "0310 2789349",
     phone: "0310 2564555",
    
  },

  trustBadges: [
    {
      type: "text",
      text: "VISA",
      className:
        "flex h-[54px] w-[82px] items-center justify-center rounded-md bg-white shadow-sm",
      textClassName: "text-[18px] font-extrabold text-[#1a3f95]",
    },
    {
      type: "icon",
      text: "🛡",
      className:
        "flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white shadow-sm",
      textClassName: "text-[24px] text-[#7ac68d]",
    },
    {
      type: "doubleText",
      topText: "Trusted",
      bottomText: "Agency",
      className: "text-left leading-tight",
      textClassName: "text-[16px] font-semibold text-white",
    },
    {
      type: "text",
      text: "MasterCard",
      className:
        "flex h-[54px] w-[82px] items-center justify-center rounded-md bg-[#043d89] shadow-sm",
      textClassName: "text-[14px] font-bold text-white",
      
    },
        {
      type: "text",
      text: "MasterCard",
      className:
        "flex h-[54px] w-[82px] items-center justify-center rounded-md bg-[#043d89] shadow-sm",
      textClassName: "text-[14px] font-bold text-white",
      
    },
  ],

  hero: {
    titleStart: "Compare and purchase",
    titleHighlight: "health insurance",
    titleLine2: "plans from 5 of the best health insurance",
    titleLine3: "companies in PAKISTAN",
    description:
      "Simply insert your vehicle details in our insurance calculator, explore several car insurance quotes, select the most suitable one and buy completely online from the comfort of your home! You can also call us and our team can find the most suitable plan for you 😊    Simply insert your vehicle details in our insurance calculator, explore several car insurance quotes, select the most suitable one and buy completely online from the comfort of your home! You can also call us and our team can find the most suitable plan for you 😊"
    },

  form: {
    stepLabels: ["Select Car", "Other Details"],
    placeholders: {
      manufacturer: "Manufacturer *",
      model: "Model *",
      year: "Year Manufactured *",
      marketValue: "Est. Market Value *",
      email: "Email - Helps us connect with you.",
    },

    helperText: {
      manufacturerDefault: "Please select car brand",
      manufacturerSelected: "Looks good.",
      model: "Please select your model.",
      year: "Please select year when vehicle was manufactured.",
      marketValue: "Please enter estimated vehicle value in Pak Rupees.",
      email: "Please provide your email to help us get in contact with you.",
    },
    buttons: {
      next: "NEXT",
      back: "BACK",
      showPlans: "SHOW PLANS",
    },
  },

  options: {
    manufacturers: ["Toyota", "Honda", "Suzuki", "KIA", "Hyundai"],
    modelsByManufacturer: {
      Toyota: ["Corolla", "Yaris", "Fortuner", "Hilux"],
      Honda: ["Civic", "City", "BR-V"],
      Suzuki: ["Alto", "Cultus", "Wagon R", "Swift"],
      KIA: ["Sportage", "Picanto", "Stonic"],
      Hyundai: ["Elantra", "Sonata", "Tucson"],
    },
    years: Array.from({ length: 26 }, (_, i) => `${2025 - i}`),
  },
};
