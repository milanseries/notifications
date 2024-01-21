import { Chip } from "@mui/material";
import { useCallback } from "react";

export type SelectableChipProps = {
  data: string;
  isSelected?: boolean;
  onClick: (data: string) => void;
  isDisabled?: boolean;
  label?: string;
  props?: React.ComponentProps<typeof Chip>;
};

export const SelectableChip = ({ data, isSelected, onClick, isDisabled, label, props }: SelectableChipProps) => {
  const handleClick = useCallback(() => {
    onClick(data);
  }, [data, onClick]);

  return (
    <Chip
      label={label}
      onClick={handleClick}
      disabled={isDisabled}
      sx={{
        "&:hover": {
          backgroundColor: isSelected ? "black" : "white",
        },
        backgroundColor: isSelected ? "black" : "white",
        color: isSelected ? "white" : "black",
        margin: "6px",
        border: "1px solid black",
      }}
      {...props}
    />
  );
};