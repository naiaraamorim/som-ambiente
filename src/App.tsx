import Ambientes from "./components/ambientes"
import Pomodoro from "./components/pomodoro"


function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Header*/}
      <header className="flex justify-center py-6 px-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Som Ambiente
        </h1>
      </header>
      {/* Main Content */}
      <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <Pomodoro />
          </div>
          <div className="container mx-auto px-4 py-8">
            <Ambientes />
          </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 Som Ambiente. Todos os direitos reservados.
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
