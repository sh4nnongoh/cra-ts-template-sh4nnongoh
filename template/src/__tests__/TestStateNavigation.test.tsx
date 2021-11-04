import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
describe("Given no inital state", () => {
  describe("When user navigates to the Test State page", () => {
    render(<App />);
    userEvent.click(screen.getByText(/Test State/i));
    it("shows the default value of Default State in the input box", () => {
      const element = screen.getByDisplayValue(/Default State/i);
      expect(element).toBeInTheDocument();
    });
  });
});
