import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageNotFound from "../../../Assets/images/notfound.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <Typography variant="h2" gutterBottom component={Link} to="/">
        Home
      </Typography>
      <img src={ImageNotFound} alt="Not Found" style={{ maxWidth: "90%" }} />
    </Box>
  );
};

export default Page404;
