import { beforeEach, describe, expect, it, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import SubmitButton from "./SubmitButton";

describe("ProfileButton", () => {
  it("should render children when isLoading is false", () => {
    const wrapper = render(
      <SubmitButton isLoading={false}>Submit</SubmitButton>
    );
    expect(screen.getByRole("button")).toBeDefined();
    wrapper.unmount();
  });

  it("should render a spinner icon when isLoading is true", () => {
    const wrapper = render(
      <SubmitButton isLoading={true}>Submit</SubmitButton>
    );
    const iconElement = screen.getByRole('button').firstChild as HTMLElement;
    expect(iconElement?.classList.contains("fa-spin")).toBeTruthy();
    wrapper.unmount();
  });

  it("should be disabled when isLoading is true", () => {
    const wrapper = render(
      <SubmitButton isLoading={true}>Submit</SubmitButton>
    );
    expect(
      (screen.getByRole("button") as HTMLButtonElement).disabled
    ).toBeTruthy();
    wrapper.unmount();
  });

  it("should be disabled when isValidating is true", () => {
    const wrapper = render(
      <SubmitButton isLoading={false} isValidating={true}>
        Submit
      </SubmitButton>
    );
    expect(
      (screen.getByRole("button") as HTMLButtonElement).disabled
    ).toBeTruthy();
    wrapper.unmount();
  });
});
