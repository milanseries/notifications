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
      variant="outlined"
      sx={{
        "&:hover": {
          backgroundColor: isSelected ? "black !important" : "#EDEDF0",
        },
        backgroundColor: isSelected ? "black" : "#EDEDF0",
        color: isSelected ? "white" : "black",
      }}
      {...props}
    />
  );
};
