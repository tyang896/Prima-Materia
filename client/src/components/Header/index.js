import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Auth from '../../utils/auth';

const drawerWidth = 240;
const navItems = [
  "Home",
  "Search",
  "Decks",
  "Wishlist",
  "Mystery Card",
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, fontFamily: "sans-serif", letterSpacing: ".3rem" }}
      >
        Prima Materia
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              href={item.replace(/\s/g, "").toLowerCase()}
              // use Link nad to to not reload page
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        {Auth.loggedIn() ? (
          <>
            <ListItem key="Logout" disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                href="home"
                onClick={Auth.logout}
              // use Link nad to to not reload page
              >
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem key="Login" disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                href="login"
              // use Link nad to to not reload page
              >
                <ListItemText primary="Login"/>
              </ListItemButton>
            </ListItem>
          </>
        )
        }
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" style={{ background: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontFamily: "sans-serif",
              letterSpacing: ".4rem",
            }}
          >
            Prima Materia
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                href={item.replace(/\s/g, "").toLowerCase()}
              >
                {item}
              </Button>
            ))}
            {
              Auth.loggedIn() ? (
                <Button
                key="Logout"
                sx={{ color: "#fff" }}
                href="home"
                onClick={Auth.logout}
              >
                Logout
              </Button>
              ): (
                <Button
                key="Login"
                sx={{ color: "#fff" }}
                href="login"
              >
                Login
              </Button>
              )
            }
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
