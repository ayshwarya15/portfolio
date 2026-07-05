import { Box, Container, Typography } from "@mui/material";

function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: "#F8FAFC",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          About Me
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            lineHeight: 2,
          }}
        >
          I'm a React.js Developer with internship experience in building
          responsive web applications using React.js, JavaScript, Material UI,
          and REST APIs. I enjoy creating reusable components and developing
          clean, user-friendly interfaces.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;