"use client";

import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: "black",
          textTransform: "none",
          boxShadow: "unset",
          "&:hover": {
            background: "black",
          },
        },
        outlined: {
          color: "black",
          borderColor: "black",
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          borderRadius: "50%",
          margin: "6px",
          border: "1px solid #EDEDF0",
        },
      },
    },
  },
});
