import Home from "./components/Home"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Steper from "./components/Steper"
import Pricing from "./components/Pricing"

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Steper />
      <Pricing />
      <Footer />
    </div>
  )
}