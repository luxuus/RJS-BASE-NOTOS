import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import InputGroup from "./Input";

describe("<Input />", () => {
  test("monte avec label, input, et zone d’erreur masquée par défaut", () => {
    render(
      <InputGroup>
        <InputGroup.Label htmlFor="fld">Label</InputGroup.Label>
        <InputGroup.Input id="fld" data-testid="input" />
        <InputGroup.Error>Erreur</InputGroup.Error>
      </InputGroup>
    );
    expect(screen.getByText("Label")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
    // L’erreur n’apparaît que quand invalid === true
    expect(screen.queryByText("Erreur")).not.toBeInTheDocument();
  });

  test("requis : blur sur champ vide -> affiche erreur, puis saisie valide -> cache erreur", () => {
    render(
      <InputGroup>
        <InputGroup.Label htmlFor="req">Requis</InputGroup.Label>
        <InputGroup.Input id="req" required data-testid="req" />
        <InputGroup.Error>Ce champ est requis.</InputGroup.Error>
      </InputGroup>
    );
    const input = screen.getByTestId("req") as HTMLInputElement;

    // blur à vide => invalid devient true via checkValidity()
    input.focus();
    fireEvent.blur(input);
    expect(screen.getByText("Ce champ est requis.")).toBeInTheDocument();

    // saisie puis blur => redevient valide
    fireEvent.change(input, { target: { value: "ok" } });
    fireEvent.blur(input);
    expect(screen.queryByText("Ce champ est requis.")).not.toBeInTheDocument();
  });

  test("onInvalid est pris en compte (déclenche invalid sans blur)", () => {
    render(
      <InputGroup>
        <InputGroup.Label htmlFor="req2">Requis</InputGroup.Label>
        <InputGroup.Input id="req2" required data-testid="req2" />
        <InputGroup.Error>Requis</InputGroup.Error>
      </InputGroup>
    );
    const input = screen.getByTestId("req2");

    // Déclenche explicitement l’événement invalid
    fireEvent.invalid(input);
    expect(screen.getByText("Requis")).toBeInTheDocument();
  });

  test("pattern : saisie invalide -> erreur, saisie valide -> OK", () => {
    render(
      <InputGroup>
        <InputGroup.Label htmlFor="digits">Code</InputGroup.Label>
        <InputGroup.Input
          id="digits"
          pattern="^\\d+$"
          title="Chiffres uniquement"
          data-testid="digits"
        />
        <InputGroup.Error>Uniquement des chiffres.</InputGroup.Error>
      </InputGroup>
    );

    const input = screen.getByTestId("digits") as HTMLInputElement;

    // saisie non numérique puis blur => erreur
    fireEvent.change(input, { target: { value: "abc" } });
    fireEvent.blur(input);
    expect(screen.getByText("Uniquement des chiffres.")).toBeInTheDocument();

    // saisie numérique puis blur => OK
    fireEvent.change(input, { target: { value: "12345" } });
    fireEvent.blur(input);
    expect(
      screen.queryByText("Uniquement des chiffres.")
    ).not.toBeInTheDocument();
  });
});
