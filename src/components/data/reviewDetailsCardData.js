import logo from "../../assets/CarInsurance/logo-logo-adamjee_xiYo9OF (1).png";

const reviewDetailsCardData = {
  header: {
    logo,
    navLinks: [
      { label: "HOME", path: "/" },
      { label: "ABOUT", path: "/about" },
    ],
  },

  planDetails: {
    sectionTitle: "PLAN DETAILS",
    companyName: "Adamjee Insurance",
    planName: "Other",
    durationLabel: "Duration:",
    durationValue: "1 Year",
    priceLabel: "Price per life:",
  },

  personalDetails: {
    sectionTitle: "PERSONAL DETAILS",
    leftColumn: [
      { label: "Plan cat", value: "5" },
      { label: "Last name", value: "raxa" },
      { label: "Date of birth", value: "2026-06-17" },
      { label: "Contact number", value: "923454545" },
      { label: "Reg number", value: "145678" },
      { label: "Survey date", value: "2026-04-24" },
    ],
    rightColumn: [
      { label: "First name", value: "leo" },
      { label: "Gender", value: "male" },
      { label: "Email", value: "leomuhammadraxa@gmail.com" },
      { label: "Address", value: "pechs" },
      { label: "Reg city", value: "140450" },
      { label: "Time slot", value: "9AM - 1PM" },
    ],
  },

  buttons: {
    back: "BACK",
    next: "NEXT",
  },
};

export default reviewDetailsCardData;