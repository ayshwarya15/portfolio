import { Box, Container, Typography } from "@mui/material";
import {
  SiReact,
  SiJavascript,
  SiMui,
  SiHtml5,
  SiCss,
  SiGit,
  SiPython,
  SiMysql,
} from "react-icons/si";
import { MdApi } from "react-icons/md";

const skills = [
  { name: "React.js", icon: <SiReact color="#61DAFB" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "Material UI", icon: <SiMui color="#007FFF" /> },
  { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <SiCss color="#1572B6" /> },
  { name: "REST API", icon: <MdApi color="#7C3AED" /> },
  { name: "Git", icon: <SiGit color="#F05032" /> },
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "SQL", icon: <SiMysql color="#4479A1" /> },
];

function Skills() {
  return (
    <Box id="skills" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 5,
          }}
        >
          Skills
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
          }}
        >
          {skills.map((skill) => (
            <Box
              key={skill.name}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                fontSize: "18px",
              }}
            >
              <Box sx={{ fontSize: 30 }}>{skill.icon}</Box>

              <Typography
                sx={{
                  fontWeight: 500,
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;