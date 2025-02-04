import React from 'react'
import PortfolioItem from './PortfolioItem'
import portfolio from '../data/portfolio'
import { useTheme } from '../context/ThemeContext'


function Portfolio() {

  const {darkMode} = useTheme()

  return (
    <div className={`py-10 flex flex-col md:flex-row items-center justify-center ${ !darkMode ? "bg-gray-900 text-white " : "bg-white text-gray-900" } transition-all duration-700 ease-in-out`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map(project => (
        <PortfolioItem 
        imgUrl={project.imgUrl}
        title={project.title}
        stack={project.stack}
        link={project.link}
        />
        ))}
      </div>
    </div>
  )
}

export default Portfolio