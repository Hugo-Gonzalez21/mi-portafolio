import { Routes, Route } from 'react-router-dom'
import Home from './pages/home' // Asegúrate de que la ruta sea correcta
import Navbar from './components/navbar' // Importa tu componente Navbar
import Footer from './components/footer' // Importa tu componente Footer
function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar /> 
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
