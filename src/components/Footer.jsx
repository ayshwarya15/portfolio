import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        color: "white",
        textAlign: "center",
        py: 3,
      }}
    >
      <Typography variant="body1">
        © 2026 Ays S. All Rights Reserved.
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        Built with React.js & Material UI
      </Typography>
    </Box>
  );
}

export default Footer;