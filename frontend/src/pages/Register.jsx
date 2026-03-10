function Register() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <input
          placeholder="Name"
          className="w-full border p-2 mb-3"
        />

        <input
          placeholder="Email"
          className="w-full border p-2 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
        />

        <button className="w-full bg-blue-700 text-white py-2 rounded">
          Register
        </button>

      </div>

    </div>

  )
}

export default Register