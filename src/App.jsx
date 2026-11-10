import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import Cart from "./components/Cart"
import Pizza from "./components/Pizza"
import Footer from "./components/Footer"

function App() {
  // Vista actual: "home", "register", "login", "cart" o "pizza" (se cambia desde el Navbar y las tarjetas)
  const [view, setView] = useState("home")

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar onNavigate={setView} />
      {view === "home" && <Home onViewPizza={() => setView("pizza")} />}
      {view === "register" && <Register />}
      {view === "login" && <Login />}
      {view === "cart" && <Cart />}
      {view === "pizza" && <Pizza />}
      <Footer />
    </div>
  )
}

export default App
