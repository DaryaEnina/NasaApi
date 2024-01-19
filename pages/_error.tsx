import { NextPage } from "next";
import { Typography } from "@mui/material";
import React from "react";

const ErrorPage: NextPage = () => {
  return (
    <Typography variant="h1" align="center">
      404 - Page Not Found
    </Typography>
  );
};

export default ErrorPage;
