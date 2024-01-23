import Link from "next/link";
import { Button, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Typography variant="h2" fontWeight={600}>
          Set your automatic notification
        </Typography>
        <Button href="/notification" LinkComponent={Link} variant="contained" fullWidth>
          Configure it now
        </Button>
      </Grid>
    </Grid>
  );
}
