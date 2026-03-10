import Navbar from "../components/Navbar"

function Home() {

  return (
    <div>

      <Navbar />

      <section className="h-screen flex items-center justify-center bg-gray-100">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-blue-700">
            Bennett University Alumni Network
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Connect with alumni, discover opportunities, and grow together.
          </p>

          <div className="mt-6 space-x-4">

            <a
              href="/register"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Join Network
            </a>

            <a
              href="/login"
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg"
            >
              Login
            </a>

          </div>

        </div>

      </section>

    </div>
  )

}

export default Home