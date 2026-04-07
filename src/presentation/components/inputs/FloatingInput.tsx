import { useState, type InputHTMLAttributes } from "react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value:string;
}

export const FloatingInput = ({ label, ...props }: FloatingInputProps) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || props.value.length > 0;

  return (
    <div className="relative w-full">
      <input
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full border border-gray-300 rounded-md px-3 py-3 text-gray-800 
                   focus:outline-none focus:border-violet-500 transition"
      />

      <label
        className={`
          absolute text-gray-400 transition-all
          ${isActive ? "text-xs top-1 right-3" : "text-gray-400 top-3 left-3"}
        `}
      >
        {label}
      </label>
    </div>
  );
};