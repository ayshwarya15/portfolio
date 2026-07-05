import { Box, Typography, Button, Container } from "@mui/material";
import backgroundImage from "../assets/images/background3.jpg";
function Hero() {
  return (
<Box
  id="home"
  sx={{
    //backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    color: "white",
  }}
>
      <Container>
        <Typography variant="h5"
            sx={{
            color: "#38BDF8",
          }}
          >
          Hello 👋
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mt: 2,
            color: "#607EC5",
          }}
        >
          I'm Ayshwarya 
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mt: 2,
            color: "#38BDF8",
          }}
        >
          React.js Developer
        </Typography>

        <Typography
          sx={{
            mt: 3,
            maxWidth: "600px",
            color: "#607EC5",
          }}
        >
          Passionate React.js developer with experience in
          building responsive web applications using React,
          JavaScript, Material UI and REST APIs.
        </Typography>
          
      </Container>
    </Box>
  );
}

export default Hero;