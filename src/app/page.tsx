"use client";

import dynamic from "next/dynamic";
import { Box, Button, Typography } from "@mui/material";
import { ToggleStatus, SwitchableSelect } from "../components/select/switchable-select";
import { useState } from "react";
import { useNotificationView } from "./use-notification-view";

const NotificationView = dynamic(() => import("./notification-view"), {
  ssr: false,
});

export default function Home() {
  const logic = useNotificationView();
  const [age, setAge] = useState<ToggleStatus>();

  const handleChange = () => {
    setAge((prev) => (prev === ToggleStatus.On ? ToggleStatus.Off : ToggleStatus.On));
  };
  return (
    <Box
      sx={{
        p: "24px 45px",
      }}
    >
      <Box
        sx={{
          mb: "24px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 500, fontSize: "20px", lineHeight: "28px" }}>
          Notification configuration
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#6B6F76" }}
        >
          Set up automatic notification
        </Typography>
      </Box>
      <form onSubmit={logic.handleSubmit(logic.onSubmit)}>
        <SwitchableSelect onToggle={handleChange} toggleStatus={age} title="Enable notification">
          <NotificationView {...logic} />
        </SwitchableSelect>
        <Box
          mt={"20px"}
          sx={{
            display: "flex",
            justifyContent: "end",
            gap: 2,
          }}
        >
          <Button
            type="submit"
            variant="outlined"
            sx={{
              textTransform: "none",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              textTransform: "none",
            }}
          >
            Save changes
          </Button>
        </Box>
      </form>
    </Box>
  );
}
