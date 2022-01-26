import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
const userStory = `
Given no inital state,
When user navigates to the web page and clicks the dark mode button,
Then user sees the theme take effect
`;
describe(userStory, () => {
  render(<App />);
  it("toggles between the 2 themes", () => {
    const darkModeElement = screen.getByAltText(/DarkModeToggle/i);
    const themedButton = screen.getByRole("button", { name: /My Bulma Button/i });
    expect(themedButton).toHaveClass("theme-light");
    userEvent.click(darkModeElement);
    expect(themedButton).toHaveClass("theme-dark");
  });
});
