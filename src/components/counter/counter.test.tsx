import { render, screen } from "@testing-library/react";
import Counter from "./counter";
import user from "@testing-library/user-event";
describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });
  test("renders a count of 0", () => {
    render(<Counter />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("0");
  });
  test("renders a count of 1 after click the increment", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    await user.click(buttonElement);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("1");
  });
  test("renders a count of 3 on double click", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(buttonElement);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("3");
  });
  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    await user.type(inputElement, "10");
    expect(inputElement).toHaveValue(10);
    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("10");
  });
  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const inputElement = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(inputElement).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
