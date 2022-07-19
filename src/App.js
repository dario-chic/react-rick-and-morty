import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModalWindow from "./components/ModalWindow";
import { ActiveNavProvider } from "./context/ActiveNavContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ScrollProvider } from "./context/ScrollContext";
import { ThemeProvider } from "./context/ThemeContext";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
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
                  {/*------------------*/}
                  <Route path="/" element={<Home />}>
                    <Route
                      path="character/:id"
                      element={<ModalWindow url="/" type={"character"} />}
                    />
                  </Route>
                  {/*------------------*/}
                  <Route path="characters" element={<Characters />}>
                    <Route
                      path="character/:id"
                      element={
                        <ModalWindow url="/characters" type={"character"} />
                      }
                    />
                  </Route>
                  {/*------------------*/}
                  <Route path="episodes" element={<Episodes />}>
                    {" "}
                    <Route
                      path="episode/:id"
                      element={
                        <ModalWindow type={"episode"} url={"/episodes"} />
                      }
                    />
                  </Route>
                  {/*------------------*/}
                  <Route
                    path="*"
                    element={
                      <>
                        <h2>Otro lao</h2>
                      </>
                    }
                  />
                </Routes>

                <Footer />
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
