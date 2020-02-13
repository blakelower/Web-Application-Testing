import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import * as rtl from "@testing-library/react";

it("rendering information from App", () => {
  const wrapper = rtl.render(
    <span className="baseball">This is baseball</span>
  );
  const ball = wrapper.queryByText(/this, is/ / baseball / i);
  expect(ball).toBeInTheDocument();
});

test("ball is found", () => {
  const { getAllByText } = render(<App />);
  getAllByText(/ball/i);
});
