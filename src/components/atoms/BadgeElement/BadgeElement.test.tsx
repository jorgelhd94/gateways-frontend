import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BadgeElement from "./BadgeElement";

describe("Badge test", () => {
  it("renders children", () => {
    render(<BadgeElement>12</BadgeElement>);
    expect(screen.getByText("12")).toBeDefined();
  });

  it("renders with default style", () => {
    const wrapper = render(<BadgeElement>12</BadgeElement>);
    const span = wrapper.container.querySelector("span") as HTMLSpanElement;
    expect(span.classList.contains("bg-blue-500")).toBeTruthy();
  });

  it("renders with provided style", () => {
    const wrapper = render(<BadgeElement type="success">12</BadgeElement>);
    const span = wrapper.container.querySelector("span") as HTMLSpanElement;
    expect(span.classList.contains("bg-green-500")).toBeTruthy();
  });
});
