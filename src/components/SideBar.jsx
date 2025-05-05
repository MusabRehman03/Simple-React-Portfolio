import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import WebIcon from "@mui/icons-material/Web";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

import { useState } from "react";

const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [display, setDisplay] = useState({
    home: true,
    about: false,
    contact: false,
    settings: false,
    products: false,
    manualProducts: false,
    categories: false,
  });
  const handleDisplay = (text) => {
    if (text == "home") {
      setDisplay({
        home: true,
        about: false,
        contact: false,
        settings: false,
        products: false,
        manualProducts: false,
        categories: false,
      });
    } else if ((text = "education")) {
      setDisplay({
        home: false,
        about: true,
        contact: false,
        settings: false,
        products: false,
        manualProducts: false,
        categories: false,
      });
    } else if ((text = "achievements")) {
      setDisplay({
        home: false,
        about: false,
        contact: true,
        settings: false,
        products: false,
        manualProducts: false,
        categories: false,
      });
    } else if ((text = "projects")) {
      setDisplay({
        home: false,
        about: false,
        contact: false,
        settings: true,
        products: false,
        manualProducts: false,
        categories: false,
      });
    } else if ((text = "skills")) {
      setDisplay({
        home: false,
        about: false,
        contact: false,
        settings: false,
        products: true,
        manualProducts: false,
        categories: false,
      });
    } else if ((text = "contact")) {
      setDisplay({
        home: false,
        about: false,
        contact: false,
        settings: false,
        products: false,
        manualProducts: true,
        categories: false,
      });
    }
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className="bg-[#111111] h-[100vh]">
      <Toolbar />
      <Divider sx={{ marginTop: "10px" }} />
      <List
        onClick={() => {
          handleDisplay("home");
        }}
      >
        <Link to="/">
          <ListItem key={"0"} disablePadding>
            <ListItemButton sx={{ color: "white" }}>
              <ListItemIcon sx={{ color: "white" }}>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      {/* <Divider /> */}
      <List
        onClick={() => {
          handleDisplay("education");
        }}
      >
        <Link to="/education">
          <ListItem key={"3"} disablePadding>
            <ListItemButton sx={{ color: "white" }}>
              <ListItemIcon sx={{ color: "white" }}>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary={"Education"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <List
        onClick={() => {
          handleDisplay("achievements");
        }}
      >
        <Link to="/achievements">
          <ListItem key={"1"} disablePadding>
            <ListItemButton sx={{ color: "white" }}>
              <ListItemIcon sx={{ color: "white" }}>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText primary={"Achievements"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <List
        onClick={() => {
          handleDisplay("projects");
        }}
      >
        <Link to="/projects">
          <ListItem key={"2"} disablePadding>
            <ListItemButton sx={{ color: "white" }}>
              <ListItemIcon sx={{ color: "white" }}>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <WebIcon />
              </ListItemIcon>
              <ListItemText primary={"Projects"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Link to="/Skills">
        <List
          onClick={() => {
            handleDisplay("skills");
          }}
        >
          <ListItem key={"4"} disablePadding>
            <ListItemButton sx={{ color: "white" }}>
              <ListItemIcon sx={{ color: "white" }}>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <CodeIcon />
              </ListItemIcon>

              <ListItemText primary={"Skills"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      <Link to="/contact">
        <List
          onClick={() => {
            handleDisplay("contact");
          }}
        >
          <ListItem key={"5"} disablePadding>
            <ListItemButton sx={{ color: "white" }}>
              <ListItemIcon sx={{ color: "white" }}>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <AccountCircleIcon />
              </ListItemIcon>

              <ListItemText primary={"Contact"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          // ml: { sm: `${drawerWidth}px` },
          zIndex: (theme) => theme.zIndex.drawer + 1, // Ensures AppBar is above the drawer
        }}
      >
        <Toolbar sx={{ backgroundColor: "#111111" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xl: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: 100 + "%",
              paddingX: "40px",
              paddingY: "20px",
            }}
          >
            <Typography
              sx={{ color: "#FF4D4D" }}
              variant="h6"
              noWrap
              component="div"
            >
              Musab Ur Rehman
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "none", // hide on extra-small screens
                  sm: "none", // hide on small screens
                  md: "block", // show on medium and up
                },
              }}
            >
              <Link to="/contact">
                <AccountCircleIcon
                  sx={{ fontSize: "35px", cursor: "pointer" }}
                />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        {/* flexShrink: { lg: 0 } */}
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xl: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", xl: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

export default Sidebar;
