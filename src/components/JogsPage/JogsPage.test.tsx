import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Header from "../Header/Header";
import JogsFilter from "../JogsFilter/JogsFilter";

import JogsPage from "../JogsPage/JogsPage";

describe("JogsPageComponent", () => {
  const initialState = {
    jogs: {
      jogs: [
        { id: 1, user_id: "1", distance: 1, time: 1, date: 1000000000 },
        { id: 2, user_id: "1", distance: 2, time: 2, date: 1200000000 },
        { id: 3, user_id: "1", distance: 3, time: 3, date: 1230000000 },
        { id: 1, user_id: "2", distance: 1, time: 1, date: 1000000000 },
        { id: 2, user_id: "2", distance: 2, time: 2, date: 1200000000 },
        { id: 3, user_id: "2", distance: 3, time: 3, date: 1230000000 },
      ],
      user: {
        id: "1",
        email: "qwe",
        phone: "qwe",
        role: "qwe",
        first_name: "qwe",
        last_name: "qwe",
      },
      loading: false,
    },
    filter: {
      from: NaN,
      to: NaN,
    },
  };

  const initialStateWithFilter = {
    jogs: {
      jogs: [
        { id: 1, user_id: "1", distance: 1, time: 1, date: 1000000000 },
        { id: 2, user_id: "1", distance: 2, time: 2, date: 1200000000 },
        { id: 3, user_id: "1", distance: 3, time: 3, date: 1230000000 },
        { id: 1, user_id: "2", distance: 1, time: 1, date: 1000000000 },
        { id: 2, user_id: "2", distance: 2, time: 2, date: 1200000000 },
        { id: 3, user_id: "2", distance: 3, time: 3, date: 1230000000 },
      ],
      user: {
        id: "1",
        email: "qwe",
        phone: "qwe",
        role: "qwe",
        first_name: "qwe",
        last_name: "qwe",
      },
      loading: false,
    },
    filter: {
      from: 1100000000000,
      to: 1300000000000,
    },
  };

  const mockStore = configureStore();
  let store;

  test("Component JogsPage render all jogs", async () => {
    store = mockStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <JogsPage />
        </Provider>
      </BrowserRouter>
    );
    const list = await screen.findByTestId("list");
    expect(list.childElementCount).toBe(
      initialState.jogs.jogs.filter(
        (jog) => jog.user_id === initialState.jogs.user.id
      ).length
    );
  });
  test("Component JogsPage filter", async () => {
    store = mockStore(initialStateWithFilter);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <>
            <Header />;
            <JogsFilter />
            <JogsPage />
          </>
        </Provider>
      </BrowserRouter>
    );

    const list = await screen.findByTestId("list");
    console.log(list.childElementCount);
    expect(list.childElementCount).toBe(
      initialState.jogs.jogs.filter(
        (jog) =>
          jog.user_id === initialStateWithFilter.jogs.user.id &&
          jog.date <= initialStateWithFilter.filter.to / 1000 &&
          jog.date >= initialStateWithFilter.filter.from / 1000
      ).length
    );
  });
});
