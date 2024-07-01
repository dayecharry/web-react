import { createContext, useState } from "react";
import esMessages from "../lang/es.json";
import enMessages from "../lang/en.json";
import { IntlProvider } from "react-intl";
//creamos el contexto
export const TranslationContext = createContext();
const messageContext = {
  es: esMessages,
  en: enMessages,
};
//  le damos valor al contexto
const TranslationProvider = ({ children }) => {
  const [locale, setLocale] = useState("es"); // lenguaje seleccionado por el usuario
  const [messages, setMessages] = useState(messageContext.es); // el contenido del JSON que corresponda con el lenguaje

  const changeLocale = (newLanguage) => {
    setLocale(newLanguage);
    setMessages(messageContext[newLanguage]);
  };
  return (
    <TranslationContext.Provider value={{ changeLocale, locale }}>
      <IntlProvider locale={locale} messages={messages}>
        {children} {/*<App />*/}
      </IntlProvider>
    </TranslationContext.Provider>
  );
};
export default TranslationProvider;
