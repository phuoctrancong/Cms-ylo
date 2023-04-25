import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        pt: "10%",
      }}
    >
      <Typography sx={{ fontSize: 60, fontWeight: "bold" }}>Oops!</Typography>
      <Typography sx={{ fontSize: 20 }}>404 - Page Not Found</Typography>
      <Button onClick={() => navigate("/")} sx={{ mt: 3 }}>
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
