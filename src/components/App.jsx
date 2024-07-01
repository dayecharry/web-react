import { useContext } from "react";
import { TranslationContext } from "../context/intl.context";
import Header from "./Header/Header";

function App() {
  const { changeLocale, locale } = useContext(TranslationContext);

  const handleSelect = (ev) => {
    changeLocale(ev.target.value); //newLanguage
  };

  return (
    <>
      <h1>MUltilenguaje</h1>
      <select name="" id="" onChange={handleSelect}>
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
      <Header />
    </>
  );
}

export default App;
