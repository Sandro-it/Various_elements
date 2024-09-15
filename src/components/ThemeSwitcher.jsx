// import { useState, useEffect } from "react";
// import { FaSun, FaMoon } from "react-icons/fa";
// import styles from "./styles/ThemeSwitcher.module.css"; // Підключаємо модульні стилі

// const ThemeSwitcher = () => {
//   // Перевіряємо, чи є збережене значення теми в localStorage
//   const savedTheme = localStorage.getItem("theme") === "dark";
//   const [isDarkMode, setIsDarkMode] = useState(savedTheme);

//   useEffect(() => {
//     // Встановлюємо клас для теми при завантаженні сторінки
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark"); // Зберігаємо тему в localStorage
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light"); // Зберігаємо тему в localStorage
//     }
//   }, [isDarkMode]);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={styles["theme-switcher"]}>
//       <input
//         type="checkbox"
//         id="switcher"
//         onChange={toggleTheme}
//         checked={isDarkMode}
//       />
//       <label htmlFor="switcher">
//         <span className={styles["slider"]}>
//           <FaSun className={styles.iconSun} />
//           <FaMoon className={styles.iconMoon} />
//         </span>
//       </label>
//     </div>
//   );
// };

// export default ThemeSwitcher;

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./styles/ThemeSwitcher.module.css"; // Підключаємо модульні стилі

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
