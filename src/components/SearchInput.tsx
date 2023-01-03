import React from 'react'

interface SearchInputProps {
    placeholder: string
    label?: string

}

const SearchInput = ({ placeholder, label }: SearchInputProps) => {
    return (
        <form>
            {label && <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#02123B" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.9999 20.9999L16.6499 16.6499" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <input type="search" id="default-search" className="w-full lg:w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...{ placeholder }} required />
            </div>
        </form>
    )
}

export default SearchInput
