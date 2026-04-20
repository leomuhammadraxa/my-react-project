import React from "react";
import { Check } from "lucide-react";
import healthInsuranceFeaturesData from "../data/healthInsuranceFeaturesData";

export default function HealthInsuranceFeatures() {
  const { title, subtitle, features } = healthInsuranceFeaturesData;

  return (
    <section className="bg-[linear-gradient(180deg,rgba(227,251,251,1)_50%,rgba(255,255,255,1)_100%)] px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center">
          <h2 className="text-[28px] font-bold leading-tight text-[#0f172a] md:text-[36px]">
            {title}
          </h2>
          <p className="mt-3 text-[16px] font-normal text-[#1f2937] md:text-[18px]">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-14">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[8px] border-[3px] border-[#ff2b86] text-[#ff2b86]">
                <Check className="h-5 w-5 stroke-[3]" />
              </div>
              <p className="text-[18px] leading-[1.45] text-[#111827]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}