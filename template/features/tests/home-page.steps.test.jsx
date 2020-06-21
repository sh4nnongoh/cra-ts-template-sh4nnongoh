/* eslint-disable jest/no-test-callback */
import React from "react";
import { render, screen } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import App from "../../src/App";

const feature = loadFeature("./features/home-page.feature");

defineFeature(feature, (test) => {
  test("Navigating to the app", ({ given, when, then }) => {
    let app;

    given("a new app instance", () => null);

    when("user navigates to the site", () => {
      app = render(<App />);
    });

    then("user sees Rotating React Icon", () => {
      expect(app.getByTestId("rotating-react-icon")).toBeInTheDocument();
    });

    then("user sees Description of the Project", () => {
      expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    });
  });
});
