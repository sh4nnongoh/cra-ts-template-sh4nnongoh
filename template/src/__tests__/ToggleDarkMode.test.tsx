import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
const userStory = `
Given no inital state,
When user navigates to the web page and clicks the dark mode button,
Then user sees the theme take effect
`;
describe(userStory, () => {
  render(<App />);
  it("shows the dark mode toggle", () => {
    const darkModeElement = screen.getByAltText("DarkModeToggle");
    expect(darkModeElement).toBeInTheDocument();
  });
});
