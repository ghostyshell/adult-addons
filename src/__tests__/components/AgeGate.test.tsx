import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AgeGate from "@/components/AgeGate";
import { AGE_GATE_KEY } from "@/lib/age-gate";

describe("AgeGate", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("shows age confirmation before content", () => {
    render(
      <AgeGate>
        <p>Main content</p>
      </AgeGate>,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Main content")).toBeInTheDocument();
  });

  it("stores consent and dismisses dialog", async () => {
    const user = userEvent.setup();

    render(
      <AgeGate>
        <p>Main content</p>
      </AgeGate>,
    );

    await user.click(screen.getByRole("button", { name: /18 or older/i }));
    expect(sessionStorage.getItem(AGE_GATE_KEY)).toBe("true");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
