import React from "react";
import { Star, Quote } from "lucide-react";
import centerIcon from "../../assets/Testimonials/Vector1.svg";

const stats = [
  {
    number: "5000+",
    label: "people insured",
  },
  {
    number: "400000+",
    label: "comparisons done",
  },
];

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    text: "easiyinsurance provided the best advice and guidance to help us get the right insurance plan and proved to be the trusted platform we had been looking for. We would highly recommend their service.",
    name: "Mustafa & Suniya",
    role: "Founders - MauqaOnline",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    text: "easiyinsurance made the process of selecting the right policy very smooth. I always wanted to get life insurance but somehow dealing with agents and their non-stop follow up calls wasn't my cup of tea. easiyinsurance helped me make the right decision.",
    name: "Murtaza Zaidi",
    role: "CEO - CyberVision",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    text: "We needed health insurance for our team members but we didn't want to go through the hassles associated with the process. easiyinsurance got us the best, customized quotes and connected us to credible companies.",
    name: "Farukh Malik",
    role: "CEO - Diazetechlogix",
  },
];

function Testimonial2() {
  return (
    <section className="bg-white to-[#f4f4f4] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-[1100px]">
        {/* Top stats */}
        <div className="mb-10 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-24">
          <div className="text-center">
            <h3 className="text-[28px] font-extrabold leading-none text-[#ff0a78] md:text-[42px]">
              {stats[0].number}
            </h3>
            <p className="mt-2 text-[15px] font-semibold text-black">
              {stats[0].label}
            </p>
          </div>

      <div className="flex items-center justify-center">
  <img
    src={centerIcon}
    alt="center icon"
    className="h-[90px] w-[90px] object-contain md:h-[120px] md:w-[120px]"
  />
</div>

          <div className="text-center">
            <h3 className="text-[28px] font-extrabold leading-none text-[#ff0a78] md:text-[42px]">
              {stats[1].number}
            </h3>
            <p className="mt-2 text-[15px] font-semibold text-black">
              {stats[1].label}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-12 flex flex-col items-center justify-center gap-2 text-center">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c7b77d] bg-white shadow-sm">
              <Star className="h-5 w-5 text-[#ff0a78]" />
            </div>
            <div>
              <h4 className="text-[28px] font-extrabold leading-none text-[#1b1b1b]">
                4.9/5 ratings
              </h4>
              <p className="mt-1 text-[14px] font-semibold text-[#2a67ff]">
                Based on 81 customer reviews
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative rounded-sm border border-[#ff0a78] bg-[#f3f3f3] px-6 pb-8 pt-10 text-center"
            >
              {/* Profile image */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full border-4 border-[#f3f3f3] object-cover"
                />
              </div>

              {/* Quote */}
              <div className="mb-4 flex justify-center">
                <Quote className="h-8 w-8 fill-[#ff0a78] text-[#ff0a78]" />
              </div>

              <p className="mx-auto max-w-[280px] text-[13px] leading-6 text-[#6b6b6b]">
                {item.text}
              </p>

              <div className="mt-6">
                <h5 className="text-[14px] font-semibold text-[#5a5a5a]">
                  {item.name}
                </h5>
                <p className="mt-1 text-[12px] text-[#8c8c8c]">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial2;