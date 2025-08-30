import "./App.css";
import "./index.css";
/* import { LoadingScreen } from "./components/LoadingScreen"; */
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./context/useTheme";
/* import MobileMenu from "./components/MobileMenu"; */
/* import { Home } from "./components/sections/Home"; */
/* import { About } from "./components/sections/About"; */
/* import { Projects } from "./components/sections/Projects"; */
/* import { Contact } from "./components/sections/Contact"; */

function App() {
  /* const [isLoaded, setIsLoaded] = useState(true); */
  /* const [menuOpen, setMenuOpen] = useState(false); */

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} */}
      {/* <div
        className={`min-h-screen transition-opacity duration-700 opacity-${
          isLoaded ? "100" : "0"
        } bg-black text-gray-100`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div> */}
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
