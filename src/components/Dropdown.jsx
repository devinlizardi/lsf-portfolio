import { useState, useEffect, useRef } from "react";
import { DropdownWindow } from "./DropdownWindow";

/* eslint-disable react/prop-types */
const Dropdown = ({ text, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <details
        className="group"
        open={isOpen}
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary
          className="px-2 h-5 sm:h-7 border-2 border-[#868686] rounded-full flex items-center justify-center gap-1 mb-1 hover:bg-[#999999] cursor-pointer list-none"
        >
          <p>{text}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            className="w-4 sm:w-5 stroke-[#6D6D6D] group-open:rotate-180 transition-all duration-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </summary>
        <DropdownWindow options={options} />
      </details>
    </div>
  );
};

export { Dropdown };
