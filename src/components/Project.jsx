import { Box, Container, Typography, Divider } from "@mui/material";

function Project() {
  return (
    <Box
      id="projects"
      sx={{
        py: 10,
       
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 5,
          }}
        >
          Projects
        </Typography>

        {/* Project 1 */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#607EC5",
            }}
          >
            Loan Against Property (LAP) Application
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ color: "text.secondary", mb: 2 }}
          >
            Internship Project | Cholamandalam Investment and Finance Company
            Limited
          </Typography>

<Typography>
  <strong>Tech Stack:</strong> React.js, TypeScript, Material UI, Axios, React Router, Formik, Yup, REST APIs, Git, Postman
</Typography>
        </Box>

        <Divider sx={{ mb: 5 }} />

        {/* Project 2 */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#607EC5",
            }}
          >
            Healthcare Food Recommendation System
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ color: "text.secondary", mb: 2 }}
          >
            Academic Project
          </Typography>

  <Typography>
    <strong>Tech Stack:</strong> Python, Flask, Machine Learning, Random Forest,
    HTML, CSS, JavaScript, SQLite
  </Typography>
        </Box>

        <Divider sx={{ mb: 5 }} />

        {/* Project 3 */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#607EC5",
            }}
          >
            Book Bank System
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ color: "text.secondary", mb: 2 }}
          >
            Academic Project
          </Typography>

  <Typography>
    <strong>Tech Stack:</strong> Java, SQLite, NetBeans IDE
  </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Project;