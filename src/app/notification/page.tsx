"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { SectionHeader } from "../../components/section/section-header";
import { SwitchableSelect } from "../../components/select/switchable-select";
import { LoadingButton } from "@mui/lab";
import { Box, Button } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { Form } from "../../components/form/form";
import { useNotificationForm } from "./use-notification-form";

const NotificationForm = dynamic(() => import("./notification-form"), {
  ssr: false,
});

const Notification = () => {
  const logic = useNotificationForm();
  const { formMethods, onSubmit, handleSwitchToggle, switchToggle, isLoading } = logic;
  const {
    formState: { isValid },
  } = formMethods;

  return (
    <Box sx={{ p: "24px 45px" }}>
      <SectionHeader title={"Notification configuration"} subtitle={"Set up automatic notification"} />
      <FormProvider {...formMethods}>
        <Form onSubmit={onSubmit}>
          <SwitchableSelect onToggle={handleSwitchToggle} toggleStatus={switchToggle} title="Enable notification">
            <NotificationForm {...logic} />
          </SwitchableSelect>
          <Box sx={{ mt: 6, display: "flex", justifyContent: "end", gap: 2 }}>
            <Button href="/" LinkComponent={Link} variant="outlined">
              Cancel
            </Button>
            <LoadingButton type="submit" loading={isLoading} variant="contained">
              Save changes
            </LoadingButton>
          </Box>
        </Form>
      </FormProvider>
    </Box>
  );
};

export default Notification;
