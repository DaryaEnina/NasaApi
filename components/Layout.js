import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Picture of the Day</title>
      </Head>
      <header>
        <AppBar position="static" style={{ marginBottom: "20px" }}>
          <Container>
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Astronomy Picture of the Day
              </Typography>
              <Link href="/" passHref>
                <Button
                  component="p"
                  style={{
                    margin: "0 10px",
                    color: "white",
                    borderBottom:
                      router.pathname === "/" ? "2px solid white" : "none",
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
      </header>

      <Container component="main">{children}</Container>
    </>
  );
};

export default Layout;
