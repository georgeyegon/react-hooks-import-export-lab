import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import About from "../components/About"; // Ensure this import matches

test("it is exported as a default export", () => {
  render(<About />);
  // Add your test assertions here
});
