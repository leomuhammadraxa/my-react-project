import React from "react";

export default function InsuredSteps() {
  const steps = [
    {
      id: 1,
      title: "Enter details",
      description:
        "Answer some basic questions so we can calculate quotes personalized for you",
      icon: (
        <svg
          viewBox="0 0 120 120"
          className="h-[78px] w-[78px] md:h-[84px] md:w-[84px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="14" y="18" width="36" height="36" rx="4" stroke="#4B4B4B" strokeWidth="4" />
          <path d="M23 35L31 43L49 20" stroke="#ff0f7b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60 25H102" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
          <path d="M60 38H96" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
          <path d="M60 51H102" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />

          <rect x="14" y="66" width="36" height="36" rx="4" stroke="#4B4B4B" strokeWidth="4" />
          <path d="M23 83L31 91L49 68" stroke="#ff0f7b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60 73H102" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
          <path d="M60 86H96" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
          <path d="M60 99H102" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Compare plans",
      description:
        "View and compare quotes and choose the plans with best price and features",
      icon: (
        <svg
          viewBox="0 0 120 120"
          className="h-[78px] w-[78px] md:h-[84px] md:w-[84px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="18" y="14" width="72" height="84" rx="8" stroke="#4B4B4B" strokeWidth="4" />
          <path d="M26 26H32" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
          <path d="M38 26H44" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
          <path d="M50 26H56" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />

          <rect x="34" y="42" width="14" height="14" rx="2" stroke="#ff0f7b" strokeWidth="4" />
          <path d="M37 49L41 53L47 45" stroke="#ff0f7b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          <path d="M56 46H82" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
          <path d="M56 56H76" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />

          <rect x="34" y="66" width="14" height="14" rx="2" stroke="#4B4B4B" strokeWidth="4" />
          <path d="M56 70H82" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
          <path d="M56 80H72" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M80 86L105 111"
            stroke="#ff0f7b"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M84 109L105 111L103 91"
            stroke="#ff0f7b"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Buy online",
      description:
        "Get insured from the company of your choice instantly through us",
      icon: (
        <svg
          viewBox="0 0 120 120"
          className="h-[78px] w-[78px] md:h-[84px] md:w-[84px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 78H92" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
          <path d="M28 78L40 62H100V78" stroke="#4B4B4B" strokeWidth="4" strokeLinejoin="round" />
          <path d="M34 26H88V55H34V26Z" stroke="#4B4B4B" strokeWidth="4" />
          <path d="M42 36H48" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
          <path d="M42 47H48" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
          <path d="M56 36H78" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />
          <path d="M56 47H74" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" />

          <circle cx="100" cy="42" r="18" stroke="#ff0f7b" strokeWidth="4" />
          <circle cx="94" cy="38" r="2.5" fill="#ff0f7b" />
          <circle cx="106" cy="38" r="2.5" fill="#ff0f7b" />
          <path d="M93 47C95 50 98 52 100 52C102 52 105 50 107 47" stroke="#ff0f7b" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-center text-[26px] font-extrabold uppercase leading-tight text-[#1f1f1f] md:text-[38px]">
          Get Insured In Just 3 Steps
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8 lg:mt-16 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center rounded-[20px] px-4 py-3 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 flex min-h-[90px] items-center justify-center">
                {step.icon}
              </div>

              <h3 className="text-[24px] font-extrabold leading-tight text-[#1f1f1f]">
                {step.title}
              </h3>

              <p className="mt-3 max-w-[320px] text-[16px] leading-[1.6] text-[#2f2f2f]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center md:mt-16">
         
        </div>
      </div>
    </section>
  );
}