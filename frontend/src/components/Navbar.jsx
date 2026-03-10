import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between">

      <h1 className="text-xl font-bold">
        AlumConnect
      </h1>

      <div className="space-x-6">

        <Link to="/" className="hover:text-gray-200">Home</Link>

        <Link to="/alumni" className="hover:text-gray-200">Alumni</Link>

        <Link to="/jobs" className="hover:text-gray-200">Jobs</Link>

        <Link to="/events" className="hover:text-gray-200">Events</Link>

        <Link to="/login" className="bg-white text-blue-700 px-4 py-1 rounded">
          Login
        </Link>

      </div>

    </nav>
  )
}

export default Navbar