import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "../Header/Header";

import "./App.scss";
import { store } from "../../store";
import InfoPage from "../InfoPage/InfoPage";
import JogsPage from "../JogsPage/JogsPage";
import LoginPage from "../LoginPage/LoginPage";
import JogForm from "../JogForm/JogForm";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<JogsPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="info" element={<InfoPage />} />
            <Route path="add" element={<JogForm />} />
            <Route path="edit" element={<JogForm edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
