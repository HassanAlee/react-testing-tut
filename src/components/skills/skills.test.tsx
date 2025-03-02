import { render, screen } from "@testing-library/react";
import Skills from "./Skills";
describe("Skills", () => {
  const skills = ["Coding", "Gaming", "Fishing", "Gardening"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
  test("renders a list of elements", () => {
    render(<Skills skills={skills} />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(skills.length);
  });
});
