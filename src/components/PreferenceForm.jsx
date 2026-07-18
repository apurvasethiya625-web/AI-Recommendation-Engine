import axios from "axios";
import { useState } from "react";

function PreferenceForm() {
  const [message, setMessage] = useState("");
  const [genre, setGenre] = useState("Comedy");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/recommend",
        {
          genre: genre,
          top_n: 5,
        }
      );

      setRecommendations(response.data);
      setMessage("✅ AI Recommendations Generated Successfully!");
    } catch (error) {
      console.error(error);
      alert("❌ Backend connection failed!");
    } finally {
      setLoading(false);
    }
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
          <label className="font-semibold">Genre</label>

          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full mt-2 border rounded-xl p-3"
          >
            <option>Comedy</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Romance</option>
            <option>Adventure</option>
            <option>Horror</option>
            <option>Sci-Fi</option>
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
          onClick={handleGenerate}
          className="bg-[#6E9F72] hover:bg-[#5B8960] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
        >
          {loading ? "Generating..." : "✨ Generate AI Recommendations"}
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

        {recommendations.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4">
              Recommended Movies
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {recommendations.map((movie, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-5 shadow-lg bg-white"
                >
                  <h4 className="text-lg font-bold">
                    {movie.title}
                  </h4>

                  <p className="text-gray-600 mt-2">
                    {movie.genres}
                  </p>

                  <p className="text-yellow-600 font-semibold mt-2">
                    ⭐ {movie.rating}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </section>
  );
}

export default PreferenceForm;