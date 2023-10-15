// import { render } from "react-dom";
import { RenderResult, render } from "@testing-library/react";

import WelcomePage from "./WelcomePage";
import { prettyDOM } from "@testing-library/react";

describe("Welcome Page", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<WelcomePage />);
  });

  test("3 + 1 should be 4", () => {
    const sum = 3 + 1;

    expect(sum).toEqual(4);
  });

  describe("WelcomePage has specific tests...", () => {
    test("should read a SUPER SPECIFIC and ENTIRE line of TEXT inside the component", () => {
      // const component = render(<WelcomePage />);

      // console.log(prettyDOM(screen.getByText("This has been a test to another branch")));
      expect(
        component.getByText("This has been a test to another branch")
      ).toBeDefined();
    });

    test("should find a specific WORD inside a longer text", () => {
      // const component = render(<WelcomePage />);

      console.log(prettyDOM(component.queryByText(/branch/i) as HTMLElement));
      expect(component.queryByText(/branch/i)).toBeDefined();
    });

    test("should render one of the HTML tags correctly", () => {
      // const component = render(<WelcomePage />);
      expect(component.container.querySelector("button")).toBeDefined;

      /*     const button = component.container.querySelector("button");
      console.log(prettyDOM(button as HTMLElement)); */
    });
  });
});
