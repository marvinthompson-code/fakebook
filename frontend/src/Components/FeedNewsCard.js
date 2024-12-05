import { Card, Typography, Divider, Box } from "@mui/material";

const articles = [
  {
    title: "VULTUREBOY releases ICARUS",
    link: "https://vultureboy.netlify.app/",
  },
  {
    title: "[NULL] drops debut album PHASE I: IN VAIN",
    link: "https://open.spotify.com/artist/4sPUuytxwpAcIprvNPmcLz",
  },
];

const FeedNewsCard = () => {
  const feedCardLinks = articles.map((article) => {
    return (
      <li style={{
        padding: "5px"
      }}>
        <Typography  sx={{
            textAlign: "left",
            fontSize: "0.7rem",
            fontWeight: "bold",
            color: "#060E0D"
        }}>{article.title}</Typography>
       
        <Typography sx={{
          textAlign: "left"
        }}>
          <a href={article.link} target="_blank" style={{
            textAlign: "left",
            fontSize: "small",
            color: "#2F3736"
          }}>
            Learn more
          </a>
        </Typography>
        <Divider variant="inset" sx={{
            margin: "5px",
            background: "#F5F5F5"
        }}/>
      </li>
    );
  });

  return (
    <>
      <Box>
        <Card sx={{
        width: "70%",
        textAlign: "-webkit-center",
        marginTop: "10px",
        background: "#FFFFFF",
        border: "1px solid #F5F5F5"
      }}>
        <Typography sx={{
            textAlign: "left",
            paddingLeft: "46px",
            fontWeight: "bold",
            marginTop: "10px",
            color: "#2CA093"
        }}>Latest News</Typography>
        <Typography sx={{
            textAlign: "left",
            paddingLeft: "46px",
            color: "#A1A5A5"
        }}>Top Stories</Typography>
          <ul style={{
            listStyleType: "none"
          }}>{feedCardLinks}</ul>
        </Card>
      </Box>
    </>
  );
};

export default FeedNewsCard