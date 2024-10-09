import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Asegúrate de que este archivo existe
import NavMenu from "./components/NavMenu.jsx"; // Ajuste aquí
import Section from "./components/Section.jsx"; // Ajuste aquí
import Footer from "./components/Footer.jsx"; // Ajuste aquí

function App() {
  return (
    <div>
      <NavMenu />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
