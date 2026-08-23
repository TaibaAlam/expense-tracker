import { useState } from 'react'

const FilterButton = ({ category, selected, onClick }) => {  
    return (
        <div
            onClick={onClick}
            className={`
                w-[13%] text-center py-2 rounded-full transition-all duration-200 cursor-pointer
                ${
                    selected
                    ? "bg-brand-300 text-white"
                    : "bg-transparent hover:bg-brand-200 hover:text-white border border-white/20"
                }
            `}
        >
            {category}
        </div>
    )
}

export default FilterButton