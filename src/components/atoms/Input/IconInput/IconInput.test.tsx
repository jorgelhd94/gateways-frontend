import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import IconInput from "./IconInput";
import { faUser } from "@fortawesome/free-solid-svg-icons";

describe("IconInput", () => {
  beforeEach(() => {
    render(
      <IconInput icon={faUser} error={<b>Error</b>}>
        12
      </IconInput>
    );
  });

  it("renders children", () => {
    expect(screen.getByText("12")).toBeDefined();
  });

  it("renders icon", () => {
    const iconElement = screen.getByText("12").getElementsByClassName('fa-user');
    expect(iconElement).toBeDefined();
  });

  it("renders errors", () => {
    const errorElement = screen.getByText("12").getElementsByTagName('b');
    expect(errorElement).toBeDefined();
  });
});
