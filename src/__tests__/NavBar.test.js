// src/__tests__/NavBar.test.js
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar"; // Import only, no redefinition

test("it renders NavBar without crashing", () => {
  expect(() => render(<NavBar />)).not.toThrow();
});
