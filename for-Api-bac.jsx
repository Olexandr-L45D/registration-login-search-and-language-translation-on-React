// 5. Повна інтеграція
// У вашому проєкті:
// Використовуйте i18next для статичного тексту.
// Для динамічних даних перекладайте текст через API або створіть базу даних із локалізованими версіями.
// Для спливаючих повідомлень інтегруйте i18next у ваші компоненти сповіщень.

// Кнопка для перемикання мови змінює весь текст у додатку.
// Динамічні дані з бази перекладаються та відображаються у вибраній мові.
// Спливаючі повідомлення, тексти кнопок, заголовки — все автоматично адаптується до вибраної мови.
// message to toast Для перекладу повідомлень використовуйте бібліотеку сповіщень (наприклад, react-toastify) разом із i18next:
// import { toast } from "react-toastify";
// import { useTranslation } from "react-i18next";

// const notify = () => {
//   const { t } = useTranslation();
//   toast.success(t("notification.success"));
// };
// in Component
// import React, { useState, useEffect } from "react";

// const ProductDetails = ({ product }) => {
//   const [translatedDescription, setTranslatedDescription] = useState("");

//   useEffect(() => {
//     const translate = async () => {
//       const translated = await translateText(product.description, "uk");
//       setTranslatedDescription(translated);
//     };

//     translate();
//   }, [product]);

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>{translatedDescription}</p>
//     </div>
//   );
// };

// export default ProductDetails;
//використання перекладу данних з бекенду при запитах fetch-translatedText
// Приклад функції для перекладу через Google Translate API:
const translateText = async (text, targetLanguage) => {
  const response = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
      }),
    }
  );

  const data = await response.json();
  return data.data.translations[0].translatedText;
};
console.log(translateText);
