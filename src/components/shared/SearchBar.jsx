import React from 'react'
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({className}) => {
  return (
    <div className={`flex items-center border border-primary-200 rounded-lg p-2 w-full ${className}`}>
       
        <FiSearch className="text-primary-200 text-lg" />
    
        <input
            type="text"
            placeholder="Search categories"
            className="flex-grow ml-2 outline-none text-primary-200 placeholder-primary-200"
        />
    </div>
  )
}

export default SearchBar