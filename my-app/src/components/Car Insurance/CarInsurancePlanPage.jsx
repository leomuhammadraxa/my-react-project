import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, Phone, Circle, Check } from "lucide-react";
import VehicleInsuranceForm from "./forms/VehicleInsuranceForm";
import InsurancePlanCard from "./CarInsurancePlanCard";
import PlanDetailsCard from "./PlanDetailsCard";

export default function CarInsurancePlanPage() {
  const navigate = useNavigate();
const [showDetails, setShowDetails] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [Title, setTitle] = useState("Auto Insurance from Adamjee Insurance");
  const [height, setHeight] = useState("top-[100vh]");
  const [sections, setSections] = React.useState({
    buy: true,
    compare: false,
    feature: false,
  });

  const plans = [
    {
      id: 1,
      type: "Conventional",
      company: "Adamjee Insurance",
      logo: "/logos/adamjee.png",
      customer: "Alsvin",
      note: "Tracker optional.",
      rate: "2.25 %",
      price: "Rs77,728",
      priceNote: "for 1 year",
    },
    {
      id: 2,
      type: "Conventional",
      company: "Jubilee General Insurance",
      logo: "/logos/jubilee.png",
      customer: "Alsvin",
      note: "Tracker optional.",
      rate: "2 %",
      price: "Rs69,091",
      priceNote: "for 1 year",
    },
    {
      id: 3,
      type: "Islamic",
      company: "Pak Qatar Takaful",
      logo: "/logos/pakqatar.png",
      customer: "Alsvin",
      note: "Tracker optional.",
      rate: "2 %",
      price: "Rs69,091",
      priceNote: "for 1 year",
    },
    {
      id: 4,
      type: "Conventional",
      company: "Premier",
      logo: "/logos/premier.png",
      customer: "Alsvin",
      note: "Tracker optional.",
      rate: "2 %",
      price: "Rs69,091",
      priceNote: "for 1 year",
    },
    {
      id: 5,
      type: "Conventional",
      company: "Premier",
      logo: "/logos/premier.png",
      customer: "alto",
      note: "Tracker optional.",
      rate: "2 %",
      price: "Rs89,091",
      priceNote: "for 1 year",
    },
  ];

  const [vehicleFormData, setVehicleFormData] = useState({
    manufacturer: "",
    model: "",
    year: "",
    value: "",
  });

  const [details, setDetails] = useState([]);

  const insuranceCompanies = [
    "Jubilee General Insurance",
    "Adamjee Insurance",
    "Pak Qatar Takaful",
    "Premier",
  ];

  const [sortBy, setSortBy] = useState("default");
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("carData") || "{}");

    setDetails([
      [savedData.manufacturer || "-", "Manufacturer"],
      [savedData.model || "-", "Model"],
      [savedData.yearManufactured || "-", "Year"],
      [savedData.marketValue || "-", "Market Value"],
      [savedData.email || "-", "Email"],
    ]);

    setVehicleFormData({
      manufacturer: savedData.manufacturer || "",
      model: savedData.model || "",
      year: savedData.yearManufactured || "",
      value: savedData.marketValue || "",
    });
  }, []);

  const parsePrice = (price) => {
    return Number(String(price).replace(/[^\d]/g, "")) || 0;
  };

  const filteredPlans = useMemo(() => {
    let updatedPlans = [...plans];

    if (selectedCompanies.length > 0) {
      updatedPlans = updatedPlans.filter((plan) =>
        selectedCompanies.includes(plan.company),
      );
    }

    if (sortBy === "economical") {
      updatedPlans.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === "expensive") {
      updatedPlans.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    return updatedPlans;
  }, [plans, selectedCompanies, sortBy]);

  const handleCompanyChange = (company) => {
    setSelectedCompanies((prev) =>
      prev.includes(company)
        ? prev.filter((item) => item !== company)
        : [...prev, company],
    );
  };

  const Buynow = () => {
    setSections({
      buy: true,
      compare: false,
      feature: false,
    });
    setHeight("top-0");
    setTitle("Buy Auto Insurance from Adamjee Insurance");
    setShowModal(true);
  };

  const feature = () => {
    setSections({
      buy: false,
      compare: false,
      feature: true,
    });
    setHeight("top-0");
    setTitle("Back to Plans");
    setShowModal(true);
  };

  const Compareitems = () => {
    setSections({
      buy: false,
      compare: true,
      feature: false,
    });
    setHeight("top-[80vh]");
    setTitle("Compare Plans");
    setShowModal(true);
  };

  const closeModal = () => {
    setSections({
      buy: false,
      compare: true,
      feature: false,
    });
    setShowModal(false);
    setHeight("top-[100vh]");
  };

  const handleEditClick = () => {
    navigate("/car-insurance");
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] font-sans text-[#222]">
      <header className="h-[52px] border-b border-[#d9d9d9] bg-white px-4">
        <div className="mx-auto flex h-full max-w-[1365px] items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1d7fe2]">
              <div className="h-2.5 w-2.5 rounded-full border-2 border-white" />
            </div>
            <span className="text-[14px] font-semibold lowercase tracking-tight text-[#2f7bc4]">
              easyinsurance
            </span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-5 text-[9px] font-medium uppercase tracking-[0.06em] text-[#3e3e3e]">
              <a href="#">Home</a>
              <a href="#">About</a>
              <button className="flex items-center gap-1">
                Plans <ChevronDown className="h-3 w-3" strokeWidth={1.75} />
              </button>
            </nav>

            <button className="flex h-[27px] items-center gap-2 border border-[#333] px-3 text-[10px] font-medium text-[#333]">
              <Phone className="h-3 w-3" strokeWidth={2} />
              0310 2789349
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-[1365px] justify-center gap-3 pb-8 pt-3">
        <div className="w-[135px] shrink-0 space-y-[9px]">
          <div className="border border-[#d9d9d9] bg-white px-4 py-3">
           <button
  type="button"
  onClick={() => setShowDetails((prev) => !prev)}
  className="mb-5 flex w-full items-center justify-between text-[8px] font-semibold uppercase tracking-[0.08em] text-[#6d6d6d]"
>
  <span>{showDetails ? "Hide details" : "Show details"}</span>
  <ChevronDown
    className={`h-3 w-3 transition-transform duration-300 ${
      showDetails ? "rotate-180" : "rotate-0"
    }`}
  />
</button>

<div
  className={`overflow-hidden transition-all duration-300 ${
    showDetails ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="space-y-3">
    {details.map(([value, label]) => (
      <div key={label}>
        <p className="text-[9px] font-medium leading-none text-[#595959]">
          {value}
        </p>
        <p className="mt-1 text-[8px] uppercase leading-none tracking-[0.04em] text-[#a0a0a0]">
          {label}
        </p>
      </div>
    ))}
  </div>

  <button
    type="button"
    onClick={handleEditClick}
    className="relative z-50 mt-4 h-[22px] w-full border border-[#ff1e6d] text-[8px] font-semibold uppercase tracking-[0.08em] text-[#ff1e6d]"
  >
    Edit
  </button>
</div>


          </div>

          <div className="border border-[#d9d9d9] bg-white px-4 py-3">
            <h3 className="mb-4 text-center text-[12px] font-semibold text-[#2f2f2f]">
              Sort by
            </h3>

            <div className="space-y-2 text-[9px] text-[#6b6b6b]">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="sortPlans"
                  checked={sortBy === "default"}
                  onChange={() => setSortBy("default")}
                  className="h-3 w-3"
                />
                <span>Asani Ka Filter</span>
              </label>

              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="sortPlans"
                  checked={sortBy === "economical"}
                  onChange={() => setSortBy("economical")}
                  className="h-3 w-3"
                />
                <span>Economical</span>
              </label>

              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="sortPlans"
                  checked={sortBy === "expensive"}
                  onChange={() => setSortBy("expensive")}
                  className="h-3 w-3"
                />
                <span>Expensive</span>
              </label>
            </div>
          </div>

          <div className="border border-[#d9d9d9] bg-white px-4 py-3">
            <button className="mb-3 flex items-center gap-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#6d6d6d]">
              Hide filters <ChevronDown className="h-3 w-3 rotate-180" />
            </button>

            <h3 className="mb-3 text-center text-[12px] font-semibold text-[#2f2f2f]">
              Filter by
            </h3>

            <div>
              <p className="mb-2 text-[8px] text-[#a0a0a0]">Insurance Companies</p>

              <div className="space-y-2 text-[9px] text-[#6b6b6b]">
                {insuranceCompanies.map((company) => (
                  <label key={company} className="flex cursor-pointer items-start gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCompanies.includes(company)}
                      onChange={() => handleCompanyChange(company)}
                      className="mt-[1px] h-3 w-3 rounded-none border-[#999]"
                    />
                    <span>{company}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-[9px]">
          {filteredPlans.length > 0 ? (
            filteredPlans.map((plan) => (
              <div
                key={plan.id}
                className="flex h-[123px] w-full items-stretch overflow-hidden rounded-[2px] border border-[#d9d9d9] bg-white"
              >
                <div className="flex w-[69px] flex-col justify-between border-r border-[#e4e4e4] px-2 py-2">
                  <span
                    className={`text-[10px] ${
                      plan.type === "Islamic" ? "text-[#ff5a76]" : "text-[#ff6b6b]"
                    }`}
                  >
                    {plan.type}
                  </span>

                  <div className="flex flex-1 items-center justify-center py-1">
                    <img
                      src={plan.logo}
                      alt={plan.company}
                      className="max-h-[46px] max-w-[52px] object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback =
                          e.currentTarget.parentElement.querySelector(".logo-fallback");
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <div className="logo-fallback hidden h-[46px] w-[52px] items-center justify-center rounded bg-[#f5f5f5] px-1 text-center text-[8px] font-semibold leading-tight text-[#666]">
                      {plan.company}
                    </div>
                  </div>

                  <p className="text-[9px] leading-[1.2] text-[#555]">{plan.company}</p>
                </div>

                <div className="flex flex-1 items-start justify-between px-3 py-3">
                  <div className="flex h-full flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between pr-4">
                      <h3 className="text-[13px] font-semibold text-[#222]">
                        {plan.customer}
                      </h3>

                      <div className="text-right">
                        <div className="flex items-center justify-end gap-1 text-[#18b454]">
                          <Check className="h-3 w-3 fill-current stroke-[3]" />
                          <span className="text-[10px] font-semibold text-[#2f2f2f]">
                            {plan.price}
                          </span>
                        </div>
                        <p className="text-[9px] text-[#6f6f6f]">{plan.priceNote}</p>
                      </div>
                    </div>

                    <div className="flex items-end justify-between gap-4 pr-1">
                      <div className="min-w-[84px]">
                        <p className="text-[8px] text-[#8b8b8b]">{plan.note}</p>
                      </div>

                      <div className="min-w-[42px] text-center">
                        <p className="text-[8px] text-[#9a9a9a]">Rate</p>
                        <p className="mt-1 text-[12px] font-semibold text-[#222]">
                          {plan.rate}
                        </p>
                      </div>

                      <div className="mr-auto flex items-center gap-2 pl-2">
                        <div className="flex items-center gap-1 text-[8px] font-semibold uppercase text-[#3d3d3d]">
                          <Phone className="h-3 w-3" />
                          <div>
                            <p className="leading-none">Confused?</p>
                            <p className="mt-1 leading-none">Get in touch!</p>
                          </div>
                        </div>

                        <button
                          onClick={Buynow}
                          className="h-[20px] min-w-[80px] bg-[#ff0f6d] px-4 text-[8px] font-bold uppercase tracking-[0.08em] text-white"
                        >
                          Buy
                        </button>

                        <button
                          onClick={Compareitems}
                          className="flex h-[20px] min-w-[80px] items-center justify-center gap-1 border border-[#bfbfbf] px-3 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#444]"
                        >
                          <Circle className="h-3 w-3" /> Compare
                        </button>

                        <button
                          onClick={feature}
                          className="flex h-[20px] min-w-[84px] items-center justify-center gap-2 border border-[#bfbfbf] px-3 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#444]"
                        >
                          Features <ChevronRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-[123px] items-center justify-center rounded-[2px] border border-[#d9d9d9] bg-white text-[14px] font-medium text-[#666]">
              No plans found
            </div>
          )}
        </section>
      </main>

      <a
        href="#"
        className="fixed bottom-3 left-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#1ebd5a] text-white shadow-md"
      >
        <Phone className="h-4 w-4" />
      </a>

      <div
        className={`fixed left-0 z-50 h-screen w-full overflow-auto bg-white transition-all duration-500 ease-in-out ${
          showModal ? height : "top-[100vh]"
        }`}
      >
        <div>
          <div className="w-full bg-[#ff0f6d] px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex h-5 w-5 items-center justify-center"
                >
                  <span className="text-[22px] font-semibold leading-none text-white">
                    ×
                  </span>
                </button>

                <h2 className="text-[20px] font-bold leading-none text-white">
                  {Title}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="flex h-5 w-5 items-center justify-center"
              >
                <span className="text-[28px] font-light leading-none text-white">
                  ×
                </span>
              </button>
            </div>
          </div>

          {sections.buy && (
            <VehicleInsuranceForm
              formData={vehicleFormData}
              setFormData={setVehicleFormData}
            />
          )}

          {sections.compare && <PlanDetailsCard />}
          {sections.feature && <InsurancePlanCard />}
        </div>
      </div>
    </div>
  );
}