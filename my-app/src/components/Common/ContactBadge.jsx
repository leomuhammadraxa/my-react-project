import React from "react";
import { Phone } from "lucide-react";

import contactImg from "../../assets/ContactUs/contactus.svg"; // adjust path if needed

export default function ContactBadge() {
  return (
 <img
  src={contactImg}
  alt="Contact"
  className="w-[60%] md:w-[40%] lg:w-[30%] mx-auto my-[80px] object-contain "
/>
  );  
}