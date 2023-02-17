import { beforeEach, describe, expect, it, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import ProfileButton from "./ProfileButton";

describe("ProfileButton", () => {
  const onClickMock = vi.fn();
  beforeEach(() => {
    render(<ProfileButton onClick={onClickMock} />);
    vi.restoreAllMocks();
  });

  it("should render the profile button", () => {
    const profileButton = screen.getByAltText("profile");
    expect(profileButton).toBeDefined();
  });


  it("calls a function when clicked", () => {
    const profileButton = screen.getByAltText("profile");
    const spy = vi.spyOn(profileButton, "click");

    profileButton.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
