import { useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Button, Paper, TextField, Typography, Box } from "@mui/material";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const Home = ({ apodData }) => {
  const { title, url, explanation, date } = apodData;
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleViewPicture = () => {
    router.push(`/${selectedDate}`);
  };

  return (
    <Layout>
      <Box
        component="section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            type="date"
            value={selectedDate}
            label="Select a date:"
            onChange={(e) => handleDateChange(e, "start")}
            InputLabelProps={{ shrink: true }}
            InputProps={{ inputProps: { style: { fontSize: 16 } } }}
            style={{ width: "200px" }}
          />
          <Button
            variant="contained"
            style={{ width: "200px", marginTop: "16px" }}
            onClick={handleViewPicture}
          >
            View Picture
          </Button>
        </form>
      </Box>

      <Box component="section" style={{ marginBottom: "20px" }}>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Date: {date}
          </Typography>
          <img
            src={url}
            alt={title}
            className="img-fluid"
            style={{ width: "100%" }}
          />
          <Typography variant="body1" style={{ marginTop: "16px" }}>
            {explanation}
          </Typography>
        </Paper>
      </Box>
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  );
  const apodData = await response.json();

  return {
    props: {
      apodData,
    },
  };
}

export default Home;
