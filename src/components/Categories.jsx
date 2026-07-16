function Categories() {
  const categories = [
    "🎬 Movies",
    "📚 Books",
    "💼 Career",
    "🎵 Music",
    "🛍 Products",
    "🍽 Restaurants",
    "🎮 Games",
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <h2 className="text-3xl font-bold text-[#365C3B] text-center">
        Select Recommendation Category
      </h2>

      <p className="text-center text-gray-600 mt-3">
        Choose what you'd like AI to recommend for you.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 mt-10">

        {categories.map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl shadow-md border border-[#E8E2DA]
            hover:shadow-xl hover:scale-105 duration-300 cursor-pointer
            p-6 text-center"
          >
            <h3 className="font-semibold text-[#365C3B]">
              {item}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;