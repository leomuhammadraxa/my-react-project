import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "Why does insurance in Pakistan have a compromised reputation?",
    answer:
      "Insurance can be complicated. With us though, it doesn't have to be. We invest all our efforts in making insurance products as transparent and as easy as possible. There are the benefits/coverage of an insurance plan — these are highlighted everywhere by everyone. Then there are the exclusions/exceptions of an insurance plan. These are the limitations of the product.",
  },
  {
    id: 2,
    question: "Do Insurance Companies Only Value Corporate Clients?",
    answer:
      "We have gotten this feedback a lot over the last five years. It is the general perception that insurance companies only take care of their corporate clients while individuals are not given the same level of services. There is some truth to the matter. Corporate clients usually have better terms and conditions. One simple example is that your employer is able to offer maternity and OPD benefits to you under a corporate health insurance plan only.",
  },
  {
    id: 3,
    question: "What if a genuine claim is not honored by the insurance company?",
    answer:
      "The insurance industry in Pakistan is highly regulated and monitored. SECP has created insurance ombudsman offices to address insurance complaints. You will be able to file a complaint and raise a case online within 20 minutes. Insurance Ombudsman offices are staffed by retired civil judges with experience in settling cases.",
  },
  {
      id: 4,
    question: "What if a genuine claim is not honored by the insurance company?",
    answer:
      "The insurance industry in Pakistan is highly regulated and monitored. SECP has created insurance ombudsman offices to address insurance complaints. You will be able to file a complaint and raise a case online within 20 minutes. Insurance Ombudsman offices are staffed by retired civil judges with experience in settling cases.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-[6px] border border-[#ff0f6d] bg-gradient-to-b from-[#e3fbfb] from-[50%]">
      <button
        onClick={onToggle}
        className="flex w-full items-start gap-3 px-4 py-4 text-left"
      >
        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#ff0f6d] text-[#ff0f6d]">
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </span>

        <div className="flex-1">
          <h3 className="text-[14px] font-semibold text-[#1f1f1f]">
            {item.question}
          </h3>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "mt-3 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="max-w-[95%] text-[13px] leading-6 text-[#555]">
              {item.answer}
            </p>

            <button className="mt-4 rounded bg-[#ff0f6d] px-3 py-1.5 text-[11px] font-medium text-white hover:opacity-90">
              Read more
            </button>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#e3fbfb] from-[50%] to-white px-4 py-10">
      <div className="mx-auto max-w-[950px]">
        <h2 className="mb-8 text-center text-[28px] font-bold text-[#111]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}