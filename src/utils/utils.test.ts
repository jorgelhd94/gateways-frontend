import { describe, expect, it } from "vitest";
import formatDate from "./formatDate";

describe("formatDate", () => {
  it("should format date correctly", () => {
    const date = new Date(2022,2,10);
    const formattedDate = formatDate(date);
    expect(formattedDate).toEqual("10-02-2022");
  });

  it("should format single-digit month and day correctly", () => {
    const date = new Date(2022, 2, 2);
    const formattedDate = formatDate(date);
    expect(formattedDate).toEqual("02-02-2022");
  });
});
