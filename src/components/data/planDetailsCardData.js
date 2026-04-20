const planDetailsCardData = {
  header: {
    brandName: "iOpen",
    buttonText: "Buy",
  },

  sections: [
    {
      title: "Basic Details",
      rows: [
        { label: "Rate", value: "2.5%" },
        { label: "Tracker", value: "Nil" },
      ],
    },
    {
      title: "Events Covered",
      rows: [
        { label: "Accident", value: "✔", type: "check" },
        { label: "Theft / snatch", value: "✔", type: "check" },
        { label: "Total loss in accident", value: "✔", type: "check" },
        { label: "Terrorism", value: "✔", type: "check" },
        { label: "Fire", value: "✔", type: "check" },
        { label: "Natural calamities", value: "✔", type: "check" },
        { label: "Riot and strike", value: "✔", type: "check" },
        { label: "Bodily injury to third party", value: "✔", type: "check" },
        { label: "Property damage", value: "✔", type: "check" },
      ],
    },
    {
      title: "Depreciation",
      rows: [
        {
          label: "Depreciation",
          value: "10% per year (from the year of manufacture)",
        },
      ],
    },
    {
      title: "Company Profile",
      rows: [
        { label: "PACRA rating", value: "AA+" },
        { label: "JCR-VIS rating", value: "N/A" },
        { label: "Operational since", value: "1960" },
      ],
    },
  ],

  actionRow: {
    copyButtonText: "Copy Link",
    link: "https://www.easytakaful.com.pk/external_comparison?id=658",
    socialButtons: [
      { label: "f", bg: "bg-[#3b5998]", type: "text" },
      { label: "t", bg: "bg-[#1da1f2]", type: "text" },
      { label: "mail", bg: "bg-[#8a8a8a]", type: "mail" },
    ],
  },

  disclaimers: {
    title: "Disclaimers",
    items: [
      "Takaful/Insurance is run by Historic Technologies (Pvt) Ltd. We are not underwriting company of the listed insurance companies. You can verify the policy number generated upon issuance directly with the insurance company of your choice.",
      "Your policy will be issued directly by the insurance company of your choice, navigators acts as an independent guiding and facilitating platform. All claims process are handled by the insurance company directly. You will be emailed the documentation of your policy.",
    ],
  },
};

export default planDetailsCardData;