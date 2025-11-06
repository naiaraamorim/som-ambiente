import Ambientes from "./components/ambientes"
import Pomodoro from "./components/pomodoro"
import logo from "./components/assets/svg/logo2.png"

function App() {

  return (
    <div className="min-h-screen bg-principal flex flex-col justify-between">

      {/* Header*/}
      <header className="flex py-4 px-4">
        <div className="flex items-center text-xl text-white sm:text-2xl font-bold">
          <img src={logo} alt="Timora" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" /> Timora
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1">
          <div className="flex justify-center px-4 py-8">
            <Pomodoro />
          </div>
          <div className="flex justify-center px-4 py-8">
            <Ambientes />
          </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 TribusTech. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Termos
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
