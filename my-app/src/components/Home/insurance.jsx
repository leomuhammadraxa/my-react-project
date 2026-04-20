

    import React from "react"


// import your logo images here
import logo1 from "../../assets/InsuranceImages/Askari-Insurance.png";
import logo2 from "../../assets/InsuranceImages/allianz.png";
import logo3 from "../../assets/InsuranceImages/jubileeLife.png";
import logo4 from "../../assets/InsuranceImages/jubilee.png";
import logo5 from "../../assets/InsuranceImages/allianz.png";
import logo6 from "../../assets/InsuranceImages/Askari-insurance.png";
import logo7 from "../../assets/InsuranceImages/jubileeLife.png";
import logo8 from "../../assets/InsuranceImages/allianz.png";
import logo9 from "../../assets/InsuranceImages/Askari-insurance.png";
import logo10 from "../../assets/InsuranceImages/Askari-insurance.png";
import logo11 from "../../assets/InsuranceImages/jubileeLife.png";
import logo12 from "../../assets/InsuranceImages/jubileeLife.png";
import logo13 from "../../assets/InsuranceImages/allianz.png";
import logo14 from "../../assets/InsuranceImages/allianz.png";
import logo15 from "../../assets/InsuranceImages/allianz.png";


const topRowLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  

];

const bottomRowLogos = [];


   function InsurancePartners() {
    return(
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1100px] px-4 text-center">
        <h2 className="mb-10 text-[22px] font-semibold leading-tight text-[#1f2a44] md:text-[30px] ">
          Insurance companies -{" "}
          <span className="font-bold">
            ‘Our Insurance Providing Partners’
          </span>
        </h2>

        {/* Top row */}
        <div className="mb-8 flex flex-wrap  gap-[45px] items-center justify-center gap-x-10 gap-y-10 md:gap-x-10">
          {topRowLogos.map((logo, index) => (
            <div
              key={index}
              className="flex h-[48px] w-[72px] items-center justify-center"
            >
              <img
                src={logo}
                alt={`Insurance partner ${index + 1}`}
                className="max-h-full max-w-full object-contain grayscale  hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {bottomRowLogos.map((logo, index) => (
            <div
              key={index}
              className="flex h-[56px] w-[110px] items-center justify-center"
            >
              <img
                src={logo}
                alt={`Insurance partner bottom ${index + 1}`}
                className="max-h-full max-w-full object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsurancePartners;
        
