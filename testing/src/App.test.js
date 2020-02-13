import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import * as rtl from "@testing-library/react";

it("rendering information from App", () => {
  const wrapper = rtl.render(
    <span className="baseball">This is baseball</span>
  );
  const ball = wrapper.queryByText(/have fun/i);
  expect(ball).toBeInTheDocument();
});

test("ball is found", () => {
  const { getAllByText } = render(<App />);
  getAllByText(/ball/i);
});

it("sanity test", () => {
  expect([2, 3]).toEqual([2, 3]);
  expect(9).toBe(9);
  expect(9).toBeGreaterThan(8);
});

it("foul ball", () => {
  expect(2).not.toBe(3);
});
