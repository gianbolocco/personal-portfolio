import React from 'react'

function DownloadCV() {
  return (

<div class="relative inline-flex  group">
    <div
        class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
    </div>
    <a
    href="/cv.pdf" // Ruta del archivo en la carpeta public
    download="Mi_CV.pdf"
    class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-950 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
    >Download CV</a>
</div>
  )
}

export default DownloadCV