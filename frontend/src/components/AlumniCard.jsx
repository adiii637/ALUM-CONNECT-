function AlumniCard({ name, company, role, location, image }) {

  return (

    <div className="bg-white rounded-lg shadow-md p-6 text-center">

      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />

      <h2 className="text-xl font-bold">
        {name}
      </h2>

      <p className="text-gray-600">
        {role} @ {company}
      </p>

      <p className="text-gray-500">
        {location}
      </p>

      <div className="mt-4 flex justify-center gap-3">

        <button className="bg-blue-700 text-white px-4 py-1 rounded">
          View Profile
        </button>

        <button className="border border-blue-700 text-blue-700 px-4 py-1 rounded">
          Mentorship
        </button>

      </div>

    </div>

  )
}

export default AlumniCard