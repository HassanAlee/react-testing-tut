import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading", {
      // name: "Job application form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      // name: "Section 1",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {
      // selector: "input",this is optional like if we have more than one element with same label text.
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const bilElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bilElement).toBeInTheDocument();

    const jobApplicationElement = screen.getByRole("combobox");
    expect(jobApplicationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
