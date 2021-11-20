import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
const userStory = `
Given no inital state,
When user navigates to the web page,
Then user sees the static information
`;
// eslint-disable-next-line jest/valid-title
describe(userStory, () => {
  render(<App />);
  it("shows the static information", () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
