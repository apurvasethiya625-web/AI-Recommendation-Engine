import { useState } from "react";

function PreferenceForm() {
  const [message, setMessage] = useState("");

  const handleGenerate = () => {
    setMessage("✅ AI Recommendations Generated Successfully!");
  };

  return (
    <section className="max-w-4xl mx-auto mt-24 mb-20 bg-white rounded-3xl shadow-lg border border-[#E6E1D8] p-10">

      <h2 className="text-4xl font-bold text-[#355E3B] text-center">
        Tell us your Preferences
      </h2>

      <p className="text-center text-gray-500 mt-2">
        We'll use AI to generate personalized recommendations.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div>
          <label className="font-semibold">Category</label>

          <select className="w-full mt-2 border rounded-xl p-3">
            <option>Movies</option>
            <option>Books</option>
            <option>Career</option>
            <option>Music</option>
            <option>Products</option>
            <option>Restaurants</option>
            <option>Games</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Mood</label>

          <select className="w-full mt-2 border rounded-xl p-3">
            <option>Happy</option>
            <option>Excited</option>
            <option>Relaxed</option>
            <option>Motivated</option>
            <option>Curious</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="font-semibold">
            Describe what you're looking for
          </label>

          <textarea
            rows="5"
            placeholder="Example: I want motivational books about entrepreneurship..."
            className="w-full mt-2 border rounded-xl p-3"
          ></textarea>
        </div>

      </div>

      <div className="text-center mt-8">

       <button
  onClick={() => alert("AI Recommendation Generated!")}
  className="bg-[#6E9F72] hover:bg-[#5B8960] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
>
  ✨ Generate AI Recommendations
</button>

        {message && (
          <div className="mt-8 bg-green-100 border border-green-300 rounded-xl p-5">
            <h3 className="text-2xl font-bold text-green-700">
              {message}
            </h3>

            <p className="text-gray-700 mt-2">
              Your AI recommendation feature is now working.
            </p>
          </div>
        )}

      </div>

    </section>
  );
}

export default PreferenceForm;