import React from "react";
import insurancePlanCardData from "../data/insurancePlanCardData";

export default function InsurancePlanCard() {
  const { topSection, sections, disclaimers } = insurancePlanCardData;

  return (
    <div className="min-h-screen bg-[#d9d9d9] px-4 py-8">
      <div className="mx-auto w-full max-w-[470px]">
        {/* Top logo / title area */}
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-2 flex justify-center">
            <img
              src={topSection.logo}
              alt={topSection.companyName}
              className="h-[35px] object-contain"
            />
          </div>

          <h2 className="text-[13px] font-semibold leading-none text-[#1d4f91]">
            {topSection.category}
          </h2>

          <p className="mt-[2px] text-[11px] font-semibold text-[#8b5a1d]">
            {topSection.companyName}
          </p>

          <button className="mt-4 flex h-[16px] min-w-[22px] items-center justify-center bg-[#ff0a7a] px-2 text-[10px] font-bold text-white">
            {topSection.badge}
          </button>
        </div>

        {/* Main card */}
        <div className="overflow-hidden border border-[#cfcfcf] bg-white shadow-sm">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <SectionTitle title={section.title} />
              {section.rows.map((row, rowIndex) => (
                <InfoRow
                  key={rowIndex}
                  label={row.label}
                  value={row.value}
                  valueType={row.valueType}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-4 px-2">
          <h3 className="mb-2 text-[11px] font-bold text-[#ff4d4d]">
            {disclaimers.title}
          </h3>

          <div className="grid grid-cols-2 gap-6 text-[8px] leading-[1.5] text-[#7a7a7a]">
            {disclaimers.items.map((item, index) => (
              <p key={index}>
                {item.heading}
                <br />
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="border-b border-[#d6d6d6] bg-[#f6f6f6] px-3 py-[5px]">
      <h3 className="text-[11px] font-semibold text-[#222]">{title}</h3>
    </div>
  );
}

function InfoRow({ label, value, valueType }) {
  return (
    <div className="grid grid-cols-[1.6fr_2.4fr] border-b border-[#d6d6d6]">
      <div className="bg-[#ece9df] px-2 py-[5px] text-[9px] text-[#333]">
        {label}
      </div>

      <div className="flex items-center bg-[#f4f1e8] px-2 py-[5px] text-[9px] text-[#666]">
        {valueType === "check" ? (
          <span className="text-[12px] font-bold text-[#2d8a3f]">{value}</span>
        ) : (
          value
        )}
      </div>
    </div>
  );
}