import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { Button, Paper, TextField, Typography, Box } from "@mui/material";
import Layout from "../components/Layout";

interface ApodData {
  title: string;
  url: string;
  explanation: string;
  date: string;
}

interface HomeProps {
  apodData: ApodData;
}

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const Home: React.FC<HomeProps> = ({ apodData }) => {
  const { title, url, explanation, date } = apodData;
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedDate(event.target.value);
    setError(""); // Сбрасываем ошибку при изменении даты
  };

  const handleViewPicture = (): void => {
    if (!selectedDate) {
      setError("Please select a date.");
      return;
    }
    const selectedDateTime = new Date(selectedDate);
    const currentDateTime = new Date();

    if (selectedDateTime > currentDateTime) {
      setError("Selected date cannot be greater than today.");
      return;
    }

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
            onChange={handleDateChange}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputProps: { style: { fontSize: 16, width: "200px" } },
            }}
            style={{ width: "200px" }}
          />
          {error && (
            <Typography
              variant="body2"
              color="error"
              style={{ marginTop: 4, width: "200px", textAlign: "center" }}
            >
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            style={{
              width: "200px",
              marginTop: "16px",
              backgroundColor: "#b200ff",
            }}
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
  const apodData: ApodData = await response.json();

  return {
    props: {
      apodData,
    },
  };
}

export default Home;
