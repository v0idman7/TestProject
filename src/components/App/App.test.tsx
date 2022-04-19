import { create } from "react-test-renderer";

import App from "./App";

describe("JogsPageComponent", () => {
  test("Component should have App", () => {
    const component = create(<App />);
    const instance = component.getInstance();
    expect(instance).toBeDefined();
  });
});
