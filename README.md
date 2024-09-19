````markdown
# ThemeSwitcher Component

**ThemeSwitcher** — це універсальний компонент перемикача теми (світла/темна), який можна використовувати в будь-якому проєкті. Він зберігає стан теми в `localStorage` і автоматично перемикає тему при завантаженні сторінки.

## Встановлення

1. Скопіюйте файли `ThemeSwitcher.jsx` і `ThemeSwitcher.module.css` в папку з компонентами вашого проєкту.
2. Встановіть необхідні залежності для роботи з іконками:

```bash
npm install react-icons
```
````

## Використання

### Базове використання

Для підключення компонента ThemeSwitcher у вашому проєкті:

```jsx
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  return (
    <div>
      <ThemeSwitcher />
      {/* Інші елементи сторінки */}
    </div>
  );
};

export default App;
```

### Параметри (props)

Компонент **ThemeSwitcher** підтримує кілька параметрів для налаштування:

- **initialTheme** (`string`, опціонально) — Початкова тема при завантаженні сторінки. За замовчуванням: `"light"`.
- **onThemeChange** (`function`, опціонально) — Колбек для обробки зміни теми. Повертає `"light"` або `"dark"` після зміни теми.
- **sunIcon** (`JSX.Element`, опціонально) — Іконка для світлої теми. За замовчуванням використовується іконка від `react-icons`.
- **moonIcon** (`JSX.Element`, опціонально) — Іконка для темної теми. За замовчуванням використовується іконка від `react-icons`.

### Приклад із кастомними іконками

Якщо ви хочете використовувати свої власні іконки для сонця і місяця:

```jsx
import { MyCustomSunIcon, MyCustomMoonIcon } from "./icons";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  return (
    <div>
      <ThemeSwitcher
        initialTheme="dark"
        sunIcon={<MyCustomSunIcon />}
        moonIcon={<MyCustomMoonIcon />}
        onThemeChange={(theme) => console.log(`Тема змінена на: ${theme}`)}
      />
    </div>
  );
};

export default App;
```

### Обробка зміни теми

Якщо ви хочете відстежувати зміни теми в вашому проєкті:

```jsx
const handleThemeChange = (theme) => {
  console.log("Current theme:", theme);
};

<ThemeSwitcher onThemeChange={handleThemeChange} />;
```

### Налаштування стилів

Компонент використовує модульні стилі з файлу `ThemeSwitcher.module.css`. Ви можете легко налаштувати їх під свої потреби, відредагувавши цей файл. Ось деякі ключові стилі:

- Фон перемикача (`background-color`).
- Іконки сонця та місяця (позиціонування і розмір).
- Анімація обертання іконок при перемиканні теми.

### Логіка збереження теми

Компонент зберігає вибрану тему в `localStorage`. При завантаженні сторінки тема автоматично відновлюється з локального сховища.

### Вимоги

- **React** версії 16.8 або новішої (потрібен `useState` і `useEffect`).
- **react-icons** для використання іконок (можна встановити через `npm install react-icons`).

### Ліцензія

Компонент є відкритим для використання та поширення відповідно до умов ліцензії MIT.

```

### Опис:

1. **Встановлення** — пояснюється, як скопіювати файли та встановити залежності.
2. **Використання** — наведено приклад базового використання компонента в іншому проєкті.
3. **Параметри (props)** — описуються всі параметри, які можна налаштувати через `props`.
4. **Кастомні іконки** — приклад використання власних іконок для теми.
5. **Обробка зміни теми** — як відстежувати зміни теми через колбек.
6. **Налаштування стилів** — інформація про те, які стилі можна налаштовувати.
7. **Логіка збереження теми** — пояснюється, як працює логіка збереження теми в `localStorage`.
8. **Вимоги** — зазначається, які бібліотеки потрібні для роботи.
9. **Ліцензія** — інформація про умови використання компонента.

```

# EmailForm Component

**EmailForm** — це універсальний компонент форми для надсилання електронних листів, який підтримує надсилання текстових повідомлень та файлів через сервіс EmailJS. Компонент легко налаштовується та може використовуватися в будь-якому React-проєкті. Також він підтримує перемикання теми (світла/темна) через CSS змінні або окремі файли стилів.

