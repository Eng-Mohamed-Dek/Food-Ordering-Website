import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Allfoods from "./pages/Allfoods"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/allfoods" element={ <Allfoods /> } />
        <Route path="/orders" element={ <Orders /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App