import React, { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Testimonial2 from "../Car Insurance/CarTestimonials";
import FAQCardsSection from "./HealthFAQ";
import InsurancePartners from "./InsurancePartners";
import bg from "../../assets/ss.png";
import TopCoverageFeatures from "./TopCoverageFeatures";
import HealthInsuranceTypes from "./HealthInsuranceTypes";
import HealthInsuranceFeatures from "./HealthInsuranceFeatures";
import InsuredSteps from "../Home/InsuredSteps";
import ContactBadge from "../Common/ContactBadge";
import Footer from "../Common/Footer";
import healthHeaderData from "../data/healthHeaderData";

export default function HealthInsuranceHero() {
  const navigate = useNavigate();

  const [selectedPlan, setSelectedPlan] = useState("INDIVIDUAL");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [showPlans, setShowPlans] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!age) {
      alert("Please select your age");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    navigate("/healthplanpage", {
      state: { selectedPlan, age, email },
    });

    console.log({
      selectedPlan,
      age,
      email,
    });

    alert("Form submitted successfully");
  };

  return (
    <>
      <div className="relative min-h-screen bg-[#7cc79f]">
        {/* Header */}
        <header className="fixed z-[8] w-full border-b border-black/10 bg-[#74c596]">
          <div className="mx-auto flex h-[100px] max-w-[2550px] items-center justify-between px-5">
            {/* LOGO */}
            <div
              className="flex cursor-pointer items-center"
              onClick={() => navigate("/")}
            >
              <img
                src={healthHeaderData.logo}
                alt="Easy Insurance"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-10">
              {/* NAV */}
              <nav className="hidden items-center gap-8 md:flex">
                {healthHeaderData.navLinks.map((link, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => navigate(link.path)}
                    className="text-[15px] font-medium text-black transition hover:text-[#ff2c55]"
                  >
                    {link.label}
                  </button>
                ))}

                {/* PLANS DROPDOWN */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowPlans(!showPlans)}
                    className="flex items-center gap-2 text-[15px] font-medium text-black transition hover:text-[#ff2c55]"
                  >
                    PLANS
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        showPlans ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showPlans && (
                    <div className="absolute left-1/2 top-full z-50 mt-3 w-[230px] -translate-x-1/2 border border-[#cfcfcf] bg-white py-4 shadow-sm">
                      {healthHeaderData.plans.map((plan, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setShowPlans(false);
                            if (plan.path && plan.path !== "#") {
                              navigate(plan.path);
                            }
                          }}
                          className="block w-full px-4 py-3 text-center text-[15px] font-medium uppercase hover:bg-[#f5f5f5]"
                        >
                          {plan.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </nav>

              {/* PHONE BUTTON */}
              <button className="flex items-center gap-3 rounded-[4px] border-2 border-black px-4 py-2 text-black transition hover:border-[#ff2c55]">
                <Phone size={18} strokeWidth={2.2} />
                <span className="text-[16px] font-medium">
                  {healthHeaderData.phone}
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section
          className="bg-fixed bg-center bg-no-repeat pt-[120px]"
          style={{
            backgroundImage: `linear-gradient(rgb(106 192 147 / 60%) 35%, rgb(255 255 255) 81%), url(${bg})`,
          }}
        >
          <div className="mx-auto grid max-w-[1350px] grid-cols-1 items-center gap-10 px-5 py-14 lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Trust Row */}
              <div className="mb-8 flex w-full flex-wrap items-center justify-center gap-5 text-center">
                <div className="flex h-[54px] w-[82px] items-center justify-center rounded-md bg-white shadow-sm">
                  <span className="text-[18px] font-extrabold text-[#1a3f95]">
                    VISA
                  </span>
                </div>

                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="text-[24px] text-[#7ac68d]">🛡</span>
                </div>

                <div className="text-left leading-tight">
                  <p className="text-[16px] font-semibold text-white">Trusted</p>
                  <p className="text-[16px] font-semibold text-white">Agency</p>
                </div>

                <div className="flex h-[54px] w-[82px] items-center justify-center rounded-md bg-[#043d89] shadow-sm">
                  <span className="text-[14px] font-bold text-white">
                    MasterCard
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="w-full max-w-[700px] text-center text-[24px] font-extrabold leading-[1.167] text-[#000000de] lg:text-center">
                Compare and purchase{" "}
                <span className="font-black italic">health insurance</span>
                <br />
                plans from 5 of the best health insurance
                <br />
                companies in PAKISTAN
              </h1>

              {/* Paragraph */}
              <p className="mt-6 w-full max-w-[620px] text-center text-[18px] leading-[1.7] text-[#2b2b2b] lg:text-center">
                Simply insert your ages, explore health Insurance options,
                <br />
                select the most suitable one and buy completely online!
              </p>
            </div>

            {/* Right Form Card */}
            <div className="flex justify-center lg:justify-end">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-[570px] rounded-[36px] bg-[#f4f4f4] p-6 shadow-md md:p-7"
              >
                {/* Tabs */}
                <div className="mb-6 grid grid-cols-3 overflow-hidden rounded-full bg-[#dbdbdb]">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan("INDIVIDUAL")}
                    className={`px-4 py-4 text-[15px] font-medium ${
                      selectedPlan === "INDIVIDUAL"
                        ? "bg-white text-black"
                        : "text-[#555]"
                    }`}
                  >
                    INDIVIDUAL
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan("FAMILY")}
                    className={`px-4 py-4 text-[15px] font-medium ${
                      selectedPlan === "FAMILY"
                        ? "bg-white text-black"
                        : "text-[#555]"
                    }`}
                  >
                    FAMILY
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan("PARENT")}
                    className={`px-4 py-4 text-[15px] font-medium ${
                      selectedPlan === "PARENT"
                        ? "bg-white text-black"
                        : "text-[#555]"
                    }`}
                  >
                    PARENT
                  </button>
                </div>

                {/* Select Age */}
                <div className="mb-2">
                  <label className="mb-2 block text-[20px] font-medium text-[#ff2c55]">
                    <span className="text-[22px]">*</span> Select Age
                  </label>

                  <div className="relative">
                    <select
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="h-[56px] w-full appearance-none rounded-[4px] border-2 border-[#ff2c55] bg-white px-4 pr-10 text-[16px] text-black outline-none"
                    >
                      <option value="">Select your age</option>
                      <option value="18-25">18 - 25</option>
                      <option value="26-35">26 - 35</option>
                      <option value="36-45">36 - 45</option>
                      <option value="46-55">46 - 55</option>
                      <option value="56-65">56 - 65</option>
                      <option value="66+">66+</option>
                    </select>

                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                  </div>
                </div>

                <p className="mb-8 text-[15px] text-[#ff2c55]">Your current age?</p>

                {/* Email Field */}
                <div className="mb-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email - Helps us connect with you."
                    className="h-[56px] w-full rounded-[4px] border border-[#cfcfcf] bg-white px-4 text-[16px] text-black outline-none placeholder:text-gray-400"
                  />
                </div>

                <p className="mb-8 text-[15px] text-[#9b9b9b]">
                  Please provide your email to help us get in contact with you.
                </p>

                {/* Next Button */}
                <button
                  type="submit"
                  className="h-[52px] w-full rounded-[14px] bg-[#ff2c55] text-[16px] font-medium uppercase tracking-wide text-white"
                >
                  NEXT
                </button>
              </form>
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