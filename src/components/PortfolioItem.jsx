import React from 'react'
import { useTheme } from '../context/ThemeContext'

const PortfolioItem = ({ title, imgUrl, stack, link }) => {

  const {darkMode} = useTheme()
  return (
    <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`border-2 rounded-md overflow-hidden ${ darkMode ? "border-gray-900 " : "border-white" } transition-all duration-700 ease-in-out`}
    >
        <img
        src={imgUrl}
        alt="portfolio" 
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
        <div className="w-full p-4">
            <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold ">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
            {stack.map(item => (
            <span className={`inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md ${ darkMode ? "border-gray-900 " : "border-white" } transition-all duration-700 ease-in-out`}>
            {item}
            </span>
            ))}
            </p>
        </div>
    </a>
  )
}

export default PortfolioItem