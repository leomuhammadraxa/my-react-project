import React from "react";

export default function HealthCompareModal({ comparePlans, onClose }) {
  if (!comparePlans.length) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4 py-6">
      <div className="max-h-[90vh] w-full max-w-[1100px] overflow-auto rounded-[6px] bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-[#e5e5e5] px-6 py-4">
          <h2 className="text-[20px] font-bold text-[#222]">
            Compare Health Plans
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-[28px] leading-none text-[#555]"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
          {comparePlans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-[6px] border border-[#d8d8d8] bg-white p-4"
            >
              <div
                className={`mb-3 flex h-[48px] w-[100px] items-center justify-center text-[16px] font-bold text-white ${plan.logoBg}`}
              >
                {plan.logoText}
              </div>

              <h3 className="mb-4 text-[16px] font-semibold text-[#1f1f1f]">
                {plan.title}
              </h3>

              <div className="space-y-3 text-[13px]">
                <div className="flex items-center justify-between border-b border-[#eee] pb-2">
                  <span className="text-[#777]">Provider</span>
                  <span className="font-medium text-[#222]">{plan.provider}</span>
                </div>

                <div className="flex items-center justify-between border-b border-[#eee] pb-2">
                  <span className="text-[#777]">Medical Cover</span>
                  <span className="font-medium text-[#222]">{plan.medicalCover}</span>
                </div>

                <div className="flex items-center justify-between border-b border-[#eee] pb-2">
                  <span className="text-[#777]">Room Type</span>
                  <span className="font-medium text-[#222]">{plan.roomType}</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[#777]">Price</span>
                  <span className={`text-[20px] font-bold ${plan.accent}`}>
                    {plan.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}