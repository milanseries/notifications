"use client";

import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: "#212B36",
          textTransform: "none",
          boxShadow: "unset",
          "&:hover": {
            background: "#212B36",
          },
        },
        outlined: {
          color: "black",
          borderColor: "#212B36",
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
