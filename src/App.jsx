import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LinkBar from "./components/LinkBar";
import { LinksProvider } from "./utils/LinksContext";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Started from "./components/Started";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LinksProvider>
        <LinkBar />
        <Main />
      </LinksProvider>
      <Started />
      <Footer />
    </div>
  );
}

export default App;
