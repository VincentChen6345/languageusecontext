import "./App.css";
import LanguageSwitch from "./LanguageSwitch";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <LanguageSwitch />
    </LanguageProvider>
  );
}

export default App;
