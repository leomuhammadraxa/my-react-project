import React from "react";
import {
  ShieldCheck,
  Users,
  HeartHandshake,
  HandHeart,
} from "lucide-react";

export default function HealthInsuranceTypes() {
  const plans = [
    {
      title: "Individual Plans",
      icon: <ShieldCheck size={26} strokeWidth={1.8} />,
    },
    {
      title: "Parents Plans",
      icon: <HeartHandshake size={26} strokeWidth={1.8} />,
    },
    {
      title: "Family Plans",
      icon: <Users size={26} strokeWidth={1.8} />,
    },
    {
      title: "Group Health Plans",
      icon: <HandHeart size={26} strokeWidth={1.8} />,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1100px] px-4">
        <h2 className="mb-14 text-center text-[34px] font-extrabold uppercase tracking-tight text-[#0b1b3f] md:text-[40px]">
          Health Insurance By Type
        </h2>

        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 text-center md:text-left"
            >
              <div className="text-[#ff4f8b]">{plan.icon}</div>
              <p className="text-[15px] font-medium text-[#1f2b4d]">
                {plan.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}