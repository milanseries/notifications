import { SelectableChip } from "@/components/chip/selectable-chip";
import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";
import { days } from "./use-notification-form";
import { NotificationFormProps } from "./notification-form.types";
import TimezoneSelect from "react-timezone-select";
import { SectionHeader } from "@/components/form/section/section-header";

const NotificationForm = ({ orderDays, formMethods, fields, handleClick }: NotificationFormProps) => {
  const { control, watch, register } = formMethods;
  return (
    <>
      <SectionHeader
        title={"Notification hours"}
        subtitle={"Your automated notification will be sent within these hours"}
      />
      <Box mb={"60px"} p={"28px"} border={1} borderColor="#DFE1E4">
        <Typography variant="h6" sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "22px", mb: 1 }}>
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
                id="hello"
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
            <Typography variant="h6" component="div" sx={{ fontSize: "16px" }}>
              Select days
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} display="flex" justifyContent="end">
            <Box sx={{ display: "flex", justifyContent: "flex-end", flexWrap: "wrap", alignItems: "center" }}>
              {days.map((day) => (
                <SelectableChip
                  key={day}
                  isSelected={fields.some((field) => field.day === day)}
                  label={day?.toString().charAt(0)}
                  data={day}
                  onClick={handleClick}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ m: "26px 0" }} />
        {orderDays(fields).map((fieldData, index) => (
          <Box sx={{ mb: "20px" }} key={fieldData.id}>
            <Box sx={{ display: "fex", justifyContent: "space-between" }}>
              <Grid container alignItems="center">
                <Grid item xs={12} md={2} display="flex" alignItems="center">
                  <Typography variant="h6" component="div" sx={{ fontSize: "16px" }}>
                    <Box>{fieldData.day}</Box>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={10} display="flex" justifyContent="end">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box>
                      <Controller
                        control={control}
                        name={`daysOfWeek.${index}.start_time`}
                        rules={{ required: true }}
                        render={({ field }) => {
                          return (
                            <TimePicker
                              value={field.value || null}
                              maxTime={dayjs(watch(`daysOfWeek.${index}.end_time`)).add(30, "minutes")}
                              onChange={(date) => {
                                field.onChange(date);
                              }}
                            />
                          );
                        }}
                      />
                    </Box>
                    <Box>
                      <Controller
                        control={control}
                        name={`daysOfWeek.${index}.end_time`}
                        rules={{ required: true }}
                        render={({ field }) => {
                          return (
                            <TimePicker
                              minTime={dayjs(watch(`daysOfWeek.${index}.start_time`)).add(30, "minutes")}
                              value={field?.value || null}
                              onChange={(date) => {
                                field.onChange(date);
                              }}
                            />
                          );
                        }}
                      />
                    </Box>
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Box>
          </Box>
        ))}
      </Box>

      <SectionHeader title={" Notification message "} subtitle={" Customize your notification message"} />
      <Box p={"24px"} border={1} borderColor="#DFE1E4">
        <Typography variant="h6" sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "22px", mb: 1 }}>
          Message
        </Typography>
        <TextField
          id="notification-message"
          placeholder="It is time for your medicine"
          variant="outlined"
          fullWidth
          {...register(`message`, { required: true })}
        />
      </Box>
    </>
  );
};

export default NotificationForm;
