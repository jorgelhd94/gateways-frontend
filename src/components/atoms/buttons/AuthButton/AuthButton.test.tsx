import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AuthButton from "./AuthButton";
import { ButtonHTMLAttributes } from "react";

describe("AuthButton test", () => {
  beforeEach(() => {
    render(
      <AuthButton type="button" isLoading={false}>
        Login
      </AuthButton>
    );
    vi.restoreAllMocks();
  });

  it("renders button text", () => {
    const buttonElement = screen.getByText("Login");
    expect(buttonElement).toBeDefined();
  });

  it("renders spinner when isLoading is true", () => {
    const wrapper = render(
      <AuthButton type="button" isLoading={true}>
        Register
      </AuthButton>
    );
    const iconElement = screen.getByText("Register").firstElementChild;
    expect(iconElement?.classList.contains("fa-spin")).toBeTruthy();
    wrapper.unmount();
  });

  it("calls onClick handler when clicked", async () => {
    const buttonElement = screen.getByText("Login");
    const spy = vi.spyOn(buttonElement, "click");

    buttonElement.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("is disabled when isLoading is true", () => {
    const wrapper = render(
      <AuthButton type="button" isLoading={true}>
        Register
      </AuthButton>
    );
    const buttonElement = screen.getByText("Register") as HTMLButtonElement;
    expect(buttonElement.disabled).toBeTruthy();
    wrapper.unmount();
  });
});
