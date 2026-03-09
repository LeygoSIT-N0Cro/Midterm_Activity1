import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Students from "./pages/Students"
import StudentDetails from "./pages/StudentDetails"
import About from "./pages/About"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/StudentDetails" element={<StudentDetails />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  )
}

export default App