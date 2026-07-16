function Navbar() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-[#E7E2D8] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}

        <div>
          <h1 className="text-3xl font-bold text-[#365C3B]">
            AI Recommendation Engine
          </h1>

          <p className="text-sm text-gray-500">
            Personalized AI Recommendations
          </p>
        </div>

        {/* Menu */}

        <nav className="flex items-center gap-4">

          <button className="px-5 py-2 rounded-full bg-[#DCECCF] hover:bg-[#CDE4BE] duration-300">
            Preference Wizard
          </button>

          <button className="px-5 py-2 rounded-full bg-[#DCECCF] hover:bg-[#CDE4BE] duration-300">
            AI Advisor
          </button>

          <button className="px-5 py-2 rounded-full bg-[#DCECCF] hover:bg-[#CDE4BE] duration-300">
            Saved Library
          </button>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;