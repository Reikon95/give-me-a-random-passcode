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

test("code length can be modified using numbers", () => {
  render(<App />)
  const lengthInput = screen.getByTestId("length-input")
  fireEvent.change(lengthInput, { target: { value: "23" } })
  expect(lengthInput).toBeInTheDocument()
  expect(lengthInput.value).toBe("23")
})

test("code length cannot be modified using letters", () => {
  render(<App />)
  const lengthInput = screen.getByTestId("length-input")
  fireEvent.change(lengthInput, { target: { value: "abc" } })
  expect(lengthInput).toBeInTheDocument()
  expect(lengthInput.value).toBe("")
})

test("code length cannot be modified using a combination of letters and number", () => {
  render(<App />)
  const lengthInput = screen.getByTestId("length-input")
  fireEvent.change(lengthInput, { target: { value: "abc123" } })
  expect(lengthInput).toBeInTheDocument()
  expect(lengthInput.value).toBe("")
})

test("code length cannot be modified using a special characters", () => {
  render(<App />)
  const lengthInput = screen.getByTestId("length-input")
  fireEvent.change(lengthInput, { target: { value: "$%^&%$" } })
  expect(lengthInput).toBeInTheDocument()
  expect(lengthInput.value).toBe("")
})

test("number checkbox renders", () => {
  render(<App />)
  const numberCheckbox = screen.getByTestId("numbers-checkbox")
  expect(numberCheckbox).toBeInTheDocument()
})

test("number checkbox is clickable", () => {
  render(<App />)
  const numberCheckbox = screen.getByTestId("numbers-checkbox")
  const innerCheckbox = numberCheckbox.querySelector('input[type="checkbox"]')
  expect(innerCheckbox).toHaveProperty("checked", false)
  fireEvent.click(innerCheckbox)
  expect(innerCheckbox).toHaveProperty("checked", true)
})

test("lowercase checkbox renders", () => {
  render(<App />)
  const lowercase = screen.getByTestId("lowercase-checkbox")
  expect(lowercase).toBeInTheDocument()
})

test("lowercase checkbox is clickable", () => {
  render(<App />)
  const lowercase = screen.getByTestId("lowercase-checkbox")
  const innerCheckbox = lowercase.querySelector('input[type="checkbox"]')
  expect(innerCheckbox).toHaveProperty("checked", false)
  fireEvent.click(innerCheckbox)
  expect(innerCheckbox).toHaveProperty("checked", true)
})

test("uppercase checkbox renders", () => {
  render(<App />)
  const uppercase = screen.getByTestId("uppercase-checkbox")
  expect(uppercase).toBeInTheDocument()
})

test("uppercase checkbox is clickable", () => {
  render(<App />)
  const uppercase = screen.getByTestId("uppercase-checkbox")
  const innerCheckbox = uppercase.querySelector('input[type="checkbox"]')
  expect(innerCheckbox).toHaveProperty("checked", false)
  fireEvent.click(innerCheckbox)
  expect(innerCheckbox).toHaveProperty("checked", true)
})

test("special checkbox renders", () => {
  render(<App />)
  const special = screen.getByTestId("special-checkbox")
  expect(special).toBeInTheDocument()
})

test("special checkbox is clickable", () => {
  render(<App />)
  const special = screen.getByTestId("special-checkbox")
  const innerCheckbox = special.querySelector('input[type="checkbox"]')
  expect(innerCheckbox).toHaveProperty("checked", false)
  fireEvent.click(innerCheckbox)
  expect(innerCheckbox).toHaveProperty("checked", true)
})

test("lowercase codes can be generated", () => {
  render(<App />)
  const lowercase = screen.getByTestId("lowercase-checkbox")
  const button = screen.getByTestId("manual-generate-code-button")
  const innerCheckbox = lowercase.querySelector('input[type="checkbox"]')
  const lengthInput = screen.getByTestId("length-input")
  fireEvent.change(lengthInput, { target: { value: "23" } })
  fireEvent.click(innerCheckbox)
  fireEvent.click(button)
  const code = screen.getByTestId("code-result").textContent
  expect(code).toHaveLength(23)
  expect(/[a-z]/.test(code)).toBe(true)
  expect(/[^a-z]+/.test(code)).toBe(false)
})

test("uppercase codes can be generated", () => {
  render(<App />)
  const uppercase = screen.getByTestId("uppercase-checkbox")
  const button = screen.getByTestId("manual-generate-code-button")
  const innerCheckbox = uppercase.querySelector('input[type="checkbox"]')
  const lengthInput = screen.getByTestId("length-input")
  fireEvent.change(lengthInput, { target: { value: "23" } })
  fireEvent.click(innerCheckbox)
  fireEvent.click(button)
  const code = screen.getByTestId("code-result").textContent
  expect(code).toHaveLength(23)
  expect(/[A-Z]/.test(code)).toBe(true)
  expect(/[^A-Z]+/.test(code)).toBe(false)
})

test("numbers codes can be generated", () => {
  render(<App />)
  const numbers = screen.getByTestId("numbers-checkbox")
  const button = screen.getByTestId("manual-generate-code-button")
  const innerCheckbox = numbers.querySelector('input[type="checkbox"]')
  const lengthInput = screen.getByTestId("length-input")
  fireEvent.change(lengthInput, { target: { value: "23" } })
  fireEvent.click(innerCheckbox)
  fireEvent.click(button)
  const code = screen.getByTestId("code-result").textContent
  expect(code).toHaveLength(23)
  expect(/[0-9]/.test(code)).toBe(true)
  expect(/[^0-9]+/.test(code)).toBe(false)
})
