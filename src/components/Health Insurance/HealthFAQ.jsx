import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqItems = [
  {
    title: "Why buy health insurance?",
    content:
      "Health Insurance plans are designed to protect you and your family from major medical costs. The biggest benefit of a health insurance plan is that the insurance company will pay for your treatment if you are admitted to a hospital bed. As hospital and medical expenses continue to rise, health insurance helps reduce the financial burden and gives you peace of mind.",
  },
  {
    title: "How to choose a plan?",
    content:
      "At easyinsurance.com.pk, you can compare the prices and coverages of several medical insurance options from the highest-rated insurance companies of Pakistan. When comparing, it is best to make sure to compare especially the following two features: the level of coverage and the exclusions or limitations mentioned in the policy terms.",
  },
  {
    title: "Why buy through us?",
    content:
      "We will make sure your insurance experience is not compromised. We do that by making sure that all our clients understand the terms and conditions well by giving them reading material, specialized quotations and by providing on-call consultations. Our goal is to keep the process simple, clear, and trustworthy.",
  },
];

function FaqCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative rounded-[14px] border-2 border-[#ff0f7b] bg-[#f3e8b4] shadow-[0_4px_14px_rgba(0,0,0,0.12)]">
      <div className="absolute -left-3 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff0f7b] text-white shadow-md">
        <HelpCircle size={14} strokeWidth={2.5} />
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 pb-5 pt-6 text-left"
      >
        <h3 className="pr-8 text-[20px] font-extrabold leading-snug text-[#1a1a1a] md:text-[22px]">
          {item.title}
        </h3>

        <p
          className={`mt-5 text-[16px] leading-[1.55] text-[#2f2f2f] transition-all duration-300 ${
            open ? "" : "line-clamp-6"
          }`}
        >
          {item.content}
        </p>

        <div className="mt-4 flex justify-end">
          <ChevronDown
            size={20}
            className={`text-[#1a1a1a] transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
    </div>
  );
}

export default function FAQCardsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#efe1a6] to-[#f8f5ee] px-4 py-14 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1150px] gap-8 md:grid-cols-2 xl:grid-cols-3">
        {faqItems.map((item, index) => (
          <FaqCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}