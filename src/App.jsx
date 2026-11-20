import AppRouter from './routers/AppRouter.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <header className="appHeader">
        <h1 className="appTitle">🎀 Películas ✨</h1>
        <p className="appSubtitle">Descubre las películas más populares 💖</p>
      </header>

      <main className="appMain">
        <AppRouter />
      </main>

      <Footer />
    </>
  )
}

export default App
