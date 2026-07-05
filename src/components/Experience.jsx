import { Box, Container, Typography, Paper } from "@mui/material";

function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          //gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 5,
          }}
        >
          Experience
        </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#1976d2",
            }}
          >
            React.js Developer Intern
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: "gray",
              mt: 1,
            }}
          >
            Company: Cholamandalam Investment and Finance Company Limited
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              color: "gray",
              mb: 3,
            }}
          >
            Duration: sep 2025 – Present
          </Typography>

        {/* <Typography
  paragraph
  sx={{
    textAlign: "justify",
    lineHeight: 1.8,
  }}
>
  As a Frontend Development Intern at <strong>
    Cholamandalam Investment and Finance Company Limited</strong>, 
    I contributed to the development of the Loan Against Property (LAP) application using React.js, TypeScript, Material UI, and Axios. 
    I developed responsive and reusable UI components, integrated REST APIs, implemented form validation using Formik and Yup, and worked on the Dashboard and Property Visit modules. 
    I actively participated in feature development, integration, testing, and deployment within an Agile development environment.  
</Typography> */}

      </Container>
    </Box>
  );
}

export default Experience;