## Встановлення

1. Скопіюйте файли `EmailForm.jsx` і `EmailForm.module.css` у вашу папку з компонентами.
2. Скопіюйте файли темної та світлої теми (`light-theme.css` і `dark-theme.css`) у папку з темами або стилями вашого проєкту.
3. Встановіть EmailJS для інтеграції з вашим проєктом:

```bash
npm install emailjs-com

Створіть .env файл у корені проєкту та додайте ваші змінні для EmailJS:
makefile
Копіювати код

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id

Переконайтеся, що ці змінні доступні в середовищі вашого проєкту.

Використання
Базове використання
Після того, як компонент EmailForm буде доданий у ваш проєкт, ви можете використовувати його в будь-якому місці:

jsx
Копіювати код
import EmailForm from "./components/EmailForm";

const App = () => {
  return (
    <div>
      <EmailForm />
    </div>
  );
};

export default App;

Підключення тем
Існує два варіанти підключення тем:

Варіант 1: Імпорт файлів тем у основний файл стилів
Ви можете імпортувати файли темної та світлої теми у вашому основному файлі стилів, наприклад, в index.css:

css
Копіювати код

@import "./components/theme-switcher/light-theme.css";
@import "./components/theme-switcher/dark-theme.css";

Ці файли містять змінні CSS, які використовуються для перемикання теми через компонент ThemeSwitcher або через логіку зміни теми у вашому проєкті.

Варіант 2: Використання класу dark через логіку компонента
Компонент може самостійно керувати додаванням класу dark до елемента <html>, щоб змінювати тему без імпорту файлів стилів. Для цього достатньо переконатися, що в компоненті використовується логіка перемикання теми, наприклад:

jsx
Копіювати код

useEffect(() => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (!currentTheme) {
    document.documentElement.setAttribute("data-theme", "light");
  }
}, []);

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
};

Стилі для тем:
Стилі для світлої теми (light-theme.css):
css
Копіювати код

:root {
  --background-color: #ffffff;
  --text-color: #000000;
  --input-background-color: #ffffff;
  --input-text-color: #000000;
  --input-border-color: #cccccc;
  --button-bg-color: #132946;
  --button-text-color: white;
  --button-hover-bg-color: #244e86;
  --button-hover-text-color: #ffffff;
}

Стилі для темної теми (dark-theme.css):
css
Копіювати код

html.dark {
  --background-color: #1e1e1e;
  --text-color: #ccc;
  --input-background-color: #333;
  --input-text-color: #fff;
  --input-border-color: #555;
  --button-bg-color: #444;
  --button-text-color: #fff;
  --button-hover-bg-color: #666;
  --button-hover-text-color: #ffffff;
}

Надсилання файлів

Компонент EmailForm підтримує можливість надсилання файлів через EmailJS. Проте варто зазначити, що у безкоштовній версії EmailJS існує обмеження на розмір змінних (включаючи файли, закодовані у форматі base64) до 50KB.

Обмеження EmailJS:
Максимальний розмір змінних: 50KB.
Кодування файлів у форматі base64 додає приблизно 33% до початкового розміру файлу.
Якщо файл перевищує цей ліміт після кодування, EmailJS поверне помилку 413 Payload Too Large.
Що робити, якщо файл занадто великий:
Стиснути файл перед надсиланням.
Надіслати посилання на файл, завантаживши його до хмарного сховища (Google Drive, Dropbox, AWS S3 тощо).
Оновити до платного плану EmailJS.

Налаштування стилів
Компонент використовує модульні стилі з файлу EmailForm.module.css. Ви можете легко налаштувати їх під свої потреби. Також підтримується темна тема через CSS змінні або клас dark на елементі <html>.

Логіка відправки форми
Компонент використовує EmailJS для відправки даних форми (включаючи файл, якщо його додано). Після успішної відправки форму буде очищено.

Вимоги
React версії 16.8 або новішої (потрібен useState і useEffect).
EmailJS для надсилання електронних листів.
react-icons (опціонально для кастомних іконок).

Ліцензія
Компонент є відкритим для використання та поширення відповідно до умов ліцензії MIT.
```
