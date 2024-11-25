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
            fontWeight: "bold"
        }}>{article.title}</Typography>
       
        <Typography sx={{
          textAlign: "left"
        }}>
          <a href={article.link} target="_blank" style={{
            textAlign: "left",
            fontSize: "small"
          }}>
            Learn more
          </a>
        </Typography>
        <Divider variant="inset" sx={{
            margin: "5px"
        }}/>
      </li>
    );
  });

  return (
    <>
      <Box>
        <Card sx={{
        width: "80%",
        textAlign: "-webkit-center",
        marginTop: "10px"
      }}>
        <Typography sx={{
            textAlign: "left",
            paddingLeft: "46px",
            fontWeight: "bold",
            marginTop: "10px"
        }}>Latest News</Typography>
        <Typography sx={{
            textAlign: "left",
            paddingLeft: "46px",
            color: "gray"
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