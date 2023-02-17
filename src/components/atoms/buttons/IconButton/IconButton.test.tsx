import { beforeEach, describe, expect, it, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import IconButton from "./IconButton";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

describe("IconButton", () => {
  const onClickMock = vi.fn();
  beforeEach(() => {
    render(
      <IconButton type="primary" icon={faSpinner} showIcon click={onClickMock}>
        Click Me
      </IconButton>
    );
    vi.restoreAllMocks();
  });

  it("renders an icon and text", () => {
    const text = screen.getByText("Click Me");
    const icon = screen.queryAllByRole("img");

    expect(text).toBeDefined();
    expect(icon).toBeDefined();
  });

  it('disables the button and displays a spinner when loading', () => {
    const { container } = render(
      <IconButton type="primary" icon={faSpinner} showIcon loading>
        Other button
      </IconButton>
    );
    const icon = container.querySelector('svg');

    expect(icon).toBeDefined();
    expect(icon?.classList.contains('fa-spin')).toBeTruthy();
  });

  it('calls a function when clicked', () => {
    const buttonElement = screen.getByText('Click Me');
    const spy = vi.spyOn(buttonElement, "click");

    buttonElement.click();
    expect(spy).toHaveBeenCalledTimes(1);
    
  });
});
