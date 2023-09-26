"use client"

import { useState } from 'react'

interface FilterProps {
    categories: Array<string>
    onFilter: (category: string) => void
}

const Filter: React.FC<FilterProps> = ({categories, onFilter}) => {

    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleClick = (category: string) => {
        setSelectedCategory(category);
        onFilter(category)
    }

  return (
    <div className="flex justify-center items-center gap-[1rem] flex-wrap">
        {categories.map((category) => 
            <button key={category} onClick={() => handleClick(category)} className={`
                border-[1px]
                border-gray-400
                border-opacity-10
                box-border
                p-[7px]
                font-light
                text-sm
                ${selectedCategory === category ? 'bg-[#282828]' : 'bg-[#1a1a1a]'}
                hover:border-opacity-50
                transition
                rounded
                
            `}>
                {category}
            </button>)}
    </div>
  )
}

export default Filter