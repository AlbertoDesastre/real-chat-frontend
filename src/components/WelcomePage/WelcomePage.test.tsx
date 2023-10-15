// import { render } from "react-dom";
import "@testing-library/jest-dom"; // this provides the jest "expect" to have more matches regarding DOM
import { RenderResult, render, screen } from "@testing-library/react";

import WelcomePage from "./WelcomePage";
import { prettyDOM } from "@testing-library/react";

describe("GROUP #1", () => {
  let component: RenderResult;

  beforeAll(() => {
    component = render(<WelcomePage />);
  });

  describe("Name of the group", () => {});
  test("3 + 1 should be 4", () => {
    const sum = 3 + 1;

    expect(sum).toEqual(4);
  });

  /*   test("Component should render", () => {
    console.log(prettyDOM(component.container));
    expect(component).toBeDefined();
  }); */

  test("should read the text inside the component", () => {
    console.log(screen.queryByText(/"branch"/i));
    expect(component.queryByText(/"branch"/i)).toBeDefined();

    /*  STUDY & RESEARCH if this giving me "null" it's correct
    console.log(screen.queryByText(/"branch"/i));
    expect(screen.queryByText(/"branch"/i)).toBeDefined(); */

    expect(component.container).toHaveTextContent(
      "This has been a test to another branch"
    );
  });

  test("should read the text inside the component, in a different way", () => {
    component.getByText("This has been a test to another branch");
    // Careful!! "getByText" apparently takes the WHOLE sentence. Even if you try to do a /"branch"/
    // it will thrown an error. The complete sentence you are looking for must be passed

    // Also notice that these 2 are equals and serve the same purpose:
    expect(component.container).toHaveTextContent(
      "This has been a test to another branch"
    );
    component.getByText("This has been a test to another branch");
  });

  test("should render one of the HTML tags correctly", () => {
    const button = component.container.querySelector("button");
    console.log(prettyDOM(button as HTMLElement));
  });
});
