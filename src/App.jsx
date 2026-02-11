import "./App.css";
import Details from "./components/Details";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen w-full text-white bg-black px-4 overflow-x-hidden xl:px-8">
      <Navbar />
      <Hero />
      <Details />
    </main>
  );
}

export default App;
