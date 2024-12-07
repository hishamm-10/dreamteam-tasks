import Link from 'next/link';

export default function Signup() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/signinback.jpg)' }} 
    >
      <div className="w-full max-w-md p-8 bg-black bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h1>

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-white font-semibold">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-white font-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-white font-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center text-gray-300">
          <span>Already have an account? </span>
          <Link href="/signin" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
