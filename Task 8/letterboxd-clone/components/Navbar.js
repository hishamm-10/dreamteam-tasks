import Link from 'next/link'; // For navigation between pages

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/logofr1.png"
            alt="Letterboxd"
            className="w-10 h-auto mr-3"
          />
          <span className="text-white text-xl">Letterboxd</span>
        </Link>
      </div>

      <ul className="flex space-x-6 text-white">
        <li><Link href="/signup">Sign Up</Link></li>
        <li><Link href="/signin">Sign In</Link></li>
        <li><Link href="/films">Films</Link></li>
        <li><Link href="/members">Members</Link></li>
        <li><Link href="/lists">Lists</Link></li>
      </ul>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-lg bg-gray-700 text-white"
        />
        <button className="text-white">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </nav>
  );
}
