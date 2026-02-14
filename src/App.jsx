import "./App.css";
import Booking from "./components/Booking";
import Care from "./components/Care";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen w-full text-white bg-black px-4 overflow-x-hidden text-xl xl:px-8">
      <Navbar />
      <Hero />
      <Details />
      <Care />
      <Booking />
      <Footer />
    </main>
  );
}

export default App;
