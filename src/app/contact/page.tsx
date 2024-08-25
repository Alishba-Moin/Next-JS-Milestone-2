
export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <main className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Contact Me</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none  focus:ring-blue-500 transition duration-300"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none  focus:ring-blue-500 transition duration-300"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

