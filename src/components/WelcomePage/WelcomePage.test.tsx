// import { render } from "react-dom";
import { render } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

describe("GROUP #1", () => {
  test("3 + 1 should be 4", () => {
    const sum = 3 + 1;

    expect(sum).toEqual(4);
  });

  test("Component should render", () => {
    const component = render(<WelcomePage />);

    // console.log(component);

    expect(component.queryByText(/"branch"/i)).toBeDefined();
  });
});
