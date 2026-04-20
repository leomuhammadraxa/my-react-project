import React, { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import ReviewDetailsCard from "./ReviewDetailsCard";
import PaymentDetailsCard from "./PaymentDetailsCard";

const getSavedVehicleFormData = () => {
  try {
    const saved = localStorage.getItem("vehicleInsuranceFormData");
    return saved
      ? JSON.parse(saved)
      : {
          firstName: "",
          lastName: "",
          gender: "",
          dateOfBirth: "",
          cnic: "",
          phone: "",
          email: "",
          createdNumber: "",
          residentialAddress: "",
          registrationNumber: "",
          registrationCity: "",
          surveyDate: "",
          timeSlot: "",
        };
  } catch (error) {
    console.error("Failed to parse vehicleInsuranceFormData:", error);
    return {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      cnic: "",
      phone: "",
      email: "",
      createdNumber: "",
      residentialAddress: "",
      registrationNumber: "",
      registrationCity: "",
      surveyDate: "",
      timeSlot: "",
    };
  }
};

export default function VehicleInsuranceForm() {
  const [steps, setSteps] = useState(2);

  const [formData, setFormData] = useState(getSavedVehicleFormData);

  useEffect(() => {
    localStorage.setItem("vehicleInsuranceFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    localStorage.setItem("vehicleInsuranceFormData", JSON.stringify(formData));
    setSteps(3);
  };

  const handleReset = () => {
    const emptyData = {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      cnic: "",
      phone: "",
      email: "",
      createdNumber: "",
      residentialAddress: "",
      registrationNumber: "",
      registrationCity: "",
      surveyDate: "",
      timeSlot: "",
    };

    setFormData(emptyData);
    localStorage.setItem("vehicleInsuranceFormData", JSON.stringify(emptyData));
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] px-3 py-4">
      <div className="mx-auto w-full max-w-[380px] overflow-hidden border border-[#cfcfcf] bg-[#f3f3f3]">
        {/* Top Card */}
        <div className="border-b border-[#cfcfcf] px-3 py-3">
          <div className="flex items-start justify-between">
            <div className="flex gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#1f7ae0] text-white">
                <span className="text-[10px] font-bold">🚗</span>
              </div>

              <div>
                <h2 className="text-[10px] font-semibold text-[#1e1e1e]">
                  Adamjee Insurance
                </h2>
                <p className="mt-1 text-[9px] text-[#4a4a4a]">Other - Auto</p>
              </div>
            </div>

            <div className="pt-[2px] text-right">
              <p className="text-[9px] text-[#4a4a4a]">
                Duration: <span className="text-[#9a9a9a]">1 year</span>
              </p>
            </div>
          </div>
        </div>

        {/* Stepper */}
        <div className="border-b border-[#cfcfcf] px-3 py-4">
          <div className="relative flex items-start justify-between">
            <div className="absolute left-[22px] right-[22px] top-[6px] h-[1px] bg-[#cfcfcf]" />

            <div className="relative z-10 flex w-[25%] flex-col items-center">
              <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#ff2c7d] text-[8px] text-white">
                ✓
              </div>
              <span className="mt-2 text-center text-[7px] text-[#777]">
                select plan
              </span>
            </div>

            <div className="relative z-10 flex w-[25%] flex-col items-center">
              <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#ff2c7d] text-[8px] font-medium text-white">
                2
              </div>
              <span className="mt-2 text-center text-[7px] text-[#777]">
                enter details
              </span>
            </div>

            <div className="relative z-10 flex w-[25%] flex-col items-center">
              <div
                className={`flex h-3 w-3 items-center justify-center rounded-full text-[8px] text-white ${
                  steps >= 3 ? "bg-[#ff2c7d]" : "bg-[#a8a8a8]"
                }`}
              >
                3
              </div>
              <span
                className={`mt-2 text-center text-[7px] ${
                  steps >= 3 ? "text-[#777]" : "text-[#999]"
                }`}
              >
                review
              </span>
            </div>

            <div className="relative z-10 flex w-[25%] flex-col items-center">
              <div
                className={`flex h-3 w-3 items-center justify-center rounded-full text-[8px] text-white ${
                  steps >= 4 ? "bg-[#ff2c7d]" : "bg-[#a8a8a8]"
                }`}
              >
                4
              </div>
              <span
                className={`mt-2 text-center text-[7px] ${
                  steps >= 4 ? "text-[#777]" : "text-[#999]"
                }`}
              >
                done
              </span>
            </div>
          </div>
        </div>

        {/* STEP 2 FORM */}
        {steps === 2 && (
          <div className="px-3 py-3">
            <form
              id="vehicle-insurance-form"
              className="space-y-2"
              onSubmit={handleNextStep}
            >
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 text-[8px] outline-none placeholder:text-[#9a9a9a]"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 text-[8px] outline-none placeholder:text-[#9a9a9a]"
                />
              </div>

              <p className="text-[6px] text-[#8a8a8a]">Same as on CNIC/Passport</p>

              <div className="grid grid-cols-2 gap-2">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 text-[8px] text-[#6f6f6f] outline-none"
                >
                  <option value="">Gender *</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <div className="relative">
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 pr-6 text-[8px] text-[#6f6f6f] outline-none"
                  />
                  <CalendarDays className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-[#8f8f8f]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleChange}
                  placeholder="CNIC *"
                  className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 text-[8px] outline-none placeholder:text-[#9a9a9a]"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 (3__) ________"
                  className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 text-[8px] outline-none placeholder:text-[#9a9a9a]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 text-[8px] outline-none placeholder:text-[#9a9a9a]"
                />
                <input
                  type="text"
                  name="createdNumber"
                  value={formData.createdNumber}
                  onChange={handleChange}
                  placeholder="Created Number *"
                  className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 text-[8px] outline-none placeholder:text-[#9a9a9a]"
                />
              </div>

              <input
                type="text"
                name="residentialAddress"
                value={formData.residentialAddress}
                onChange={handleChange}
                placeholder="Residential Address *"
                className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 text-[8px] outline-none placeholder:text-[#9a9a9a]"
              />

              <div className="pt-2">
                <h3 className="mb-2 text-[11px] font-semibold text-[#2a2a2a]">
                  Vehicle Details
                </h3>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    placeholder="Car Registration Number *"
                    className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 text-[8px] outline-none placeholder:text-[#9a9a9a]"
                  />
                  <input
                    type="text"
                    name="registrationCity"
                    value={formData.registrationCity}
                    onChange={handleChange}
                    placeholder="Registration City *"
                    className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 text-[8px] outline-none placeholder:text-[#9a9a9a]"
                  />
                </div>

                <p className="mt-2 text-[7px] leading-[1.4] text-[#707070]">
                  Survey of your car has to be conducted before providing
                  coverage. What time slot suits you?{" "}
                  <span className="text-[#999]">(optional)</span>
                </p>

                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="relative">
                    <input
                      type="date"
                      name="surveyDate"
                      value={formData.surveyDate}
                      onChange={handleChange}
                      className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 pr-6 text-[8px] text-[#6f6f6f] outline-none"
                    />
                    <CalendarDays className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-[#8f8f8f]" />
                  </div>

                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="h-[20px] w-full border border-[#bdbdbd] bg-transparent px-2 text-[8px] text-[#6f6f6f] outline-none"
                  >
                    <option value="">Time Slot</option>
                    <option value="9 AM - 12 PM">9 AM - 12 PM</option>
                    <option value="12 PM - 3 PM">12 PM - 3 PM</option>
                    <option value="3 PM - 6 PM">3 PM - 6 PM</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="h-[18px] min-w-[45px] bg-[#ff2c7d] px-2 text-[7px] font-semibold uppercase text-white"
                >
                  reset fields
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="text-[7px] font-medium uppercase text-[#8f8f8f]"
                  >
                    back
                  </button>
                  <button
                    type="submit"
                    className="h-[18px] min-w-[30px] bg-[#ff2c7d] px-3 text-[7px] font-semibold uppercase text-white"
                  >
                    next
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* STEP 3 */}
        {steps === 3 && (
          <ReviewDetailsCard
            onBack={() => setSteps(2)}
            onNext={() => setSteps(4)}
          />
        )}

        {/* STEP 4 */}
        {steps === 4 && <PaymentDetailsCard onBack={() => setSteps(3)} />}
      </div>
    </div>
  );
}