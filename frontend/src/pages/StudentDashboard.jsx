import DashboardLayout from "../layout/DashboardLayout"

function StudentDashboard() {

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">
            Alumni
          </h2>
          <p className="text-gray-600">
            Explore alumni network
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">
            Jobs
          </h2>
          <p className="text-gray-600">
            Find opportunities
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">
            Events
          </h2>
          <p className="text-gray-600">
            Alumni meetups
          </p>
        </div>

      </div>

    </DashboardLayout>

  )
}

export default StudentDashboard