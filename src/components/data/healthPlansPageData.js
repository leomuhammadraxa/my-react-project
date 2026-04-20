const healthPlansPageData = {
  navbar: {
    logo: {
      icon: "e",
      text: "easyinsurance",
    },
    navLinks: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Plans", path: "/plans" },
    ],
    phone: "0310 2789349",
  },

  detailsCard: {
    title: "Hide Details",
    planCategory: "Individual Health",
    planCategoryLabel: "Plan Category",
    age: "22",
    ageLabel: "Age",
    editButtonText: "Edit",
  },

  sortSection: {
    title: "Sort by",
    options: [
      { id: "asan-ka-filter", label: "Asan Ka Filter" },
      { id: "economical", label: "Economical" },
      { id: "expensive", label: "Expensive" },
    ],
  },

  filterSection: {
    title: "Hide Filters",
    filterByTitle: "Filter by",
    changeLimit: {
      label: "Change Limit",
      value: "Rs 400,000",
      min: 0,
      max: 100,
      defaultValue: 35,
    },
    typeOptions: [
      { id: "islamic", label: "Islamic" },
      { id: "conventional", label: "Conventional" },
    ],
    insuranceCompanies: [
      { id: "tpl-life", label: "TPL Life" },
      { id: "pak-qatar", label: "Pak Qatar Family Takaful" },
      { id: "jubilee-life", label: "Jubilee Life Insurance" },
      { id: "jubilee-general", label: "Jubilee General Insurance" },
    ],
  },

  plans: [
    {
      id: 1,
      tag: "Conventional",
      provider: "Jubilee Life Insurance",
      logoText: "Jubilee",
      logoBg: "bg-[#e91e63]",
      title: "Jubilee Health Protect Plan - Silver",
      medicalCover: "Rs.300,000",
      roomType: "Semi-Private",
      price: "Rs 3,250",
      accent: "text-pink-500",
    },
    {
      id: 2,
      tag: "Conventional",
      provider: "Jubilee Life Insurance",
      logoText: "Jubilee",
      logoBg: "bg-[#e91e63]",
      title: "Jubilee Health Protect Plan - Gold",
      medicalCover: "Rs.500,000",
      roomType: "Private",
      price: "Rs 7,150",
      accent: "text-pink-500",
    },
    {
      id: 3,
      tag: "Conventional",
      provider: "TPL Life",
      logoText: "TPL Life",
      logoBg: "bg-[#16a34a]",
      title: "Salamti",
      medicalCover: "Rs.350,000",
      roomType: "Semi Private",
      price: "Rs 10,150",
      accent: "text-green-500",
    },
    {
      id: 4,
      tag: "Islamic",
      provider: "Jubilee General Insurance",
      logoText: "Jubilee",
      logoBg: "bg-[#e91e63]",
      title: "Personal HealthCare Takaful",
      medicalCover: "Rs.275,000",
      roomType: "Semi-Private",
      price: "Rs 11,015",
      accent: "text-pink-500",
    },
  ],

  floatingButton: {
    icon: "✆",
  },
};

export default healthPlansPageData;