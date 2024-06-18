import Link from 'next/link';

export default function Button({
    children,
    href,
    type,
    onClick,
    width,
    height,
    square,
    color = "bg-blue-500 hover:bg-blue-600",
    className,
    transparent,
    blank,
    textColor,
    text,
    icon,
    disabled
}) {


    if (textColor == "black") {
        textColor = " text-black";
    } else if (textColor == "red") {
        textColor = " text-red-500";
    } else if (textColor == "green") {
        textColor = " text-green-500";
    } else if (textColor == "yellow") {
        textColor = " text-yellow-500";
    } else if (textColor == "gray") {
        textColor = " text-gray-500";
    } else if (textColor == "pink") {
        textColor = " text-pink-500";
    } else {
        textColor = " text-white";
    }

    if (transparent || color == "transparent") {
        color = "bg-transparent";
        textColor = " text-black font-bold";
    } else if (color == "red") {
        color = "bg-red-500 hover:bg-red-600";
    } else if (color == "green") {
        color = "bg-green-500 hover:bg-green-600";
    } else if (color == "yellow") {
        color = "bg-yellow-500 hover:bg-yellow-600";
    } else if (color == "gray") {
        color = "bg-gray-500 hover:bg-gray-600";
    } else if (color == "pink") {
        color = "bg-pink-500 hover:bg-pink-600";
    } else if (color == "white") {
        color = "bg-white hover:bg-gray-100";
    } else if (color == "black") {
        color = "bg-black hover:bg-gray-800";
    }


    if (square) {
        width = "40px";
        height = "40px";
    }


    return <button
        type={type ?? "button"}
        className={`px-3 rounded drop-shadow transition-all duration-200 cursor-pointer font-semibold text-sm flex-r-2 items-center justify-center ${color} ${textColor} ${className}`}
        style={{
            whiteSpace: " nowrap",
            height: height ?? "40px",
            flex: "0 0 auto"
        }}
        onClick={onClick}
        disabled={disabled}
    >
        {children}

        {href && (<Link href={href} target={blank ? "_blank" : ""} className='top-0 left-0 absolute w-full h-full' />)}
    </button>
}
