'use client';

import { useState, useEffect } from 'react';

export default function Input({
    id,
    className,
    name,
    type = "text",
    label,
    onChange,
    size = "md",
    initialValue = "",
    disabled,
    options,
    getOptionInfo,
    isSearchable,
    underText,
    rounded = "",
    required,
}) {
    const htmlFor = id || name || label;

    const [valid, setValid] = useState(true);
    const [value, setValue] = useState(initialValue);
    const [isFocused, setIsFocused] = useState(false);
    const [onOptions, setOnOptions] = useState(false);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);


    const handleInputChange = (e) => {
        let newValue = e.target.value;

        if (type === "currency") {
            newValue = newValue.replace(/[^0-9.]/g, '');
        }

        setValue(newValue);
        onChange({ target: { name, value: newValue } });
    };

    const commonAttributes = {
        id: htmlFor,
        type: type,
        name: name,
        value: value,
        onChange: handleInputChange,
        onInvalid: (e) => {
            if (value) return;
            e.target.setCustomValidity("Este campo é obrigatório");
            setValid(false);
        },
        onInput: (e) => {
            e.target.setCustomValidity("");
            setValid(true);
        },
        className: `outline-none w-full h-full px-2 text-black ${(!valid ? " invalid:border-red-300" : "")}`,
        outline: "none",
        disabled: disabled,
        required: required
    };

    let correctLabel = (type == "datetime-local" || options > 0 || type == "file" || type == "date") ? true : false;
    let input = (<input {...commonAttributes} />);

    if (isSearchable && options && options.length > 0) {
        input = (
            <div
                className="z-4 grow"
            >
                <input {...commonAttributes}
                    className={`${commonAttributes.className} + h-full w-full`}
                    autoComplete="off"
                />
                <div className={"absolute top-full translate-y-[-1px] left-0 w-full bg-white border border-gray-300 rounded-b max-h-60 overflow-y-auto transition-all z-10 " +
                    (isFocused ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
                    onMouseEnter={() => setOnOptions(true)}
                    onMouseLeave={() => setOnOptions(false)}
                >
                    {options.filter(option => option.name.toLowerCase().includes((value || '').toLowerCase())).map((option) => {
                        return <div
                            key={option.id}
                            className={`p-2 text-left transition cursor-pointer
                                ${isFocused && !option.disabled ? "pointer-events-auto" : "pointer-events-none"}
                                ${option.disabled ? "opacity-60 bg-gray-100" : "hover:bg-gray-200"}
                            `}
                            onClick={() => {
                                if (option.disabled) return;
                                handleInputChange({ target: { value: option.name } });
                                setIsFocused(false);
                                getOptionInfo ? getOptionInfo(option) : "";
                            }}
                        >
                            {option.id} - {option.name}
                        </div>
                    }
                    )}
                </div>
                <div className='absolute right-1 top-1 p-2 bg-white z-2'
                    onClick={() => {
                        setTimeout(() => {
                            setValue("")

                        }, 0);
                    }}
                >

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2L8 8L2 2" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 14L8 8L14 14" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        );
    } else if (options && options.length > 0) {
        input = (<select {...commonAttributes}>
            <option key="padrao"
                value=""
                disabled
            >Selecione uma opção</option>

            {options.map((option) => (
                <option key={option.id}
                    value={option.id}
                    disabled={option.disabled}
                >
                    {option.name}
                </option>
            ))}
        </select>);

        correctLabel = true;
    } else if (type == "textarea") {
        input = (<div className='flex flex-col w-full h-full'>
            <div className={'w-full h-10 border-b flex flex-row gap-5 justify-start items-center p-2 pl-4 child:h-6 child:min-w-3  ' +
                (isFocused ? "border-blue-500" : "")}
            >
                <div className='font-bold'>B</div>
                <div className='italic'>I</div>
                <div className='underline'>U</div>

                <div>{/* Separator */}</div>

                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 18H9V16H4V18ZM4 11V13H14V11H4ZM4 6V8H19V6H4Z" fill="#312F2F" /></svg></div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 18H14.5V16H9.5V18ZM7 11V13H17V11H7ZM4.5 6V8H12H19.5V6H4.5Z" fill="#312F2F" /></svg></div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 18H21V16H16V18ZM11 11V13H16H21V11H11ZM6 6V8H13.5H21V6H6Z" fill="#312F2F" /></svg></div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 18H19V16H4V18ZM4 11V13H19V11H4ZM4 6V8H19V6H4Z" fill="#312F2F" /></svg></div>

                <div>{/* Separator */}</div>
            </div>
            <textarea {...commonAttributes} className='resize-none w-full p-2 h-full outline-none' />

        </div>);
        correctLabel = true;
    }

    return <div
        className={`relative outline outline-1 outline-offset-[-1px] rounded transition box-border bg-white flex items-center hover:outline-blue-500 h-10 ${(isFocused ? " outline-blue-500 outline-2 " : "outline-gray-300")} ${underText ? "mb-4" : ""} ${className} `}
        name={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
            if (!onOptions)
                setIsFocused(false)
        }}
    >


        {/* Input component */}
        {input}

        {/* Label component */}
        <label htmlFor={htmlFor}
            className={`absolute left-2 transition-all bg-white rounded whitespace-nowrap font-medium z-10
                ${((isFocused || value || correctLabel)
                    ? (' -top-2 text-xs px-1')
                    : (" top-2 text-base")
                )}
                ${isFocused
                    ? ' text-blue-500'
                    : ' text-gray-400'
                }
            `}
        >
            {label}
        </label>

        {/* Under text component */}
        {underText && <div className="absolute bottom-[-18px] text-xs text-left text-gray-400">{underText}</div>}
    </div>

}
