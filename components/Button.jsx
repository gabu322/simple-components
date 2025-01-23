const bgColors = {
   blue: { bg: "bg-blue-600", hover: "bg-blue-700" },
   red: { bg: "bg-red-500", hover: "bg-red-600" },
   green: { bg: "bg-green-600", hover: "bg-green-700" },
   yellow: { bg: "bg-yellow-300", hover: "bg-yellow-400" },
   orange: { bg: "bg-orange-400", hover: "bg-orange-500" },
   black: { bg: "bg-black", hover: "bg-gray-800" }
}

export default function Button({
   className,
   type,
   onClick,
   color = "blue",
   bgColor,
   hoverColor,
   text,
   textColor = "text-white",
   children,
   rounded,
   disabled
}) {
   const colors = bgColors[color];
   const bg_color = bgColor || colors.bg;
   const hover_color = hoverColor || colors.hover;

   return <button
      type={type ?? "button"}
      className={`flex items-center justify-center relative h-10 px-3 shadow-sm transition-all duration-200 cursor-pointer font-semibold text-sm ${textColor} ${className} ${bg_color} ${hover_color} ${rounded ? "rounded-full" : "rounded"}`}
      onClick={onClick}
      disabled={disabled}
   >
      {children || text}
   </button>;
}
