// pages/[date].tsx
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Typography } from "@mui/material";
import Layout from "../components/Layout";
import React from "react";

interface ApodData {
  title: string;
  url: string;
  explanation: string;
  date: string;
}

interface DatePageProps {
  apodData?: ApodData;
}

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const DatePage: React.FC<DatePageProps> = ({ apodData }) => {
  if (!apodData) {
    return <div>Loading...</div>;
  }

  const { title, url, explanation, date } = apodData;

  return (
    <Layout>
      <Button
        onClick={() => window.history.back()}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <ArrowBackIcon sx={{ marginRight: 1 }} />
        <Typography variant="body1" component="span">
          Back
        </Typography>
      </Button>
      <h1>{title}</h1>
      <p>Date: {date}</p>
      <img src={url} alt={title} className="img-fluid" />
      <p>{explanation}</p>
    </Layout>
  );
};

export async function getStaticPaths() {
  // Fetch the list of possible values for `[date]`
  // For example, you might fetch all dates from your API
  // This should return an array of objects with `params` key
  return {
    paths: [
      // Example:
      { params: { date: "2024-01-17" } },
      // Add more dates as needed
    ],
    fallback: false, // Set to `true` if you want to handle other dates dynamically
  };
}

export async function getStaticProps({ params }) {
  const { date } = params;
  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
  const day = formattedDate.getDate().toString().padStart(2, "0");

  const finalDate = `${year}-${month}-${day}`;

  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${finalDate}`
  );

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const apodData: ApodData = await response.json();

  return {
    props: {
      apodData,
    },
  };
}

export default DatePage;
