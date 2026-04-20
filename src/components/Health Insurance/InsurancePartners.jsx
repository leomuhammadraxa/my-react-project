import React from "react";
import ss from "../../assets/InsuranceImages/allianz.png"
import logo11 from "../../assets/InsuranceImages/jubileeLife.png";
import jubilee from "../../assets/InsuranceImages/jubilee.png";


const logos = [
  { name: "Jubilee General Insurance", src: ss },
  { name: "Allianz EFU", src: logo11 },
  { name: "Jubilee Life Insurance", src: "/logos/jubilee-life.png" },
  { name: "SPI Insurance", src: "/logos/spi-insurance.png" },
  { name: "IGI Life Vitality", src: jubilee },
];

export default function InsurancePartners() {
  return (
    <section className="bg-[#f3f3f3] py-10 md:py-14">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 items-center gap-y-8 gap-x-6 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-auto max-h-[70px] w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}