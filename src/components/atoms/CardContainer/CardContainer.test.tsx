import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CardContainer from "./CardContainer";

describe("CardContainer", () => {
  it("renders children", () => {
    render(<CardContainer>12</CardContainer>);
    expect(screen.getByText("12")).toBeDefined();
  });
});
