import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

test("renders title", () => {
  const { getByText } = render(<App />)
  const title = getByText(/Generate an Example Secure Passcode/i)
  expect(title).toBeInTheDocument()
})

test("renders all checkboxes", () => {
  const { getAllByRole } = render(<App />)
  const checkboxes = getAllByRole("checkbox")
  expect(checkboxes).toHaveLength(4)
})

test("all checkboxes should be unchecked", () => {
  const { getAllByRole } = render(<App />)
  const uncheckedCheckboxes = getAllByRole("checkbox", { checked: false })
  expect(uncheckedCheckboxes).toHaveLength(4)
})

test("renders all buttons", () => {
  const { getAllByRole } = render(<App />)
  const buttons = getAllByRole("button")
  expect(buttons).toHaveLength(2)
})

test("code length input is rendered", () => {
  render(<App />)
  const lengthInput = screen.getByTestId("length-input")
  expect(lengthInput).toBeInTheDocument()
})

test("code length can be modified", () => {
  render(<App />)
  const lengthInput = screen.getByTestId("length-input")
  console.log(lengthInput.value)
  fireEvent.change(lengthInput, { target: { value: "23" } })
  expect(lengthInput).toBeInTheDocument()
  console.log(lengthInput.value)
  expect(lengthInput.value).toBe("23")
})
