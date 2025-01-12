import { useSelector } from "react-redux";
import { Navigation } from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useTranslation } from "react-i18next";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { i18n } = useTranslation(); // Додано хук
  // Функція для зміни мови
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
          <div className={css.languageSwitcher}>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("uk")}>UA</button>
      </div>
    </header>
  );
};
// Додано button changeLanguage("en")}>EN< end changeLanguage("uk")}>UA<
// дістаю значення з селекора selectIsLoggedIn який початково в папці redux/auth/selectors
