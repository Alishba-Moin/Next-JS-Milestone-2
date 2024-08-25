import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-3xl font-bold drop-shadow-lg">
          My Portfolio
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 lg:space-x-12 text-white font-semibold">
          <li className="hover:bg-gray-800 rounded-md transition-colors duration-300">
            <Link href="/" className="block px-4 py-2">Home</Link>
          </li>
          <li className="hover:bg-gray-800 rounded-md transition-colors duration-300">
            <Link href="/about" className="block px-4 py-2">About</Link>
          </li>
          <li className="hover:bg-gray-800 rounded-md transition-colors duration-300">
            <Link href="/contact" className="block px-4 py-2">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
