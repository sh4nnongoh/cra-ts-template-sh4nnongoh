import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
describe("Given no inital state", () => {
  describe("When user navigates to the web page", () => {
    render(<App />);
    test("Then user sees the static information", () => {
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
