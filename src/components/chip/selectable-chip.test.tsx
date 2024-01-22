import { render, screen } from "@testing-library/react";
import { SelectableChip } from "./selectable-chip";

describe("Given SelectableChip", () => {
  describe("When button is click", () => {
    it("Then it should called with data", () => {
      const mockData = "mockData";
      const onClickMock = jest.fn();
      render(<SelectableChip data={mockData} onClick={onClickMock} />);
      screen.getByRole("button").click();
      expect(onClickMock).toHaveBeenCalledWith(mockData);
    });
  });
});
