import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 opacity-${
          isLoaded ? "100" : "0"
        } bg-black text-gray-100`}
      >
        <NavBar />
      </div>
    </>
  );
}

export default App;
