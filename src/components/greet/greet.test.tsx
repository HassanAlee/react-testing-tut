import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});
test("greet renders with a name", () => {
  render(<Greet name="john" />);
  const textElement = screen.getByText(/Hello john/);
  expect(textElement).toBeInTheDocument();
});
