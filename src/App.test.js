import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  const { getByText } = render(<App />);
  const title = getByText(/Generate a Secure Passcode/i);
  expect(title).toBeInTheDocument();
});

test("renders all checkboxes", () => {
  const { getAllByRole } = render(<App />);
  const checkboxes = getAllByRole("checkbox");
  expect(checkboxes).toHaveLength(5);
});

test("all checkboxes should be unchecked", () => {
  const { getAllByRole } = render(<App />);
  const checkedCheckboxes = getAllByRole("checkbox", { checked: false });
  expect(checkedCheckboxes).toHaveLength(5);
});
