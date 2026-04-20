import React from "react";

export default function HealthCompareBar({
  comparePlans,
  onRemove,
  onClear,
  onCompare,
}) {
  if (comparePlans.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-[#d8d8d8] bg-[#efefef] px-6 py-4 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-[1000px] items-end gap-4">
        <div className="flex flex-1 gap-4 overflow-x-auto">
          {comparePlans.map((plan) => (
            <div
              key={plan.id}
              className="flex min-h-[54px] min-w-[210px] max-w-[250px] items-center gap-3 rounded-[6px] bg-[#d9d9d9] px-3 py-2"
            >
              <div
                className={`flex h-[28px] w-[28px] shrink-0 items-center justify-center text-[8px] font-bold text-white ${plan.logoBg}`}
              >
                {plan.logoText}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-medium text-[#2d2d2d]">
                  {plan.title}
                </p>
                <p className="truncate text-[11px] text-[#666]">
                  {plan.provider}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onRemove(plan.id)}
                className="text-[14px] font-semibold text-[#777]"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onClear}
          className="h-[54px] min-w-[90px] rounded-[4px] bg-pink-500 px-4 text-[10px] font-semibold uppercase text-white"
        >
          Clear All
        </button>
      </div>

      <div className="mx-auto mt-3 max-w-[1000px]">
        <button
          type="button"
          onClick={onCompare}
          disabled={comparePlans.length < 2}
          className={`flex h-[30px] w-full items-center justify-center rounded-[2px] text-[11px] font-semibold uppercase text-white ${
            comparePlans.length < 2
              ? "cursor-not-allowed bg-pink-300"
              : "bg-pink-500"
          }`}
        >
          Compare
        </button>
      </div>
    </div>
  );
}