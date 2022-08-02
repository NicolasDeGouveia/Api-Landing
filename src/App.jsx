import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LinkBar from "./components/LinkBar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Started from "./components/Started";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LinkBar />
      <Main />
      <Started />
      <Footer />
    </div>
  );
}

export default App;
