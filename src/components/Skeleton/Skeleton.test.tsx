import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Skeleton from "./Skeleton";

describe("<Skeleton />", () => {
  test("monte et expose un wrapper data-testid par défaut", () => {
    render(<Skeleton />);
    expect(screen.getByTestId("Skeleton")).toBeInTheDocument();
  });

  test("mix de blocs: Image + Text + Paragraph + Button", () => {
    render(
      <Skeleton data-testid="S">
        <Skeleton.Image width={480} height={240} />
        <Skeleton.Text width={320} height={14} rows={2} />
        <Skeleton.Paragraph width={460} height={12} rows={3} />
        <Skeleton.Button width={120} height={36} />
      </Skeleton>
    );

    const wrapper = screen.getByTestId("S");
    const blocks = wrapper.querySelectorAll('[data-skeleton="block"]');
    // 1 Image + 2 Text rows + 1 Paragraph + 1 Button = 5 blocs
    expect(blocks.length).toBe(5);
  });

  test("Text rows: rend exactement le nombre de lignes demandé", () => {
    render(
      <Skeleton data-testid="T">
        <Skeleton.Text width={300} height={12} rows={5} />
      </Skeleton>
    );
    const wrapper = screen.getByTestId("T");
    const rows = wrapper.querySelectorAll('[data-skeleton="block"]');
    expect(rows.length).toBe(5);
    // Les index sont séquentiels
    rows.forEach((el, idx) => {
      expect(el).toHaveAttribute("data-idx", String(idx));
    });
  });

  test("les attributs data-width / data-height correspondent aux props", () => {
    render(
      <Skeleton data-testid="Sizes">
        <Skeleton.Text width={310} height={13} rows={3} />
      </Skeleton>
    );
    const wrapper = screen.getByTestId("Sizes");
    const rows = Array.from(
      wrapper.querySelectorAll('[data-skeleton="block"]')
    );
    expect(rows).toHaveLength(3);
    rows.forEach((el) => {
      expect(el).toHaveAttribute("data-width", "310");
      expect(el).toHaveAttribute("data-height", "13");
    });
  });
});
