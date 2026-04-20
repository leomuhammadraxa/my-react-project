import React, { useMemo, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Phone } from "lucide-react";
import Testimonial2 from "./CarTestimonials";
import FAQCardsSection from "../Health Insurance/HealthFAQ";
import InsurancePartners from "../Health Insurance/InsurancePartners";
import TopCoverageFeatures from "../Health Insurance/TopCoverageFeatures";
import HealthInsuranceTypes from "../Health Insurance/HealthInsuranceTypes";
import HealthInsuranceFeatures from "../Health Insurance/HealthInsuranceFeatures";
import InsuredSteps from "../Home/InsuredSteps";
import ContactBadge from "../Common/ContactBadge";
import Footer from "../Common/Footer";
import { carInsuranceData } from "../data/Carinsurancedata";

const defaultCarData = {
  manufacturer: "",
  model: "",
  yearManufactured: "",
  marketValue: "",
  email: "",
};

const getSavedCarData = () => {
  try {
    const saved = localStorage.getItem("carData");
    if (!saved) return defaultCarData;

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
    return defaultCarData;
  }
};

export default function CarInsuranceHero() {
  const navigate = useNavigate();
  const location = useLocation();
  const { assets, header, trustBadges, hero, form, options } = carInsuranceData;

  const [formData, setFormData] = useState(defaultCarData);
  const [step, setStep] = useState(1);

  const { manufacturer, model, yearManufactured, marketValue, email } = formData;

  useEffect(() => {
    const savedData = getSavedCarData();
    setFormData(savedData);

    const hasStep2Data =
      savedData.yearManufactured || savedData.marketValue || savedData.email;

    if (hasStep2Data) {
      setStep(2);
    } else {
      setStep(1);
    }
  }, [location.key]);

  useEffect(() => {
    localStorage.setItem("carData", JSON.stringify(formData));
  }, [formData]);

  const availableModels = useMemo(() => {
    return manufacturer ? options.modelsByManufacturer[manufacturer] || [] : [];
  }, [manufacturer, options.modelsByManufacturer]);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleManufacturerChange = (e) => {
    const selectedManufacturer = e.target.value;

    setFormData((prev) => ({
      ...prev,
      manufacturer: selectedManufacturer,
      model: selectedManufacturer !== prev.manufacturer ? "" : prev.model,
    }));
  };

  const isStep1Valid = manufacturer.trim() !== "" && model.trim() !== "";

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isMarketValueValid =
    marketValue.trim() !== "" &&
    !isNaN(Number(marketValue)) &&
    Number(marketValue) > 0;

  const isStep2Valid =
    yearManufactured.trim() !== "" && isMarketValueValid && isEmailValid;

  const handleNext = () => {
    if (!isStep1Valid) return;
    localStorage.setItem("carData", JSON.stringify(formData));
    setStep(2);
  };

  const handleBack = () => {
    localStorage.setItem("carData", JSON.stringify(formData));
    setStep(1);
  };

  const showCarDetails = () => {
    if (!isStep2Valid) return;
    localStorage.setItem("carData", JSON.stringify(formData));
    navigate("/car-detail");
  };

  return (
    <>
      <div className="relative min-h-screen bg-[linear-gradient(180deg,rgba(123,188,254,1)_50%,rgba(255,255,255,1)_100%)]">
        <header className="fixed z-[8] w-full min-w-full border-b border-black/10 bg-[#7bbcfe]">
          <div className="mx-auto flex max-w-[1350px] items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <img
                src={assets.logo}
                alt="Easy Insurance"
                className="h-10 w-auto object-contain"
              />
            </div>

            <div className="flex items-center gap-10">
              <nav className="hidden items-center gap-8 md:flex">
                {header.navLinks.map((link, index) => (
                  <div key={`${link.label}-${index}`} className="flex items-center gap-2">
                    <a
                      href={link.href}
                      className="text-[15px] font-medium text-black"
                    >
                      {link.label}
                    </a>
                    {index === 2 && <ChevronDown size={16} className="text-black" />}
                  </div>
                ))}
              </nav>

              <button className="flex items-center gap-3 rounded-[4px] border-2 border-black px-4 py-2 text-black">
                <Phone size={18} strokeWidth={2.2} />
                <span className="text-[16px] font-medium">{header.phone}</span>
              </button>
            </div>
          </div>
        </header>

        <section
          className="bg-center bg-no-repeat bg-fixed pt-[120px]"
          style={{
            backgroundImage: `linear-gradient(rgba(123,188,254,0.6) 35%, rgba(255,255,255,1) 95%), url(${assets.bg})`,
          }}
        >
          <div className="mx-auto grid max-w-[1350px] grid-cols-1 items-center gap-10 px-5 py-14 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 flex w-full flex-wrap items-center justify-center gap-5">
                {trustBadges.map((badge, index) => {
                  if (badge.type === "doubleText") {
                    return (
                      <div key={`badge-${index}`} className={badge.className}>
                        <p className={badge.textClassName}>{badge.topText}</p>
                        <p className={badge.textClassName}>{badge.bottomText}</p>
                      </div>
                    );
                  }

                  return (
                    <div key={`badge-${index}`} className={badge.className}>
                      <span className={badge.textClassName}>{badge.text}</span>
                    </div>
                  );
                })}
              </div>

              <h1 className="w-full max-w-[700px] text-center text-[24px] font-extrabold leading-[1.167] text-[#000000de]">
                {hero.titleStart}{" "}
                <span className="font-black italic">{hero.titleHighlight}</span>
                <br />
                {hero.titleLine2}
                <br />
                {hero.titleLine3}
              </h1>

              <p className="mt-6 w-full max-w-[620px] text-center text-[18px] leading-[1.7] text-[#2b2b2b]">
                {hero.description}
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[470px] rounded-[28px] border border-[#d5d5d5] bg-[#f3f3f3] px-6 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.06)] md:px-8 md:py-7">
                <div className="mb-7 flex items-center justify-center">
                  <div className="flex w-full max-w-[250px] items-center">
                    <div className="flex flex-col items-center">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff1f72] text-[12px] font-semibold text-white">
                        {step > 1 ? "✓" : "1"}
                      </div>
                    </div>

                    <div className="mx-2 h-[1px] flex-1 bg-[#a9a9a9]" />

                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-semibold ${
                          step === 2
                            ? "bg-[#ff1f72] text-white"
                            : "bg-[#9d9d9d] text-white"
                        }`}
                      >
                        2
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6 flex items-center justify-center gap-[88px] text-[22px] font-medium text-black">
                  <span className="text-[15px] font-medium text-black">
                    {form.stepLabels[0]}
                  </span>
                  <span
                    className={`text-[15px] font-medium ${
                      step === 2 ? "text-black" : "text-[#8d8d8d]"
                    }`}
                  >
                    {form.stepLabels[1]}
                  </span>
                </div>

                {step === 1 ? (
                  <>
                    <div className="mb-2">
                      <div className="relative">
                        <select
                          value={manufacturer}
                          onChange={handleManufacturerChange}
                          className="h-[46px] w-full appearance-none rounded-[3px] border border-[#ff2b6d] bg-white px-3 pr-10 text-[14px] font-medium text-[#ff2b6d] outline-none"
                        >
                          <option value="">{form.placeholders.manufacturer}</option>
                          {options.manufacturers.map((item, index) => (
                            <option key={`${item}-${index}`} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8a8a]"
                        />
                      </div>
                      <p className="mt-2 text-[12px] text-[#ff2b6d]">
                        {manufacturer
                          ? form.helperText.manufacturerSelected
                          : form.helperText.manufacturerDefault}
                      </p>
                    </div>

                    <div className="mb-2 mt-4">
                      <div className="relative">
                        <select
                          value={model}
                          onChange={(e) => updateFormData("model", e.target.value)}
                          disabled={!manufacturer}
                          className={`h-[46px] w-full appearance-none rounded-[3px] border bg-white px-3 pr-10 text-[14px] outline-none ${
                            manufacturer
                              ? "border-[#bfbfbf] text-[#777]"
                              : "border-[#d5d5d5] text-[#b7b7b7]"
                          }`}
                        >
                          <option value="">{form.placeholders.model}</option>
                          {availableModels.map((item, index) => (
                            <option key={`${item}-${index}`} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#c1c1c1]"
                        />
                      </div>
                      <p className="mt-2 text-[12px] text-[#b1b1b1]">
                        {form.helperText.model}
                      </p>
                    </div>

                    <button
                      type="button"
                      disabled={!isStep1Valid}
                      onClick={handleNext}
                      className={`mt-5 h-[40px] w-full rounded-[10px] text-[14px] font-medium uppercase transition ${
                        isStep1Valid
                          ? "bg-[#ff1f72] text-white"
                          : "bg-[#dbdbdb] text-[#a7a7a7]"
                      }`}
                    >
                      {form.buttons.next}
                    </button>
                  </>
                ) : (
                  <>
                    <div className="mb-2">
                      <div className="relative">
                        <select
                          value={yearManufactured}
                          onChange={(e) => updateFormData("yearManufactured", e.target.value)}
                          className="h-[46px] w-full appearance-none rounded-[3px] border border-[#ff2b6d] bg-white px-3 pr-10 text-[14px] font-medium text-[#ff2b6d] outline-none"
                        >
                          <option value="">{form.placeholders.year}</option>
                          {options.years.map((year, index) => (
                            <option key={`${year}-${index}`} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8a8a]"
                        />
                      </div>
                      <p className="mt-2 text-[12px] text-[#ff2b6d]">
                        {form.helperText.year}
                      </p>
                    </div>

                    <div className="mb-2 mt-4">
                      <input
                        type="number"
                        value={marketValue}
                        onChange={(e) => updateFormData("marketValue", e.target.value)}
                        placeholder={form.placeholders.marketValue}
                        className="h-[46px] w-full rounded-[3px] border border-[#bfbfbf] bg-white px-3 text-[14px] text-[#666] outline-none placeholder:text-[#9e9e9e]"
                      />
                      <p className="mt-2 text-[12px] text-[#b1b1b1]">
                        {form.helperText.marketValue}
                      </p>
                    </div>

                    <div className="mb-2 mt-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder={form.placeholders.email}
                        className="h-[46px] w-full rounded-[3px] border border-[#bfbfbf] bg-white px-3 text-[14px] text-[#666] outline-none placeholder:text-[#9e9e9e]"
                      />
                      <p className="mt-2 text-[12px] text-[#b1b1b1]">
                        {form.helperText.email}
                      </p>
                    </div>

                    <button
                      type="button"
                      disabled={!isStep2Valid}
                      className={`mt-4 h-[40px] w-full rounded-[10px] text-[14px] font-medium uppercase transition ${
                        isStep2Valid
                          ? "bg-[#ff1f72] text-white"
                          : "bg-[#dbdbdb] text-[#a7a7a7]"
                      }`}
                      onClick={showCarDetails}
                    >
                      {form.buttons.showPlans}
                    </button>

                    <button
                      type="button"
                      onClick={handleBack}
                      className="mt-4 h-[40px] w-full rounded-[10px] bg-[#dddddd] text-[14px] font-medium uppercase text-black"
                    >
                      {form.buttons.back}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <Testimonial2 />
        <FAQCardsSection />
        <InsurancePartners />
        <TopCoverageFeatures />
        <HealthInsuranceTypes />
        <HealthInsuranceFeatures />
        <InsuredSteps />
      </div>

      <ContactBadge />
      <Footer />
    </>
  );
}