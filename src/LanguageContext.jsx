import React, { useContext, useState } from "react";

const LanguageContext = React.createContext();
const SwitchLanguageContext = React.createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}
export function useSwitchLanguage() {
  return useContext(SwitchLanguageContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("english");
  const switchLanguage = () => {
    setLanguage("chinese");
  };

  return (
    <LanguageContext.Provider value={language}>
      <SwitchLanguageContext.Provider value={switchLanguage}>
        {children}
      </SwitchLanguageContext.Provider>
    </LanguageContext.Provider>
  );
}
