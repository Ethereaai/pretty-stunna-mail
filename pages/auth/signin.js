import Link from 'next/link';

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
          PS
        </div>
        <h1 className="mt-4 text-2xl font-bold">Pretty Stunna Mail</h1>
        <p className="text-gray-600 mt-1 mb-4">Sign in to access your exclusive fashion mail</p>
        <form className="space-y-3 text-left">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input type="email" defaultValue="david@prettystunna.fashion" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-2 rounded-lg font-semibold">
            Sign In
          </button>
        </form>
        <div className="text-sm text-blue-500 mt-4 hover:underline">
          <Link href="/inbox">Demo: Skip login and go to mail directly</Link>
        </div>
        <hr className="my-4" />
        <p className="text-xs text-gray-500">
          <strong>Exclusive Team Access</strong><br />
          This email system is exclusively available to Pretty Stunna team members with @prettystunna.fashion email addresses.<br />
          Please reach out to your administrator if you require an account.
        </p>
        <p className="text-xs text-gray-400 mt-4">
          © 2025 Pretty Stunna Fashion. All rights reserved.<br />
          prettystunna.fashion
        </p>
      </div>
    </div>
  );
}
