import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import DefaultInput from "./DefaultInput";

describe("DefaultInput", () => {
  it("renders children", () => {
    render(<DefaultInput error={"Some error"}>12</DefaultInput>);
    expect(screen.getByText("12")).toBeDefined();
  });

  it("renders spinner when isValidating is true", () => {
    const wrapper = render(
      <DefaultInput error={"Some error"} isValidating>
        Input
      </DefaultInput>
    );
    const iconElement = wrapper.container.getElementsByClassName("fa-spin");
    expect(iconElement).toBeDefined();
    wrapper.unmount();
  });
  
  it("renders errors", () => {
    const wrapper = render(
      <DefaultInput error={"Some error"} isValidating>
        Input
      </DefaultInput>
    );
    const iconElement = wrapper.getByText('Some error');
    expect(iconElement).toBeDefined();
    wrapper.unmount();
  });
});
