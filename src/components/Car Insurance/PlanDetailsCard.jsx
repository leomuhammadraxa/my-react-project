import { Mail, Copy, Shield } from "lucide-react";
import planDetailsCardData from "../data/planDetailsCardData";

export default function PlanDetailsCard() {
  const { header, sections, actionRow, disclaimers } = planDetailsCardData;

  return (
    <div className="min-h-screen bg-[#dcdcdc] px-4 py-8">
      <div className="mx-auto w-full max-w-[830px] border border-[#bfbfbf] bg-[#f6f6f6] shadow-sm">
        {/* Top Header */}
        <div className="flex flex-col items-center justify-center border-b border-[#c8c8c8] px-4 py-5">
          <Shield className="mb-1 h-5 w-5 text-[#2f68b2]" strokeWidth={1.8} />
          <p className="mb-2 text-[11px] font-medium text-[#2f68b2]">
            {header.brandName}
          </p>

          <button className="min-w-[170px] bg-[#ff1679] px-8 py-[4px] text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-[#e0126d]">
            {header.buttonText}
          </button>
        </div>

        {/* Dynamic Sections */}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <SectionTitle title={section.title} />
            <table className="w-full border-collapse">
              <tbody>
                {section.rows.map((item, index) => (
                  <tr key={index}>
                    <td className="w-1/2 border border-[#cfc8b8] bg-[#e7e4d9] px-3 py-2 text-[11px] text-[#222]">
                      {item.label}
                    </td>
                    <td className="w-1/2 border border-[#cfc8b8] bg-[#e7e4d9] px-3 py-2 text-center text-[11px] text-[#666]">
                      {item.type === "check" ? (
                        <span className="text-[12px] font-bold text-[#2f8a2f]">
                          {item.value}
                        </span>
                      ) : (
                        item.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        {/* Bottom Action Row */}
        <div className="flex flex-col gap-3 border-t border-[#c8c8c8] bg-[#f6f6f6] px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
            <button className="flex h-[28px] items-center justify-center gap-1 border border-[#ff6b93] bg-white px-3 text-[10px] font-medium uppercase text-[#ff4b7d] hover:bg-[#fff1f5]">
              <Copy className="h-3 w-3" />
              {actionRow.copyButtonText}
            </button>

            <input
              type="text"
              readOnly
              value={actionRow.link}
              className="h-[28px] w-full border border-[#bfbfbf] bg-white px-3 text-[10px] text-[#8a8a8a] outline-none"
            />
          </div>

          <div className="flex items-center gap-1">
            {actionRow.socialButtons.map((button, index) => (
              <button
                key={index}
                className={`flex h-[26px] w-[26px] items-center justify-center text-[12px] font-bold text-white ${button.bg}`}
              >
                {button.type === "mail" ? (
                  <Mail className="h-3 w-3" />
                ) : (
                  button.label
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-[#bfbfbf] bg-[#f6f6f6] px-4 py-4">
          <h3 className="mb-3 text-[12px] font-semibold text-[#ff4b4b]">
            {disclaimers.title}
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {disclaimers.items.map((item, index) => (
              <p key={index} className="text-[9px] leading-[1.6] text-[#777]">
                {item}
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
    <div className="border-b border-t border-[#cfc8b8] bg-[#f7f4eb] px-3 py-[6px]">
      <h2 className="text-[16px] font-semibold text-[#202020]">{title}</h2>
    </div>
  );
}