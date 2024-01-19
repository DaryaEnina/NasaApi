import { useState } from "react";
import Layout from "../components/Layout";
import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Container,
} from "@mui/material";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const AllPicturesPage = ({ apodDataList }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fetchedApodDataList, setFetchedApodDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [selectedApodData, setSelectedApodData] = useState(null);

  const handleDateChange = (e, type) => {
    const value = e.target.value;
    if (type === "start") {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  const fetchData = async () => {
    if (!startDate || !endDate) {
      setValidationError(true);
      return;
    }
    setValidationError(false);

    setLoading(true);

    const apiPromises = [];
    const currentDate = new Date(startDate);
    const lastDate = new Date(endDate);

    while (currentDate <= lastDate) {
      const formattedDate = currentDate.toISOString().split("T")[0];

      const response = fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`
      );
      apiPromises.push(response);

      currentDate.setDate(currentDate.getDate() + 1);
    }

    const responses = await Promise.all(apiPromises);
    const newDataList = await Promise.all(
      responses.map((response) => response.json())
    );

    setFetchedApodDataList((prevDataList) => [...prevDataList, ...newDataList]);
    setLoading(false);
  };

  const handleCardClick = (apodData) => {
    setSelectedApodData(apodData);
  };

  const handleCloseDialog = () => {
    setSelectedApodData(null);
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        All Pictures
      </Typography>
      <Container
        component="form"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          type="date"
          id="startDate"
          label="Start Date"
          value={startDate}
          onChange={(e) => handleDateChange(e, "start")}
          margin="normal"
          fullWidth
          style={{ width: 200, marginBottom: 10 }}
          InputLabelProps={{ shrink: true }}
          InputProps={{ inputProps: { style: { fontSize: 16 } } }}
        />
        <TextField
          type="date"
          id="endDate"
          label="End Date"
          value={endDate}
          onChange={(e) => handleDateChange(e, "end")}
          margin="normal"
          fullWidth
          style={{ width: 200, marginBottom: 10 }}
          InputLabelProps={{ shrink: true }}
          InputProps={{ inputProps: { style: { fontSize: 16 } } }}
        />
        <Button
          variant="contained"
          onClick={fetchData}
          disabled={loading}
          style={{ width: 200, marginBottom: 20 }}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Fetch Pictures"
          )}
        </Button>
        {validationError && (
          <Typography
            variant="body2"
            color="error"
            style={{ marginBottom: 10 }}
          >
            Please select both start and end dates.
          </Typography>
        )}
      </Container>
      {fetchedApodDataList.length > 0 && (
        <Grid container component="section" spacing={2}>
          {fetchedApodDataList.map((apodData) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={apodData.date}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <CardActionArea onClick={() => handleCardClick(apodData)}>
                  {apodData.media_type === "image" ? (
                    <CardMedia
                      component="img"
                      alt={apodData.title}
                      height="240"
                      style={{
                        objectFit: "cover",
                      }}
                      image={apodData.url}
                    />
                  ) : (
                    <CardMedia
                      component="iframe"
                      title={apodData.title}
                      height="240"
                      src={apodData.url}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="0"
                      allowFullScreen
                    />
                  )}
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {apodData.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      Date: {apodData.date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Dialog
        open={Boolean(selectedApodData)}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>{selectedApodData?.title}</DialogTitle>
        <DialogContent>
          {selectedApodData?.media_type === "video" ? (
            <CardMedia
              component="iframe"
              title={selectedApodData?.title}
              src={selectedApodData?.url}
              height="auto"
              style={{ minHeight: "400px" }}
            />
          ) : (
            <CardMedia
              component="img"
              alt={selectedApodData?.title}
              width="100%"
              style={{
                objectFit: "cover",
              }}
              image={selectedApodData?.url}
            />
          )}
          <Typography variant="h6" style={{ marginTop: "16px" }}>
            Date: {selectedApodData?.date}
          </Typography>
          <Typography>{selectedApodData?.explanation}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
};

export default AllPicturesPage;
