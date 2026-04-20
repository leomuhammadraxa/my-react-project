import React from "react";
import { Phone } from "lucide-react";
import footerData from "../data/footerData";

function Footer() {
  const {
    logo,
    description,
    addresses,
    legalLinks,
    businessHours,
    aboutLinks,
    insuranceLinks,
    travelInsurance,
    healthInsurance,
    carInsurance,
    manufacturers,
    copyright,
  } = footerData;

  return (
    <footer className="bg-black px-6 py-14 text-white">
      <div className="mx-auto max-w-[1200px]">

        {/* TOP */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* LEFT */}
          <div>
            <img src={logo} alt="logo" className="mb-4 w-[220px]" />

            <p className="text-[12px] text-gray-300">{description}</p>

            <p className="mt-4 text-[11px] text-gray-400">
              <span className="font-semibold text-white">Correspondence:</span>{" "}
              {addresses.correspondence}
            </p>

            <p className="mt-1 text-[11px] text-gray-400">
              <span className="font-semibold text-white">Registered:</span>{" "}
              {addresses.registered}
            </p>

            {/* LEGAL */}
            <div className="mt-4 flex gap-2 text-[11px] text-sky-400">
              {legalLinks.map((item, i) => (
                <span key={i}>
                  <a href={item.path}>{item.label}</a>
                  {i < legalLinks.length - 1 && " • "}
                </span>
              ))}
            </div>

            {/* BUSINESS HOURS */}
            <div className="mt-6">
              <h3 className="font-bold">Business Timings</h3>
              <p className="text-gray-300 text-[12px]">{businessHours.days}</p>
              <p className="text-gray-400 text-[12px]">{businessHours.time}</p>
            </div>

            {/* HELP */}
            <div className="mt-6 space-y-2 text-[12px] text-gray-300">
              <div>WhatsApp</div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                +92 310 2788349
              </div>
              <div>Chat with us</div>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-4 text-[11px] font-bold uppercase">About Us</h4>
              {aboutLinks.map((item, i) => (
                <p key={i} className="text-sky-400 text-[12px]">{item}</p>
              ))}
            </div>

            <div>
              <h4 className="mb-4 text-[11px] font-bold uppercase">Insurance</h4>
              {insuranceLinks.map((item, i) => (
                <p key={i} className="text-sky-400 text-[12px]">{item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 grid gap-10 md:grid-cols-4">

          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase">
              Travel Insurance
            </h4>
            {travelInsurance.map((item, i) => (
              <p key={i} className="text-sky-400 text-[11px]">{item}</p>
            ))}
          </div>

          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase">
              Health Insurance
            </h4>
            {healthInsurance.map((item, i) => (
              <p key={i} className="text-sky-400 text-[11px]">{item}</p>
            ))}
          </div>

          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase">
              Car Insurance
            </h4>
            {carInsurance.map((item, i) => (
              <p key={i} className="text-sky-400 text-[11px]">{item}</p>
            ))}
          </div>

          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase">
              Manufacturers
            </h4>
            {manufacturers.map((item, i) => (
              <p key={i} className="text-sky-400 text-[11px]">{item}</p>
            ))}
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t pt-6 text-[11px] text-gray-400">
          {copyright}
        </div>
      </div>
    </footer>
  );
}

export default Footer;