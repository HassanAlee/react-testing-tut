import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/greet/);
  expect(textElement).toBeInTheDocument();
});
