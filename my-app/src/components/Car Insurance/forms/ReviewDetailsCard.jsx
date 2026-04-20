import React from "react";
import reviewDetailsCardData from "../../data/reviewDetailsCardData";

const getSavedCarData = () => {
  try {
    const saved = localStorage.getItem("carData");
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error("Failed to parse carData:", error);
    return {};
  }
};

const getSavedVehicleFormData = () => {
  try {
    const saved = localStorage.getItem("vehicleInsuranceFormData");
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error("Failed to parse vehicleInsuranceFormData:", error);
    return {};
  }
};

export default function ReviewDetailsCard({ onBack, onNext }) {
  const { header, planDetails, buttons } = reviewDetailsCardData;

  const carData = getSavedCarData();
  const vehicleData = getSavedVehicleFormData();

  return (
    <div className="min-h-screen overflow-y-auto bg-[#efefef] px-4 py-6">
      <div className="mx-auto w-full max-w-[570px] bg-[#f7f7f7] px-[20px] pb-[18px] pt-[18px]">
        {/* Header */}
        <div className="mb-[18px] flex items-center justify-between border-b border-[#d4d4d4] pb-[12px]">
          <img
            src={header.logo}
            alt="Logo"
            className="h-[40px] w-auto object-contain"
          />

          <div className="flex items-center gap-6">
            {header.navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-[12px] font-semibold uppercase text-[#2f2f2f] transition hover:text-[#ff0a6c]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* PLAN DETAILS */}
        <h2 className="mb-[24px] text-center text-[18px] font-extrabold uppercase text-[#2f2f2f]">
          {planDetails.sectionTitle}
        </h2>

        <div className="flex items-center justify-between">
          <div className="space-y-[7px] text-[15px] text-[#2f2f2f]">
            <p className="font-extrabold">{planDetails.companyName}</p>
            <p className="font-extrabold">{planDetails.planName}</p>

            <p>
              <span className="font-extrabold">{planDetails.durationLabel}</span>
              <span className="ml-2">{planDetails.durationValue}</span>
            </p>

            <p>
              <span className="font-extrabold">{planDetails.priceLabel}</span>
              <span className="ml-2">
                {carData.marketValue ? `PKR ${carData.marketValue}` : "N/A"}
              </span>
            </p>
          </div>

          <img
            src={header.logo}
            alt={planDetails.companyName}
            className="w-[75px] object-contain"
          />
        </div>

        <div className="mt-[16px] border-t border-[#d4d4d4]" />

        {/* PERSONAL DETAILS */}
        <h2 className="mb-[18px] mt-[12px] text-center text-[18px] font-extrabold uppercase text-[#2f2f2f]">
          PERSONAL DETAILS
        </h2>

        <div className="grid grid-cols-2 gap-x-[34px]">
          <div className="space-y-[8px] text-[15px] text-[#2f2f2f]">
            <p><b>First Name:</b> {vehicleData.firstName || "-"}</p>
            <p><b>Last Name:</b> {vehicleData.lastName || "-"}</p>
            <p><b>Gender:</b> {vehicleData.gender || "-"}</p>
            <p><b>Date of Birth:</b> {vehicleData.dateOfBirth || "-"}</p>
            <p><b>CNIC:</b> {vehicleData.cnic || "-"}</p>
            <p><b>Phone:</b> {vehicleData.phone || "-"}</p>
            <p><b>Email:</b> {vehicleData.email || carData.email || "-"}</p>
          </div>

          <div className="space-y-[8px] text-[15px] text-[#2f2f2f]">
            <p><b>Created Number:</b> {vehicleData.createdNumber || "-"}</p>
            <p><b>Address:</b> {vehicleData.residentialAddress || "-"}</p>
            <p><b>Car Brand:</b> {carData.manufacturer || "-"}</p>
            <p><b>Car Model:</b> {carData.model || "-"}</p>
            <p><b>Year:</b> {carData.yearManufactured || "-"}</p>
            <p><b>Registration No:</b> {vehicleData.registrationNumber || "-"}</p>
            <p><b>Registration City:</b> {vehicleData.registrationCity || "-"}</p>
            <p><b>Survey Date:</b> {vehicleData.surveyDate || "-"}</p>
            <p><b>Time Slot:</b> {vehicleData.timeSlot || "-"}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-[16px] flex justify-end gap-[10px]">
          <button
            onClick={onBack}
            className="text-[11px] font-medium uppercase text-[#555]"
          >
            {buttons.back}
          </button>

          <button
            onClick={onNext}
            className="rounded bg-[#ff0a6c] px-[14px] py-[6px] text-[11px] font-bold uppercase text-white"
          >
            {buttons.next}
          </button>
        </div>
      </div>
    </div>
  );
}