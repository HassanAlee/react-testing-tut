import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counter-two";
import user from "@testing-library/user-event";

describe("Counter two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const headingElement = screen.getByRole("heading", { name: "Counter Two" });
    expect(headingElement).toBeInTheDocument();
  });
  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incButton = screen.getByRole("button", { name: "Increment" });
    const decButton = screen.getByRole("button", { name: "Decrement" });
    await user.click(incButton);
    await user.click(decButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
