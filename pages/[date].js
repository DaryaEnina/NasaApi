import Layout from "../components/Layout";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const DatePage = ({ apodData }) => {
  if (!apodData) {
    return <div>Loading...</div>;
  }

  const { title, url, explanation, date } = apodData;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>Date: {date}</p>
      <img src={url} alt={title} className="img-fluid" />
      <p>{explanation}</p>
    </Layout>
  );
};

DatePage.getInitialProps = async ({ query }) => {
  const { date } = query;
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

  const apodData = await response.json();

  return {
    apodData,
  };
};

export default DatePage;
