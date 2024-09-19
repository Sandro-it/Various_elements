import ThemeSwitcher from "./components/theme-switcher/ThemeSwitcher";
import EmailForm from "./components/email-form/EmailForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Використовуємо компонент ThemeSwitcher */}
      <ThemeSwitcher />
      {/* Можливо інші елементи вашого додатку */}
      <EmailForm />
    </div>
  );
}

export default App;
