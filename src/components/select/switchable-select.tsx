import React, { ReactNode } from "react";
import { Box, Typography, FormControl, Select, MenuItem } from "@mui/material";

export enum ToggleStatus {
  On = "on",
  Off = "off",
}

export interface SwitchableSelectProps {
  title: string;
  toggleStatus?: ToggleStatus;
  onToggle?: () => void;
  children?: ReactNode;
}

export const SwitchableSelect: React.FC<SwitchableSelectProps> = ({
  title,
  toggleStatus = ToggleStatus.On,
  onToggle,
  children,
}) => {
  return (
    <>
      <Box p={"24px"} border={1} borderColor="#DFE1E4">
        <Typography variant="h6" sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "22px", mb: 1 }}>
          {title}
        </Typography>
        <FormControl fullWidth>
          <Select id="toggle-status" value={toggleStatus} onChange={onToggle}>
            <MenuItem value={ToggleStatus.On}>On</MenuItem>
            <MenuItem value={ToggleStatus.Off}>Off</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {toggleStatus === ToggleStatus.On && <Box sx={{ mt: "64px" }}>{children}</Box>}
    </>
  );
};
