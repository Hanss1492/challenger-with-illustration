import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface BoxTittleProps {
  title: string;
  subtitle?: string;
}

const BoxTittle: React.FC<BoxTittleProps> = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 6,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {subtitle}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          {/* <Button variant="contained">Tasks</Button>
            <Button variant="contained">Listado</Button> */}
        </Stack>
      </Container>
    </Box>
  );
};

export default BoxTittle;
