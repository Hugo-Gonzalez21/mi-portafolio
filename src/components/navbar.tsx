import React from 'react'

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 justify-between items-center p-5 shadow-md flex sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <img
                    src="https://i.pinimg.com/474x/4c/d1/2e/4cd12efe9fc3fb43929825826cef1b23.jpg"
                    alt="Avatar"
                    className="w-14 h-14 rounded-full border-2 border-[#FFC300]  shadow-lg "
                />
                <h1 className="font-bold text-lg text-[#FFC300] hover:text-slate-500 transition-colors duration-200">
                    Hugo González | Ingeniero en Informática
                </h1>
            </div>
            <div className="space-x-6 font-bold  text-[#FFC300]">
                <a href="#about" className="text-lg hover:text-slate-500 transition-colors duration-200">
                    Sobre Mi
                </a>
                <a href="#projects" className="text-lg hover:text-slate-500 transition-colors duration-200">
                    Proyectos
                </a>
                <a href="#contact" className="text-lg hover:text-slate-500 transition-colors duration-200">
                    Contacto
                </a>
            </div>

        </nav>
    )
}

export default Navbar
