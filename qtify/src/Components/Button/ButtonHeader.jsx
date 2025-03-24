import React from "react";
import { Button } from "@mui/material";

function ButtonHeader({ children }) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#121212",
        borderRadius: "12px",
        color: "#34C94B",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {children}
    </Button>
  );
}

export default ButtonHeader;
