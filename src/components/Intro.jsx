import React from 'react'
import BotonDescargarCV from './BotonDescargarCV'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

function Intro() {

  const {darkMode} = useTheme()

  return (
    <div className={`p-5 ${ !darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900" } transition-all duration-700 ease-in-out`}>
      <ThemeToggle/>
      <div className={`flex flex-col items-center text-center pt-30`}>

          <h1 className={`text-6xl`}>Gianlucca Bolocco</h1>

          <p className='mx-10 my-15 max-w-4xl text-xl'>
              Soy un estudiante de ingeniería en sistemas en la Universidad Tecnológica Nacional, regional Buenos Aires. Lorem ipsum dolor sit, amet consectetur adipisicing elit...
          </p>

          <BotonDescargarCV/>
      </div>    
    </div>

  )
}

export default Intro
