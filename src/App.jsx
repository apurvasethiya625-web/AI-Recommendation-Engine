import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PreferenceForm from "./components/PreferenceForm";

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navbar />

      <Hero />

      <Categories />

      <PreferenceForm />
    </div>
  );
}

export default App;