import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";
import NavBar from "./components/NavBar";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 opacity-${
          isLoaded ? "100" : "0"
        } bg-black text-gray-100`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </>
  );
}

export default App;
