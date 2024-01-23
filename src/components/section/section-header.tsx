import { Box, Typography } from "@mui/material";

type SectionHeaderTypes = {
  title: string;
  subtitle: string;
};
export const SectionHeader = ({ title, subtitle }: SectionHeaderTypes) => {
  return (
    <Box sx={{ mb: "24px" }}>
      <Typography variant="h2" sx={{ fontSize: "20px", fontWeight: 500, lineHeight: "28px" }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontsize: "16px", lineHeight: "24px", color: "#6B6F76" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};
