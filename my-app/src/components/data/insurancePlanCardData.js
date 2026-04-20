import toplogo from "../../assets/CarInsurance/logo-logo-adamjee_xiYo9OF (1).png";

const insurancePlanCardData = {
  topSection: {
    logo: toplogo,
    category: "Other",
    companyName: "Adamjee Insurance",
    badge: "07",
  },

  sections: [
    {
      title: "Basic Details",
      rows: [
        { label: "Rate", value: "2.26 %" },
        { label: "Tracker", value: "RL" },
      ],
    },
    {
      title: "Events Covered",
      rows: [
        { label: "Accidents", value: "✔", valueType: "check" },
        { label: "Theft/snatch", value: "✔", valueType: "check" },
        { label: "Total loss in accident", value: "✔", valueType: "check" },
        { label: "Terrorism", value: "✔", valueType: "check" },
        { label: "Fire", value: "✔", valueType: "check" },
        { label: "Natural calamities", value: "✔", valueType: "check" },
        { label: "Riot and strike", value: "✔", valueType: "check" },
        { label: "Bodily injury to third party", value: "✔", valueType: "check" },
        { label: "Property damage", value: "✔", valueType: "check" },
      ],
    },
    {
      title: "Depreciation",
      rows: [
        {
          label: "Depreciation",
          value: "10% per year (from 10 year of manufacture)",
        },
      ],
    },
    {
      title: "Company Profile",
      rows: [
        { label: "Asset rating", value: "A++" },
        { label: "JCR-VIS Rating", value: "N/A" },
        { label: "Operational since", value: "1960" },
      ],
    },
  ],

  disclaimers: {
    title: "Disclaimers",
    items: [
      {
        heading: "Listed agency",
        text: "eazyinsurance is run by Nextbridge Technologies (Pvt) Ltd. We are an authorized agency of the listed insurance companies. You can verify the policy number generated upon issuance directly with the insurance company of your choice.",
      },
      {
        heading: "Policy issuance",
        text: "Your policy will be issued directly by the insurance company of your choice. eazyinsurance acts as an independent guiding and purchasing platform. All claim procedures would be handled by the insurance company directly. You will be emailed the documentation of your policy.",
      },
    ],
  },
};

export default insurancePlanCardData;