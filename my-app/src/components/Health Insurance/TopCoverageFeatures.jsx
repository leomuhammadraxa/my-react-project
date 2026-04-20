import React from "react";
import {
  Hospital,
  BriefcaseMedical,
  Users,
  Building2,
  FileText,
  MonitorSmartphone,
  CreditCard,
  Landmark,
} from "lucide-react";

export default function TopCoverageFeatures() {
  const features = [
    { icon: Hospital, label: "Hospitalization" },
    { icon: BriefcaseMedical, label: "Surgeries and diagnosis" },
    { icon: Users, label: "Family Coverage" },
    { icon: Building2, label: "Room entitlement" },
    { icon: FileText, label: "Online document" },
    { icon: MonitorSmartphone, label: "Day Care Surgeries and" },
    { icon: CreditCard, label: "Card Payment" },
    { icon: Landmark, label: "Bank Transfer" },
  ];

  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(227,251,251,1)_50%,rgba(255,255,255,1)_100%)] py-10 md:py-12">
      <div className="mx-auto max-w-[1100px] px-4">
        <h2 className="mb-8 text-center text-[28px] font-extrabold uppercase tracking-tight text-[#0f1f3d] md:mb-10 md:text-[32px]">
          Top Coverage Features
        </h2>

        <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-center md:text-left"
              >
                <Icon className="h-6 w-6 shrink-0 text-pink-500" strokeWidth={1.8} />
                <span className="text-[14px] font-medium leading-snug text-[#4b5563]">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}