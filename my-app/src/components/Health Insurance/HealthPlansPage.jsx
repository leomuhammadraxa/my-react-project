import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import healthPlansPageData from "../data/healthPlansPageData";
import HealthInsuranceForm from "./form/BuyNowForm";
import HealthCompareBar from "./HealthCompareBar";
import HealthCompareModal from "./HealthCompareModal";

export default function HealthPlansPage() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("Buy Health Insurance");
  const [height, setHeight] = useState("top-[100vh]");

  const [comparePlans, setComparePlans] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const [sortValue, setSortValue] = useState("default");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const {
    navbar,
    detailsCard,
    sortSection,
    filterSection,
    plans,
    floatingButton,
  } = healthPlansPageData;

  const normalize = (value) =>
    String(value || "")
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();

  const getNumericPrice = (price) => {
    return Number(String(price || "").replace(/[^\d]/g, "")) || 0;
  };

  const handleBuyNow = (plan) => {
    setTitle(`Buy ${plan.title} from ${plan.provider}`);
    setHeight("top-0");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setHeight("top-[100vh]");
  };

  const handleCompareToggle = (plan) => {
    setComparePlans((prev) => {
      const alreadyAdded = prev.find((item) => item.id === plan.id);

      if (alreadyAdded) {
        return prev.filter((item) => item.id !== plan.id);
      }

      if (prev.length >= 3) {
        return prev;
      }

      return [...prev, plan];
    });
  };

  const handleRemoveCompare = (planId) => {
    setComparePlans((prev) => prev.filter((item) => item.id !== planId));
  };

  const handleClearCompare = () => {
    setComparePlans([]);
  };

  const handleOpenCompareModal = () => {
    if (comparePlans.length >= 2) {
      setShowCompareModal(true);
    }
  };

  const handleCloseCompareModal = () => {
    setShowCompareModal(false);
  };

  const handleSortChange = (value) => {
    setSortValue(value);
  };

  const handleTypeChange = (typeLabel) => {
    setSelectedTypes((prev) =>
      prev.includes(typeLabel)
        ? prev.filter((item) => item !== typeLabel)
        : [...prev, typeLabel],
    );
  };

  const handleCompanyChange = (companyLabel) => {
    setSelectedCompanies((prev) =>
      prev.includes(companyLabel)
        ? prev.filter((item) => item !== companyLabel)
        : [...prev, companyLabel],
    );
  };

  const handleResetFilters = () => {
    setSortValue("default");
    setSelectedTypes([]);
    setSelectedCompanies([]);
  };

  const displayPlans = useMemo(() => {
    let result = [...plans];

    if (selectedTypes.length > 0) {
      const normalizedSelectedTypes = selectedTypes.map(normalize);

      result = result.filter((plan) => {
        const planTexts = [
          normalize(plan.tag),
          normalize(plan.title),
          normalize(plan.roomType),
          normalize(plan.medicalCover),
        ];

        return normalizedSelectedTypes.some((selectedType) =>
          planTexts.some(
            (text) =>
              text.includes(selectedType) || selectedType.includes(text),
          ),
        );
      });
    }

    if (selectedCompanies.length > 0) {
      const normalizedSelectedCompanies = selectedCompanies.map(normalize);

      result = result.filter((plan) => {
        const providerText = normalize(plan.provider);
        const titleText = normalize(plan.title);

        return normalizedSelectedCompanies.some(
          (company) =>
            providerText.includes(company) ||
            company.includes(providerText) ||
            titleText.includes(company),
        );
      });
    }

    if (sortValue === "economical") {
      result.sort(
        (a, b) => getNumericPrice(a.price) - getNumericPrice(b.price),
      );
    } else if (sortValue === "expensive") {
      result.sort(
        (a, b) => getNumericPrice(b.price) - getNumericPrice(a.price),
      );
    }

    return result;
  }, [plans, selectedTypes, selectedCompanies, sortValue]);

  return (
    <div className="min-h-screen bg-[#f7f7f7] pb-[140px] text-[#1f1f1f]">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-[58px] max-w-[1350px] items-center justify-between px-6">
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => navigate("/")}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1e88ff] text-sm font-bold text-white">
              {navbar.logo.icon}
            </div>
            <span className="text-[20px] font-semibold text-[#2c79c4]">
              {navbar.logo.text}
            </span>
          </div>

          <nav className="flex items-center gap-7 text-[11px] uppercase text-[#3a3a3a]">
            {navbar.navLinks.map((link, index) => (
              <button
                key={index}
                type="button"
                onClick={() => navigate(link.path)}
                className="hover:text-pink-500"
              >
                {link.label}
              </button>
            ))}

            <button className="rounded border border-black px-3 py-2 text-[11px] font-medium">
              {navbar.phone}
            </button>
          </nav>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1350px] gap-4 px-6 py-4">
        <aside className="w-[290px] shrink-0 space-y-4">
          <div className="border border-gray-300 bg-white">
            <button
              type="button"
              onClick={() => setIsDetailsOpen((prev) => !prev)}
              className="flex w-full items-center justify-center border-b border-gray-200 py-3 text-[10px] uppercase tracking-wide text-[#444]"
            >
              {detailsCard.title}
              <span
                className={`ml-2 text-[12px] transition-transform ${
                  isDetailsOpen ? "rotate-0" : "rotate-180"
                }`}
              >
                ⌃
              </span>
            </button>

            {isDetailsOpen && (
              <div className="space-y-3 px-4 py-4 text-[11px] text-[#666]">
                <div>
                  <p>{detailsCard.planCategory}</p>
                  <p className="text-[10px] uppercase text-gray-400">
                    {detailsCard.planCategoryLabel}
                  </p>
                </div>

                <div>
                  <p className="text-[#444]">{detailsCard.age}</p>
                  <p className="text-[10px] uppercase text-gray-400">
                    {detailsCard.ageLabel}
                  </p>
                </div>

                <button className="mt-2 w-full border border-pink-500 py-2 text-[10px] font-semibold uppercase text-pink-500">
                  {detailsCard.editButtonText}
                </button>
              </div>
            )}
          </div>

          <div className="border border-gray-300 bg-white px-4 py-3">
            <h3 className="mb-4 text-center text-[24px] font-semibold leading-none text-[#111]">
              <span className="text-[14px]">{sortSection.title}</span>
            </h3>

            <div className="space-y-3 text-[11px] text-[#555]">
              {sortSection.options.map((option) => (
                <label
                  key={option.id}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="radio"
                    name="sort"
                    value={option.value}
                    checked={sortValue === option.value}
                    onChange={(e) => handleSortChange(e.target.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border border-gray-300 bg-white">
            <button
              type="button"
              onClick={() => setIsFilterOpen((prev) => !prev)}
              className="flex w-full items-center justify-center border-b border-gray-200 py-3 text-[10px] uppercase tracking-wide text-[#444]"
            >
              {filterSection.title}
              <span
                className={`ml-2 text-[12px] transition-transform ${
                  isFilterOpen ? "rotate-0" : "rotate-180"
                }`}
              >
                ⌃
              </span>
            </button>

            {isFilterOpen && (
              <div className="px-4 py-4">
                <h3 className="mb-4 text-center text-[16px] font-semibold">
                  {filterSection.filterByTitle}
                </h3>

                <div className="mb-5">
                  <p className="mb-1 text-[10px] text-gray-400">
                    {filterSection.changeLimit.label}
                  </p>
                  <p className="mb-2 text-[12px] text-[#444]">
                    {filterSection.changeLimit.value}
                  </p>
                  <input
                    type="range"
                    min={filterSection.changeLimit.min}
                    max={filterSection.changeLimit.max}
                    defaultValue={filterSection.changeLimit.defaultValue}
                    readOnly
                    className="h-1 w-full accent-pink-500"
                  />
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-[10px] text-gray-400">Type</p>
                  <div className="flex flex-wrap gap-3 text-[11px] text-[#555]">
                    {filterSection.typeOptions.map((type) => (
                      <label
                        key={type.id}
                        className="flex cursor-pointer items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          checked={selectedTypes.includes(type.label)}
                          onChange={() => handleTypeChange(type.label)}
                        />
                        {type.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-[10px] text-gray-400">
                    Insurance Companies
                  </p>
                  <div className="space-y-3 text-[11px] text-[#555]">
                    {filterSection.insuranceCompanies.map((company) => (
                      <label
                        key={company.id}
                        className="flex cursor-pointer items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCompanies.includes(company.label)}
                          onChange={() => handleCompanyChange(company.label)}
                        />
                        {company.label}
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-5 w-full border border-pink-500 py-2 text-[10px] font-semibold uppercase text-pink-500"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </aside>

        <main className="flex-1 space-y-4">
          {displayPlans.length > 0 ? (
            displayPlans.map((plan) => {
              const isAdded = comparePlans.find((item) => item.id === plan.id);

              return (
                <div
                  key={plan.id}
                  className="flex min-h-[116px] border border-gray-300 bg-white"
                >
                  <div className="w-[72px] border-r border-gray-200 px-2 py-2 text-[10px] text-pink-500">
                    {plan.tag}
                  </div>

                  <div className="flex w-[170px] flex-col items-center justify-center border-r border-gray-200 px-3 py-3">
                    <div
                      className={`mb-2 flex h-[42px] w-[90px] items-center justify-center text-[18px] font-bold text-white ${plan.logoBg}`}
                    >
                      {plan.logoText}
                    </div>
                    <p className="text-center text-[10px] text-[#444]">
                      {plan.provider}
                    </p>
                  </div>

                  <div className="flex flex-1 items-center justify-between px-4 py-3">
                    <div className="flex-1">
                      <h2 className="mb-4 text-[14px] font-semibold text-[#1f1f1f]">
                        {plan.title}
                      </h2>

                      <div className="flex flex-wrap items-end gap-8">
                        <div>
                          <p className="text-[10px] text-gray-400">
                            Medical Cover
                          </p>
                          <p className="text-[12px] font-semibold">
                            {plan.medicalCover}
                          </p>
                        </div>

                        <div>
                          <p className="text-[10px] text-gray-400">
                            Room Type ?
                          </p>
                          <p className="text-[12px] font-semibold">
                            {plan.roomType}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-[9px] leading-tight text-[#444]">
                            <p>CONFUSED?</p>
                            <p className="font-semibold">GET IN TOUCH!</p>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleBuyNow(plan)}
                            className="min-w-[80px] bg-pink-500 px-5 py-2 text-[10px] font-semibold uppercase text-white"
                          >
                            Buy
                          </button>

                          <button
                            type="button"
                            onClick={() => handleCompareToggle(plan)}
                            className={`min-w-[80px] border px-4 py-2 text-[10px] uppercase ${
                              isAdded
                                ? "border-pink-500 bg-pink-500 text-white"
                                : "border-gray-300 text-[#333]"
                            }`}
                          >
                            {isAdded ? "Added" : "Compare"}
                          </button>

                          <button className="min-w-[80px] border border-gray-300 px-4 py-2 text-[10px] uppercase text-[#333]">
                            Features
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="ml-6 min-w-[110px] text-right">
                      <p
                        className={`text-[24px] font-bold leading-none ${plan.accent}`}
                      >
                        <span className="text-[13px]">♦</span> {plan.price}
                      </p>
                      <p className="mt-1 text-[11px] text-gray-500">
                        for 1 year
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex min-h-[116px] items-center justify-center border border-gray-300 bg-white text-[14px] font-semibold text-[#666]">
              No plans found
            </div>
          )}
        </main>
      </div>

      <button className="fixed bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xl text-white shadow-lg">
        {floatingButton.icon}
      </button>

      <div
        className={`fixed left-0 z-50 h-screen w-full overflow-auto bg-white transition-all duration-500 ease-in-out ${
          showModal ? height : "top-[100vh]"
        }`}
      >
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
                {title}
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

        {showModal && <HealthInsuranceForm />}
      </div>

      <HealthCompareBar
        comparePlans={comparePlans}
        onRemove={handleRemoveCompare}
        onClear={handleClearCompare}
        onCompare={handleOpenCompareModal}
      />

      {showCompareModal && (
        <HealthCompareModal
          comparePlans={comparePlans}
          onClose={handleCloseCompareModal}
        />
      )}
    </div>
  );
}
