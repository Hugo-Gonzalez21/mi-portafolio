import React from 'react'
const Home: React.FC = () => {
    return (
        <>
            <section className="relative h-[650px] flex justify-center items-center to-indigo-600 text-white p-8">
                <div className="flex flex-col items-center gap-6">
                    <h1 className='text-6xl font-extrabold text-center'>Ingeniero en Informática</h1>
                    <h1 className='text-6xl font-bold text-[#FFC300] text-center'>Hugo González</h1>
                    <div className="flex gap-4 mt-2 ">
                        <a href="https://github.com/Hugo-Gonzalez21" target="_blank" rel="noopener noreferrer"  className="inline-block p-2 rounded-full hover:bg-[#FFC300]" 
                        aria-label="GitHub">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="white"
                            >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hugo-gonzalez21" target="_blank" rel="noopener noreferrer" className="inline-block p-2 rounded-full hover:bg-[#FFC300]" 
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="white"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <section className="relative  flex justify-center items-center to-indigo-600 text-white p-8">
                <div className="flex flex-col items-center" >
                    <h1 id='about' className="text-4xl font-extrabold text-white mb-4 text-center">
                        ¡Acerca de mi!
                    </h1>
                    <p className="mt-4 text-lg max-w-2xl text-center">
                        Estudiante de Ingeniería en Informática en Duoc UC, apasionado por el desarrollo web y móvil.
                        Actualmente busco una oportunidad laboral para adquirir experiencia y desarrollar mis habilidades en el ámbito profesional.
                    </p>

                    <div className='flex flex-wrap justify-center mt-4 gap-4 w-[650px]'>
                        <span className='font-bold rounded-full p-2 px-4 '>HTML</span>
                        <span className='font-bold rounded-full p-2 px-4 '>CSS</span>
                        <span className='font-bold rounded-full p-2 px-4 '>Bootstrap</span>
                        <span className='font-bold rounded-full p-2 px-4 '>Tailwind CSS</span>
                        <span className='font-bold rounded-full p-2 px-4 '>React</span>
                        <span className='font-bold rounded-full p-2 px-4 '>TypeScript</span>
                        <span className='font-bold rounded-full p-2 px-4 '>Django</span>
                    </div>

                </div>
            </section>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            
        </>


    )
}

export default Home
