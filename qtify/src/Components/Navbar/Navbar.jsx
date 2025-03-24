import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import NavbarIcon from "../../assets/Icons/NavbarIcon";
import Search from "../Search/Searchbar";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1202,
        borderBottom: "1.5px solid #DAD4DC",
        boxShadow: "none",
        backgroundColor: "#34C94B",
        color: "black",
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <NavbarIcon />
          <Search />
          <Button>Give Feedback</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
