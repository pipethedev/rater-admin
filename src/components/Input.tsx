import React, { ReactElement, MouseEvent } from "react"
export interface IFormType {
    input?: string
    error?: string
}

export const initInput: IFormType = { input: "", error: "" }
interface InputIconProps {
    TrailingIcon?: () => JSX.Element
    Loadingicon?: () => JSX.Element
}
interface Iprops {
    type?: "text" | "email" | "password" | "date" | "radio" | "tel" | "number" | "search" | "file"
    label?: string
    value?: string
    placeholder?: string
    name?: string
    children?: ReactElement
    onChange?: Function
    onBlur?: Function
    onClick?: Function
    onKeyDown?: Function
    onKeyPress?: Function
    required?: boolean
    requiredMsg?: string
    error?: string
    disabled?: boolean
    additionalInfo?: string
    className?: string
    autoCorrect?: boolean
    full?: boolean
    checked?: boolean
    divStyle?: string
    labelStyle?: string
    minLength?: number
    maxLength?: number
    TrailingIcon?: Function | any
    searchIcon?: boolean
}
const Input = ({
    type = "text",
    label = "",
    value = "",
    placeholder = "",
    name = "name",
    children,
    onChange = () => { },
    onBlur = () => { },
    onClick = () => { },
    onKeyPress = () => { },
    onKeyDown = () => { },
    required = true,
    requiredMsg = "",
    error = "",
    disabled = false,
    className = "",
    checked = false,
    divStyle = "",
    labelStyle = "",
    maxLength,
    minLength,
    TrailingIcon = null,
    searchIcon
}: Iprops & InputIconProps) => {

    const input = (
        <input
            className={className}
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            required={required}
            onChange={(e) => onChange(e)}
            onBlur={(e) => onBlur(e)}
            onClick={(e) => onClick(e)}
            onKeyDown={(e) => onClick(e)}
            onKeyPress={(e) => onClick(e)}
            disabled={disabled}
            checked={checked}
            maxLength={maxLength}
            minLength={minLength}
        />
    )

    // return (
    //     <fieldset className="w-full space-y-1">
    //         {label && <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>}
    //         <div className="relative">
    //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                     <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#02123B" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M20.9999 20.9999L16.6499 16.6499" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
    //                 </svg>
    //             </div>
    //             <input type="search" id="default-search" className="w-full lg:w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500" {...{ placeholder }} required />
    //         </div>
    //     </fieldset>
    // )

    return (
        <div className={`form-input space-y-1 ${divStyle} ` + (error && "error")}>
            <div>

            <label htmlFor={name} className={`block font-semibold text-sm text-[#000000]  ${labelStyle}`}>
            {" "}{" "} &nbsp;&nbsp;&nbsp;&nbsp;{label}
                <p className="text-[#EB0000] inline">{`${requiredMsg}`}</p>
                </label>

            </div>
            <div className="relative">
                {searchIcon &&
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#02123B" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.9999 20.9999L16.6499 16.6499" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                }
                {input}
            </div>
            <span>{error}</span>
        </div>
    )
}

export default Input
