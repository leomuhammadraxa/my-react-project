import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import InsuranceResultsPage from "../Car Insurance/CarInsurancePlanPage";
import carDetailData from "../data/carDetailData";

export default function CarDetail() {
  const location = useLocation();
  const [carData, setCarData] = useState(null);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("carData");

    if (data) {
      setCarData(JSON.parse(data));
    } else {
      setCarData(location.state?.carData || null);
    }
  }, [location.state]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  return (
    <>
      <div>
        <InsuranceResultsPage />
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-6">
          <div className="relative w-full max-w-[1120px] overflow-hidden rounded-[4px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[22px] leading-none text-[#2a2a2a] shadow-md transition hover:bg-white"
            >
              ×
            </button>

            <div className="grid min-h-[540px] grid-cols-1">
              <div
                className="relative overflow-hidden px-8 py-10 sm:px-12 sm:py-12 lg:px-14 lg:py-14"
                style={{
                  backgroundImage: `url(${carDetailData.modal.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-[48%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.72)_42%,rgba(255,255,255,0.95)_100%)]" />

                <div className="relative z-10 max-w-[410px]">
                  <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#161616] sm:text-[34px]">
                    {carDetailData.modal.heading}
                  </h2>

                  <p className="mt-1 text-[17px] font-medium leading-normal text-[#4b4b4b]">
                    {carDetailData.modal.subheading}
                  </p>

                  <form className="mt-9 space-y-3.5" onSubmit={handleSubmit}>
                    {carDetailData.formFields.map((field) => (
                      <input
                        key={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="h-[56px] w-full rounded-[4px] border border-[#aeb4c4] bg-transparent px-4 text-[16px] text-[#1a1a1a] placeholder:text-[#6f7482] focus:border-[#ff0f6d] focus:outline-none"
                      />
                    ))}

                    <button
                      type="submit"
                      className="mt-2 flex h-[40px] w-full items-center justify-center rounded-[12px] bg-[#ff0f6d] text-[16px] font-extrabold uppercase tracking-[0.02em] text-white transition hover:bg-[#e60d63]"
                    >
                      {carDetailData.modal.submitText}
                      <span className="ml-1.5 text-[18px] leading-none">→</span>
                    </button>
                  </form>

                  <p className="mt-3 text-[14px] leading-[1.5] text-[#5b5b5b]">
                    {carDetailData.modal.policyText}{" "}
                    <a
                      href={carDetailData.modal.policyLink}
                      className="text-[#3b4eff] underline"
                    >
                      {carDetailData.modal.policyLinkText}
                    </a>
                  </p>

                  <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
                    {carDetailData.features.map((feature) => {
                      const Icon = feature.icon;

                      return (
                        <div key={feature.id} className="flex items-center gap-3">
                          <Icon
                            className="h-[18px] w-[18px] shrink-0 text-[#1787ff]"
                            strokeWidth={2.3}
                          />
                          <span className="whitespace-nowrap text-[14px] font-medium uppercase text-[#313131]">
                            {feature.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}