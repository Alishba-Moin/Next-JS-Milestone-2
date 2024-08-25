import Image from "next/image"


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex items-center justify-center flex-col pt-12 pb-8 text-center bg-gray-900">
        {/* Profile Image */}
        <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto mb-10">
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src="/img/img1.jpg" 
              alt="Profile Picture"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-4">
          Hi, I'm Alishba Moin, a web developer passionate about creating beautiful and functional websites.
        </p>
        <div className="mt-8">
          <a
            href="/about"
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            Learn More About Me
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Hi, I'm Alishba Moin</h2>
          <p className="text-lg text-gray-600 mb-3">
            I'm a web developer passionate about creating beautiful and functional websites.
            My goal is to build user-friendly and engaging digital experiences through modern web technologies.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Alishba Moin. All rights reserved.</p>
          <p className="text-sm text-gray-400">Designed & Developed by Alishba Moin</p>
        </div>
      </footer>
    </div>
  );
}

