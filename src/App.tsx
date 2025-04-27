import CarInsuranceDisplay from "./components/CarInsuranceDisplay"


function App() {

  return (
    <>
      <header className="bg-slate-200 p-10">

        <div className="mx-auto max-w-7xl flex justify-between items-center">

          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-blue-600">Seguros<span className="text-red-600">Rapido</span>.mx</h1>
          </div>

          <nav className="hidden md:flex space-x-4 justify-center items-center p-2 ">
            <a className="hover:text-blue-500 hover:font-semibold" href="#">Notoros</a>
            <a className="hover:text-blue-500 hover:font-semibold" href="#">Tipos de Seguros</a>
            <a className="hover:text-blue-500 hover:font-semibold" href="#">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto md:px-10">
          <CarInsuranceDisplay />
      </section>

    </>
  )
}

export default App
