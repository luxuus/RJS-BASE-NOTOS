import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Loader from "./Loader";

describe("<Loader />", () => {
  test("it should mount (spinner indeterminate)", () => {
    render(<Loader variant="spinner" label="Chargement…" />);
    const el = screen.getByTestId("Loader");
    expect(el).toBeInTheDocument();

    // Spinner indéterminé utilise role=status
    const status = screen.getByRole("status");
    expect(status).toHaveAttribute("aria-busy", "true");
  });

  test("progressbar determined exposes aria-valuenow", () => {
    render(<Loader variant="bar" value={70} label="Upload" />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveAttribute("aria-valuemin", "0");
    expect(progress).toHaveAttribute("aria-valuemax", "100");
    expect(progress).toHaveAttribute("aria-valuenow", "70");
  });

  test("progressbar indeterminate is busy without valuenow", () => {
    render(<Loader variant="bar" indeterminate label="Traitement" />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveAttribute("aria-busy", "true");
    expect(progress).not.toHaveAttribute("aria-valuenow");
  });
});
