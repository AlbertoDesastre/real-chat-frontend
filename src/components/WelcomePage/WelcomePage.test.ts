import "@testing-library/react";
import { render } from "@testing-library/react";
import WelcomePage from "./WelcomePage.tsx";

test("should render something", () => {
  const component = render(WelcomePage());

  expect(component).toBeDefined();
});
