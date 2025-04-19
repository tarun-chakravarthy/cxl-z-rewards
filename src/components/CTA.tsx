import React from "react";
import chevronRight from "../assets/chevron-right.svg";

interface CTAProps {
  href: string;
  text: string;
}

// Allow CTA hyperlinks
const CTA: React.FC<CTAProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-8 text-[14px] font-regular text-primary hover:underline"
    >
      <span className="max-w-[75%]">{text}</span>
      <img src={chevronRight} alt="icon" className="w-4 h-4" />
    </a>
  );
};

export default CTA;
