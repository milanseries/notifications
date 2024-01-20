import { fireEvent, render, screen } from "@testing-library/react";
import { SelectableChip } from "./selectable-chip";

describe("Page", () => {
  const sampleData = "SampleData";
  const onClickMock = jest.fn();
  it("calls onClick function when clicked", () => {
    render(<SelectableChip data={sampleData} onClick={onClickMock} />);
    const chipElement = screen.getByRole("button");
    fireEvent.click(chipElement);
    expect(onClickMock).toHaveBeenCalledWith(sampleData);
  });
});
