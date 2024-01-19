import { GetServerSideProps, NextPage } from "next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Typography } from "@mui/material";
import Layout from "../components/Layout.tsx";
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

const DatePage: NextPage<DatePageProps> = ({ apodData }) => {
  if (!apodData) {
    return <div>Loading...</div>;
  }

  const { title, url, explanation, date } = apodData;

  return (
    <Layout>
      <Button
        onClick={() => {
          if (typeof window !== "undefined") {
            window.history.back();
          }
        }}
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

export const getServerSideProps: GetServerSideProps<DatePageProps> = async ({
  query,
}) => {
  const { date } = query;
  const formattedDate = new Date(date as string);
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
};

export default DatePage;
