import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ButtonBurger from "./ButtonBurger";

describe("ButtonBurger test", () => {
  const onClickMock = vi.fn();
  beforeEach(() => {
    render(<ButtonBurger click={onClickMock} />);
    vi.restoreAllMocks();
  });

  test("renders without errors", () => {
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("calls onClick function when clicked", () => {
    const buttonElement = screen.getByRole("button");
    const spy = vi.spyOn(buttonElement, "click");

    buttonElement.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

});
