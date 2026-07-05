import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(90deg, #001f67 0%, #2b1d4c 100%)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#d3e3e9",
            }}
          >
             {"<Ayshwarya />"}
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                href={item.href}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            mt: 3,
          }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;