import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// npm test src/App.test.js ~> to run test file and we need to install Jest "npm install jest"

test("button has correct initial color", () => {
    render(<App />);

    // find an element with a role of button and text of "Change to blue"
    const colorButton = screen.getByRole("button", { name: "Change to blue" });

    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    // click button
    fireEvent.click(colorButton);

    // expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

    // expect the button text to be "Change to red"
    expect(colorButton.textContent).toBe("Change to red");
});