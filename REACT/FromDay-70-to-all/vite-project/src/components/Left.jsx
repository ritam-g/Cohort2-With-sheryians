import React from 'react';

function Left({ name, setName, email, setEmail, handleFormSubmit }) {
  return (
    <div className="left w-[50%] h-[80%] flex items-center justify-center p-6">
      {/* Attach handleSubmit to the form tag */}
      <form onSubmit={handleFormSubmit} className="h-full w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl flex flex-col gap-6 items-center justify-center p-10 border border-gray-800">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-white mb-2">Get Started</h2>
        </div>

        <div className="w-full relative">
          <input
            value={name} // Two-way binding
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Your Name"
            required
            className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white outline-none focus:border-blue-500 transition-all"
          />
        </div>

        <div className="w-full relative">
          <input 
            value={email} // Two-way binding
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your Email"
            required
            className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white outline-none focus:border-blue-500 transition-all"
          />
        </div>

        <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Left;