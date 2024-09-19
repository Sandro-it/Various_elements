import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./ThemeSwitcher.module.css"; // Підключаємо модульні стилі

const ThemeSwitcher = ({
  initialTheme = "light", // Початкова тема (за замовчуванням "light")
  onThemeChange = () => {}, // Колбек для обробки зміни теми
  sunIcon = <FaSun className={styles.iconSun} />, // Іконка сонця з прив'язкою стилів
  moonIcon = <FaMoon className={styles.iconMoon} />, // Іконка місяця з прив'язкою стилів
}) => {
  const savedTheme = localStorage.getItem("theme") || initialTheme;
  const [isDarkMode, setIsDarkMode] = useState(savedTheme === "dark");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      onThemeChange("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      onThemeChange("light");
    }
  }, [isDarkMode, onThemeChange]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles["theme-switcher"]}>
      <input
        type="checkbox"
        id="switcher"
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <label htmlFor="switcher">
        <span className={styles["slider"]}>
          {sunIcon}
          {moonIcon}
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;

//==============================================================================//

// import { useState, useEffect } from "react";
// import { FaSun, FaMoon } from "react-icons/fa";
// import styles from "./ThemeSwitcher.module.css";

// const ThemeSwitcher = ({ onThemeChange = () => {} }) => {
//   // Отримуємо збережену тему з localStorage або за замовчуванням "light"
//   const savedTheme = localStorage.getItem("theme") || "light";
//   const [isDarkMode, setIsDarkMode] = useState(savedTheme === "dark");

//   // Використовуємо useEffect для зміни теми під час завантаження сторінки
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       onThemeChange("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       onThemeChange("light");
//     }
//   }, [isDarkMode, onThemeChange]);

//   // Функція для перемикання теми
//   const toggleTheme = () => {
//     setIsDarkMode((prev) => !prev);
//   };

//   return (
//     <div className={styles.themeSwitcher}>
//       <input
//         type="checkbox"
//         id="theme-switcher"
//         onChange={toggleTheme}
//         checked={isDarkMode}
//       />
//       <label htmlFor="theme-switcher">
//         <span className={styles.slider}>
//           <FaSun className={styles.iconSun} />
//           <FaMoon className={styles.iconMoon} />
//         </span>
//       </label>
//     </div>
//   );
// };

// export default ThemeSwitcher;
