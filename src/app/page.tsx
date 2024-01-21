"use client";

import dynamic from "next/dynamic";
import { Box, Button } from "@mui/material";
import { SwitchableSelect } from "../components/select/switchable-select";
import { useNotificationForm } from "./use-notification-form";
import { FormProvider } from "react-hook-form";
import { Form } from "@/components/form/form";
import { SectionHeader } from "@/components/form/section/section-header";

const NotificationForm = dynamic(() => import("./notification-form"), {
  ssr: false,
});

export default function Home() {
  const logic = useNotificationForm();
  return (
    <Box
      sx={{
        p: "24px 45px",
      }}
    >
      <SectionHeader title={"Notification configuration"} subtitle={"Set up automatic notification"} />
      <FormProvider {...logic.formMethods}>
        <Form onSubmit={logic.onSubmit}>
          <SwitchableSelect
            onToggle={logic.handleSwitchToggle}
            toggleStatus={logic.switchToggle}
            title="Enable notification"
          >
            <NotificationForm {...logic} />
          </SwitchableSelect>
          <Box
            sx={{
              mt: 6,
              display: "flex",
              justifyContent: "end",
              gap: 2,
            }}
          >
            <Button variant="outlined">Cancel</Button>
            <Button type="submit" variant="contained">
              Save changes
            </Button>
          </Box>
        </Form>
      </FormProvider>
    </Box>
  );
}
