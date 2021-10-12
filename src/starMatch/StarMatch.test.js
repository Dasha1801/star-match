import { render, screen } from "@testing-library/react";
import StarMatch from "./starMatch";

test("renders learn react link", () => {
  render(<StarMatch />);
  const linkElement = screen.getByText(/more numbers/i);
  expect(linkElement).toBeInTheDocument();
});
