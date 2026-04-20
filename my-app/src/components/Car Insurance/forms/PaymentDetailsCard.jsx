import React, { useMemo } from "react";
import { Check } from "lucide-react";
import paymentDetailsCardData from "../../data/paymentDetailsCardData";

const getSavedCarData = () => {
  try {
    const saved = localStorage.getItem("carData");
    if (!saved) {
      return {
        manufacturer: "",
        model: "",
        yearManufactured: "",
        marketValue: "",
        email: "",
      };
    }

    const parsed = JSON.parse(saved);

    return {
      manufacturer: parsed.manufacturer || "",
      model: parsed.model || "",
      yearManufactured: parsed.yearManufactured || "",
      marketValue: parsed.marketValue || "",
      email: parsed.email || "",
    };
  } catch (error) {
    console.error("Failed to parse carData from localStorage:", error);
    return {
      manufacturer: "",
      model: "",
      yearManufactured: "",
      marketValue: "",
      email: "",
    };
  }
};

export default function PaymentDetailsCard({ onBack }) {
  const {
    stepper,
    title,
    paymentRows,
    promoButtonText,
    total,
    cardPayment,
    bankTransfer,
    actions,
  } = paymentDetailsCardData;

  const carData = useMemo(() => getSavedCarData(), []);

  const details = [
    { label: "Manufacturer", value: carData.manufacturer || "-" },
    { label: "Model", value: carData.model || "-" },
    { label: "Year", value: carData.yearManufactured || "-" },
    { label: "Market Value", value: carData.marketValue || "-" },
    { label: "Email", value: carData.email || "-" },
  ];

  return (
    <div className="min-h-screen bg-[#efefef] px-4 py-6">
      <div className="mx-auto w-full max-w-[415px] bg-[#f7f7f7] px-[15px] pb-[18px] pt-[16px]">
        {/* Stepper */}
        <div className="mb-[28px] flex items-start justify-center">
          <div className="flex w-full max-w-[340px] items-start justify-between">
            {stepper.map((step, index) => (
              <React.Fragment key={index}>
                <StepItem
                  done={step.done}
                  current={step.current}
                  number={step.number}
                  label={step.label}
                />
                {index !== stepper.length - 1 && <StepLine />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-[18px] text-center text-[16px] font-extrabold text-[#2f2f2f]">
          {title}
        </h2>

        {/* Saved Car Details */}
        <div className="mb-[14px] border border-[#d7d7d7] bg-white px-[12px] py-[12px]">
          <h3 className="mb-[10px] text-[12px] font-extrabold uppercase text-[#2f2f2f]">
            Car Details
          </h3>

          <div className="space-y-[6px]">
            {details.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 border-b border-[#eeeeee] pb-[6px] last:border-b-0 last:pb-0"
              >
                <span className="text-[10px] font-bold uppercase text-[#777]">
                  {item.label}
                </span>
                <span className="text-right text-[11px] font-medium text-[#333]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment rows */}
        <div className="space-y-[6px] text-[12px] text-[#333]">
          {paymentRows.map((row, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="font-bold">{row.label}</span>
              <span className="text-[20px] font-medium text-[#5a5a5a]">
                {row.value}
              </span>
            </div>
          ))}

          <button className="mt-[6px] text-[9px] font-semibold uppercase text-[#1f74ff]">
            {promoButtonText}
          </button>
        </div>

        {/* Divider */}
        <div className="mt-[14px] border-t border-[#d5d5d5]" />

        {/* Payment Total */}
        <div className="mt-[10px] flex items-center justify-between text-[12px]">
          <span className="font-bold text-[#333]">{total.label}</span>
          <span className="text-[22px] font-bold text-[#00a651]">
            {total.value}
          </span>
        </div>

        {/* Card box */}
        <div className="mt-[14px] border border-[#d3d3d3] bg-[#f8f8f8] px-[10px] py-[12px]">
          <div className="text-center">
            <h3 className="text-[14px] font-bold text-[#2f2f2f]">
              {cardPayment.title}
            </h3>

            <p className="mt-[3px] text-[8px] text-[#9a9a9a]">
              {cardPayment.subtitle}
            </p>

            <button className="mt-[10px] inline-flex h-[28px] items-center justify-center bg-[#ff0a6c] px-[18px] text-[11px] font-bold uppercase text-white">
              {cardPayment.buttonText}
            </button>
          </div>

          <div className="mt-[10px] border-t border-[#d5d5d5]" />

          <div className="pt-[10px] text-center">
            <div className="flex items-center justify-center gap-[8px]">
              <span className="text-[33px] font-black tracking-[-1px] text-[#0a4fb5]">
                {cardPayment.visaText}
              </span>

              <div className="flex items-center">
                <span className="h-[16px] w-[16px] rounded-full bg-[#ea001b]" />
                <span className="-ml-[5px] h-[16px] w-[16px] rounded-full bg-[#f79e1b]" />
              </div>

              <span className="text-[20px]">🔒</span>
            </div>

            <p className="mt-[6px] text-[8px] text-[#9a9a9a]">
              {cardPayment.secureText}
            </p>
          </div>
        </div>

        {/* Bank button */}
        <div className="mt-[16px] flex justify-center">
          <button className="h-[20px] bg-[#ecd25d] px-[10px] text-[9px] font-bold uppercase text-[#4c3a00] shadow-sm">
            {bankTransfer.buttonText}
          </button>
        </div>

        {/* Back button */}
        <div className="mt-[12px] flex justify-end">
          <button
            onClick={onBack}
            className="flex h-[26px] items-center justify-center bg-[#ff0a6c] px-[12px] text-[10px] font-bold uppercase text-white"
          >
            {actions.backText}
          </button>
        </div>
      </div>
    </div>
  );
}

function StepItem({ done = false, current = false, number, label }) {
  return (
    <div className="flex w-[62px] flex-col items-center">
      <div
        className={`flex h-[14px] w-[14px] items-center justify-center rounded-full text-[8px] font-bold ${
          done || current ? "bg-[#ff0a6c] text-white" : "bg-[#9c9c9c] text-white"
        }`}
      >
        {done ? <Check size={9} strokeWidth={3} /> : number}
      </div>

      <span className="mt-[6px] text-center text-[9px] text-[#666]">
        {label}
      </span>
    </div>
  );
}

function StepLine() {
  return <div className="mt-[6px] h-px w-[56px] bg-[#b7b7b7]" />;
}