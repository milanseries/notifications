import { Box, Typography } from "@mui/material";

type SectionHeaderTypes = {
  title: string;
  subtitle: string;
};
export const SectionHeader = ({ title, subtitle }: SectionHeaderTypes) => {
  return (
    <Box sx={{ mb: "24px" }}>
      <Typography variant="h6" sx={{ fontWeight: 500, lineHeight: "28px" }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 400, lineHeight: "24px", color: "#6B6F76" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};
