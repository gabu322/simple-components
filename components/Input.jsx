'use client';

import { useState, useEffect } from 'react';

const sizeConfig = {
    sm: {
        base: "h-8 text-sm",
        inputMargin: "m-1.5",
        labelSelected: "-top-1.5 text-xs",
        labelUnselected: "top-1.5 text-sm",
        underText: "bottom-[-15px] text-xs",
        underTextMargin: "mb-3"
    },
    md: {
        base: "h-10 text-base",
        inputMargin: "m-2",
        labelSelected: "-top-2 text-xs",
        labelUnselected: "top-2 text-base",
        underText: "bottom-[-16px] text-xs",
        underTextMargin: "mb-3.5"
    },
    lg: {
        base: "h-12 text-xl",
        inputMargin: "m-3",
        labelSelected: "-top-3 text-base",
        labelUnselected: "top-2.5 text-xl pl-1",
        underText: "bottom-[-19px] text-sm",
        underTextMargin: "mb-4"
    },
    xl: {
        base: "h-14 text-2xl",
        inputMargin: "m-4",
        labelSelected: "-top-3.5 text-lg",
        labelUnselected: "top-3.5 text-2xl pl-1",
        underText: "bottom-[-22px] text-base",
        underTextMargin: "mb-5"
    }
};

export default function Input({
    id,
    className,
    name,
    type = "text",
    label,
    onChange,
    initialValue = "",
    disabled,
    underText,
    required,
    validationMessage = "Este campo é obrigatório",
    size = "md"
}) {

    const [valid, setValid] = useState(true);
    const [value, setValue] = useState(initialValue);
    const [isFocused, setIsFocused] = useState(false);
    const htmlFor = id || name;
    let sizes = sizeConfig[size] || sizeConfig["md"];

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleInputChange = (e) => {
        let newValue = e.target.value;
        setValue(newValue);
        if (onChange) onChange({ target: { name, value: newValue } });
    };

    const handleInvalid = (e) => {
        if (value) return;
        e.target.setCustomValidity(validationMessage);
        setValid(false);
    };

    const handleInput = (e) => {
        e.target.setCustomValidity("");
        setValid(true);
    };

    return <div
        className={`flex items-center relative box-border outline outline-offset-[-1px] rounded transition text-black ${sizes.base}
            ${isFocused ? " outline-blue-500 outline-2 " : "outline-gray-300 outline-1"}
            ${!valid ? "invalid:border-red-300" : ""}
            ${underText ? sizes.underTextMargin : ""}
            ${disabled ? "bg-gray-200 border-gray-500 cursor-not-allowed" : "cursor-text bg-white  hover:outline-blue-500"}
            ${className || ""}
        `}
        name={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={() => document.getElementById(htmlFor).focus()}
    >

        <input
            id={htmlFor}
            className={`outline-none w-full ${sizes.inputMargin} ${(!valid ? " invalid:border-red-300" : "")}`}
            type={type}
            name={name}
            value={value}
            onChange={handleInputChange}
            onInvalid={handleInvalid}
            onInput={handleInput}
            disabled={disabled}
            required={required}
            aria-invalid={!valid}
            aria-required={required}
        />

        {label &&
            <label
                htmlFor={htmlFor}
                className={`absolute transition-all rounded whitespace-nowrap font-medium left-2 z-10
                    ${isFocused || value || type == "date" ? (sizes.labelSelected) + " px-1 cursor-default" : sizes.labelUnselected + " cursor-text"}
                    ${isFocused ? 'text-blue-500' : 'text-gray-400'}
                    ${disabled ? 'bg-gray-200' : 'bg-white'}
                `}
            >
                {label}
            </label>
        }

        {underText &&
            <div className={`absolute left-1.5 ${sizes.underText} text-left text-gray-400`}>{underText}</div>
        }
    </div>;
}
