import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 text-white">
      <main className="container mx-auto p-8 bg-gray-900 rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 animate-fade-in">
          About Me
        </h1>

        <section className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8 transition-transform transform hover:-translate-y-2">
          <h2 className="text-4xl font-bold text-teal-400 mb-4 border-b-4 border-blue-500 pb-2 flex items-center space-x-2">
            <span>👤</span>
            <span>Who I Am</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hello! I'm Alishba Moin, a passionate web developer with a background in Information Technology (IT).
             <br/>
            I specialize in using modern web technologies to build user-friendly and responsive websites. 
            <br/>
            My goal is to create digital experiences that are not only functional but also visually appealing.
          </p>
        </section>

        <section className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8 transition-transform transform hover:-translate-y-2">
          <h2 className="text-4xl font-bold text-teal-400 mb-4 border-b-4 border-blue-500 pb-2 flex items-center space-x-2">
            <span>💻</span>
            <span>My Skills</span>
          </h2>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-6">
            <li>
              <h3 className="text-xl font-semibold">Front-End Development</h3>
              <ul className="mt-2 ml-4 space-y-2 text-gray-400">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
              </ul>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Back-End Development</h3>
              <ul className="mt-2 ml-4 space-y-2 text-gray-400">
                <li>Node.js</li>
              </ul>
            </li>
          </ul>
        </section>

        <div className="text-center mt-8">
        <Link href="/contact">
          <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            Contact Me
          </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
