import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import HeaderDashboard from "./HeaderDashboard";

describe("IconInput", () => {
  it("renders correctly", () => {
    const wrapper = render(<HeaderDashboard toggleSidebarMobile={vi.fn()} />);
    expect(wrapper.container).toBeDefined();
  });
});
