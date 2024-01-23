import { SelectableChip } from "../../components/chip/selectable-chip";
import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TimezoneSelect from "react-timezone-select";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";
import { defaultDays } from "./use-notification-form";
import { NotificationFormProps } from "./notification-form.types";
import { SectionHeader } from "../../components/section/section-header";

const NotificationForm = ({ formMethods, handleClick, hasAnyDayConfigured }: NotificationFormProps) => {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = formMethods;
  return (
    <>
      <SectionHeader
        title={"Notification hours"}
        subtitle={"Your automated notification will be sent within these hours"}
      />
      <Box mb={"60px"} p={"28px"} border={1} borderColor="#DFE1E4">
        <Typography variant="subtitle1" sx={{ fontWeight: 500, lineHeight: "22px", mb: 1 }}>
          Timezone
        </Typography>
        <Controller
          control={control}
          name={"timezone"}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <TimezoneSelect
                instanceId={"timezone-select"}
                id="timezone-select"
                labelStyle="altName"
                value={field?.value || ""}
                onChange={(event: any) => {
                  field.onChange(event?.value);
                }}
              />
            );
          }}
        />
        <Divider sx={{ m: "26px 0" }} />
        <Grid container alignItems="center">
          <Grid item xs={12} md={2} display="flex" alignItems="center">
            <Typography variant="subtitle1" sx={{ fontSize: "16px" }}>
              Select days
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} display="flex" justifyContent="end">
            <Box sx={{ display: "flex", justifyContent: "flex-end", flexWrap: "wrap", alignItems: "center" }}>
              {watch("daysOfWeek")?.map((dayOfWeek) => {
                return (
                  <SelectableChip
                    key={dayOfWeek.day}
                    isSelected={dayOfWeek.visible}
                    label={dayOfWeek.day.charAt(0)}
                    data={dayOfWeek.day}
                    onClick={handleClick}
                  />
                );
              })}
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ m: "26px 0" }} />
        {!hasAnyDayConfigured && (
          <Typography sx={{ display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500" }}>
            Please select at least one day for notification
          </Typography>
        )}
        {defaultDays.map((fieldData, index) => {
          const dayOfWeek = watch("daysOfWeek").find((day) => day.day === fieldData.day);
          return (
            dayOfWeek?.visible && (
              <Box sx={{ mb: "20px" }} key={fieldData.day}>
                <Grid container sx={{ alignItems: "center", flexWrap: { sm: "nowrap" } }}>
                  <Grid item xs={12} md={2} display="flex" alignItems="center">
                    <Typography variant="subtitle1" component="span">
                      {fieldData.day}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={10} display="flex" justifyContent="end">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Controller
                        control={control}
                        name={`daysOfWeek.${index}.start_time`}
                        rules={{ required: true }}
                        render={({ field }) => {
                          return (
                            <TimePicker
                              closeOnSelect={false}
                              value={field.value ?? null}
                              maxTime={dayjs(dayOfWeek?.end_time).add(30, "minutes")}
                              onChange={(date) => {
                                field.onChange(date);
                              }}
                              slots={{
                                openPickerIcon: ExpandMoreIcon,
                              }}
                              slotProps={{
                                textField: {
                                  sx: {
                                    "& .MuiInputBase-root": {
                                      borderTopRightRadius: 0,
                                      borderBottomRightRadius: 0,
                                    },
                                  },
                                },
                              }}
                            />
                          );
                        }}
                      />
                      <Controller
                        control={control}
                        name={`daysOfWeek.${index}.end_time`}
                        rules={{ required: true }}
                        render={({ field }) => {
                          return (
                            <TimePicker
                              closeOnSelect={false}
                              minTime={dayjs(dayOfWeek?.start_time).add(30, "minutes")}
                              value={field?.value ?? null}
                              onChange={(date) => {
                                field.onChange(date);
                              }}
                              slots={{
                                openPickerIcon: ExpandMoreIcon,
                              }}
                              slotProps={{
                                textField: {
                                  sx: {
                                    "& .MuiInputBase-root": {
                                      borderTopLeftRadius: 0,
                                      borderBottomLeftRadius: 0,
                                    },
                                  },
                                },
                              }}
                            />
                          );
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Box>
            )
          );
        })}
      </Box>
      <SectionHeader title={"Notification message"} subtitle={"Customize your notification message"} />
      <Box sx={{ p: "24px", border: "1px solid #DEF1E4" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 500, lineHeight: "28px" }}>
          Message
        </Typography>
        <TextField
          id="notification-message"
          placeholder="It is time for your medicine"
          variant="outlined"
          fullWidth
          error={Boolean(errors.notification_message)}
          {...register(`notification_message`, { required: true })}
        />
      </Box>
    </>
  );
};

export default NotificationForm;
