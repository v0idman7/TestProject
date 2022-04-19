import "./LoginPage.scss";
import { auth } from "../../services";

const LoginPage = () => {
  return (
    <main className="loginPage">
      <div className="loginPage__image" />
      <button className="loginPage__button" onClick={auth}>
        Let me in
      </button>
    </main>
  );
};

export default LoginPage;
