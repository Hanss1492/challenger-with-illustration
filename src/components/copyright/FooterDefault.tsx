import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";

const FooterDefault = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 20 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Challange with Illustration
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://www.facebook.com/magudalimarketplace"
        >
          Magudali
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default FooterDefault;
