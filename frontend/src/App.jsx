import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import StudentDashboard from "./pages/StudentDashboard"
import AlumniDirectory from "./pages/AlumniDirectory"
import Jobs from "./pages/Jobs"
import Events from "./pages/Events"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/alumni" element={<AlumniDirectory />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/events" element={<Events />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App