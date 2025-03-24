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
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1202,
        backgroundColor: "#34C94B",
        m: "0px !important",
        p: "0px !important",
      }}
    >
      <Toolbar sx={{ m: "0px !important", p: "0px !important" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          sx={{
            height: "74px !important",
            padding: "0px 32px",
          }}
        >
          <Logo />
          <Search />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#121212",
              borderRadius: "12px",
              color: "#34C94B",
            }}
          >
            Give Feedback
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
