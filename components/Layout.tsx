import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Picture of the Day</title>
      </Head>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: `calc(100vh - 16px)`,
        }}
      >
        <Box component="header">
          <AppBar
            position="static"
            style={{ marginBottom: "20px", backgroundColor: "#b200ff" }}
          >
            <Container>
              <Toolbar>
                <Typography
                  variant="h6"
                  style={{
                    flexGrow: 1,
                    cursor: "default",
                  }}
                >
                  Astronomy Picture of the Day
                </Typography>
                <Link href="/" passHref>
                  <Button
                    component="p"
                    style={{
                      margin: "0 10px",
                      color: "white",
                      borderBottom:
                        router.pathname === "/" ||
                        router.pathname.startsWith("/[date]")
                          ? "2px solid white"
                          : "none",
                      borderRadius: "0",
                    }}
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/allPictures" passHref>
                  <Button
                    component="p"
                    style={{
                      margin: "0 10px",
                      color: "white",
                      borderBottom:
                        router.pathname === "/allPictures"
                          ? "2px solid white"
                          : "none",
                      borderRadius: "0",
                    }}
                  >
                    All Pictures
                  </Button>
                </Link>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>

        <Container component="main">{children}</Container>

        <Box
          component="footer"
          style={{
            backgroundColor: "#b200ff",
            color: "white",
            padding: "10px",
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          <Typography variant="body2">
            Made by{" "}
            <Link href="https://github.com/DaryaEnina" passHref target="_blank">
              <span style={{ color: "white", borderBottom: "2px solid white" }}>
                Darya Enina
              </span>
            </Link>{" "}
            <IconButton
              href="https://github.com/DaryaEnina"
              target="_blank"
              style={{ color: "white" }}
            >
              <GitHubIcon />
            </IconButton>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
