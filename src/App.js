import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ActiveNavContext, {
  ActiveNavProvider,
} from "./context/ActiveNavContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ScrollProvider } from "./context/ScrollContext";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <LanguageProvider>
        <ThemeProvider>
          <ScrollProvider>
            <ActiveNavProvider>
              {/* -- */}
              <HashRouter>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="characters"
                    element={
                      <>
                        <h2>Characters</h2>
                      </>
                    }
                  />
                  <Route
                    path="episodes"
                    element={
                      <>
                        <h2>Episodes</h2>
                      </>
                    }
                  />
                </Routes>
              </HashRouter>
              {/* -- */}
            </ActiveNavProvider>
          </ScrollProvider>
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
