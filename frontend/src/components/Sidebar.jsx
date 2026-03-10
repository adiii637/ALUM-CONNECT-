import { Link } from "react-router-dom"

function Sidebar() {
  return (

    <div className="w-64 bg-blue-700 text-white min-h-screen p-6">

      <h2 className="text-2xl font-bold mb-8">
        AlumConnect
      </h2>

      <nav className="flex flex-col space-y-4">

        <Link to="/dashboard" className="hover:text-gray-200">
          Dashboard
        </Link>

        <Link to="/alumni" className="hover:text-gray-200">
          Alumni Directory
        </Link>

        <Link to="/jobs" className="hover:text-gray-200">
          Jobs
        </Link>

        <Link to="/events" className="hover:text-gray-200">
          Events
        </Link>

      </nav>

    </div>
  )
}

export default Sidebar