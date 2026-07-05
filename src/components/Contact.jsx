import { Box, Container, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 2,
          }}
        >
          Contact
        </Typography>

        <Typography
          sx={{
            textAlign: "center", 
            color: "#64748B",
            mb: 5,
          }}
        >
          Connect with me through GitHub or LinkedIn
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <Link
            href="https://github.com/ayshwarya15"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="inherit"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "18px",
              transition: "0.3s",
              "&:hover": {
                color: "#7C3AED",
                transform: "translateY(-3px)",
              },
            }}
          >
            <GitHubIcon fontSize="large" />
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/ayshwarya-s-b1664328a/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="inherit"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "18px",
              transition: "0.3s",
              "&:hover": {
                color: "#0A66C2",
                transform: "translateY(-3px)",
              },
            }}
          >
            <LinkedInIcon fontSize="large" />
            LinkedIn
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;