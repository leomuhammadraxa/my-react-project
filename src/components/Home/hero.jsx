import React from "react";
import HeartPulse from "../../assets/image.png";
import { useNavigate } from "react-router-dom";

const items = [
  { icon: HeartPulse, label: "Health Insurance" ,  route:'/health-insurance'},
  { icon: HeartPulse, label: "Travel Insurance" },
  { icon: HeartPulse, label: "Car Insurance",  route : '/car-insurance' },
  { icon: HeartPulse, label: "Term Life Insurance" },
  { icon: HeartPulse, label: "Employee Benefits" },
  { icon: HeartPulse, label: "Home Insurance" },
  { icon: HeartPulse, label: "Life Insurance" },
  { icon: HeartPulse, label: "Solar Insurance" },
];

function Hero() {
     const navigate = useNavigate();
  return (
    // <div className="w-full bg-gradient-to-b from-[#f4c04e] to-[#e9d9b5] py-16 text-center">
    <div className="w-full  bg-[linear-gradient(180deg,rgba(254,207,89,1)_25%,rgba(255,255,255,1)_100%)] py-16 text-center">

      
      <h1 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] mt-[150px]">
        ASANI KA <span className="text-pink-500">FILTER</span> LAGAO, LIFE KO EASY KARO!
      </h1>

      <p className="mt-4 text-[16px] text-gray-700 max-w-[700px] mx-auto">
        Compare & buy insurance plans online from the best insurance
        companies of Pakistan
      </p>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 max-w-[800px] mx-auto py-[23px] px-[185px]">
        {items.map((item, index) => (

          <div
           onClick={() => item.route && navigate(item.route)}
            key={index}
            className="flex flex-col items-center justify-center group cursor-pointer"
          >
            <div className="relative">
              
              {/* Image instead of component */}
              <img
                src={item.icon}
                alt={item.label}
                className="w-12 h-12 object-contain group-hover:scale-110 transition duration-300"
              />

              <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-pink-500 border-2 border-white"></span>
            </div>

            <p className="mt-3 text-[12px] font-medium text-gray-800 uppercase text-center leading-tight">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;