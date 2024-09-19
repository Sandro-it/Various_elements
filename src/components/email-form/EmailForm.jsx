import { useState, useEffect } from "react";
import styles from "./EmailForm.module.css";
import emailjs from "emailjs-com"; // Імпортуємо EmailJS

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    fileName: "",
    fileData: null, // Додаткове поле для збереження даних файлу
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (!currentTheme) {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          fileName: file.name,
          fileData: reader.result.split(",")[1], // Зберігаємо дані файлу в base64
        });
      };
      reader.readAsDataURL(file); // Читаємо файл як data URL
    }
  };

  const validateForm = () => {
    const formErrors = {};

    if (!formData.name || formData.name.length < 3) {
      formErrors.name = "Ім'я має бути не менше 3 символів.";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Невірний формат електронної пошти.";
    }

    if (!formData.message || formData.message.length < 10) {
      formErrors.message = "Повідомлення повинно містити не менше 10 символів.";
    }

    return formErrors;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      fileName: "",
      fileData: null,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);

      // Параметри для відправки листа через EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        file: formData.fileData
          ? `data:application/octet-stream;base64,${formData.fileData}`
          : "", // Додаємо файл у форматі base64
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(
          (response) => {
            console.log("Лист відправлений!", response.status, response.text);
            resetForm(); // Очищаємо форму після успішної відправки
          },
          (error) => {
            console.log("Виникла помилка при відправці листа:", error);
          }
        );
    } else {
      setErrors(formErrors);
      setIsSubmitted(false);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Ім'я та прізвище</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={handleFocus}
          className={errors.name ? styles.inputError : ""}
          placeholder="Введіть своє ім'я та прізвище"
          autoComplete="name"
        />
        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Електронна пошта</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={handleFocus}
          className={errors.email ? styles.inputError : ""}
          placeholder="Введіть свою електронну пошту"
          autoComplete="email"
        />
        {errors.email && (
          <span className={styles.errorText}>{errors.email}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Повідомлення</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={handleFocus}
          className={errors.message ? styles.inputError : ""}
          placeholder="Введіть текст повідомлення"
          rows="5"
          autoComplete="off"
        ></textarea>
        {errors.message && (
          <span className={styles.errorText}>{errors.message}</span>
        )}
      </div>

      <div className={`${styles.formGroup} ${styles.fileGroup}`}>
        <label htmlFor="file" className={styles.fileLabel}>
          <span className={styles.fileButton}>Вибрати файл</span>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className={styles.fileInput}
            autoComplete="off"
          />
        </label>
        {formData.fileName && (
          <span className={styles.fileName}>{formData.fileName}</span>
        )}
      </div>

      <button type="submit" className={styles.submitButton}>
        Надіслати
      </button>

      {isSubmitted && <p>Форма успішно відправлена!</p>}
    </form>
  );
};

export default EmailForm;
