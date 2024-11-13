import "../../styles/Posts/Post.css";
import { useSelector } from "react-redux";
import { selectLoading } from "../../store/slices/loading/loadingSlice";
import {
  Card,
  Typography,
  CardActions,
  IconButton,
  Button,
  CardContent,
  Box,
  Divider,
  Tooltip,
  Badge,
  Skeleton,
} from "@mui/material";

import mockProfile from "../../styles/Pictures/def.jpg";
import mockPicture from "../../styles/Pictures/mockHousePic.jpg";

const Post = ({ post }) => {
  const loading = useSelector(selectLoading);

  const {
    content,
    full_name,
    id,
    image_url,
    original_author,
    owner_id,
    time_stamp,
    username,
  } = post;

  return (
    <>
      {loading ? (
        <>
          <Skeleton variant="rectangular" width={"45%"} height={100} />
        </>
      ) : (
        <div id={id}>
          <Box
            sx={{
              margin: "15px",
              width: "33.33%",
            }}
          >
            <Card sx={{}}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Tooltip title="Post Owner Name" placement="right-start">
                    <img
                      id="postOwnerProfilePicture"
                      src={mockProfile}
                      alt="default profile pic"
                      style={{
                        height: "50px",
                        borderRadius: "30px",
                      }}
                    />
                  </Tooltip>

                  <Typography
                    sx={{
                      lineHeight: "1.5",
                    }}
                    variant="h7"
                  >
                    {username}
                  </Typography>
                </Box>

                <br></br>
                <Divider variant="middle" />
                <br></br>
                <Typography
                  sx={{
                    textAlign: "left",
                    width: "88%",
                  }}
                  variant="body2"
                >
                  {content}
                </Typography>
                <br></br>

                {image_url !== "" ? (
                  <Box>
                    <img
                      src={image_url}
                      style={{
                        height: "250px",
                      }}
                    />
                  </Box>
                ) : null}
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Box>
        </div>
      )}
    </>
  );
};

export default Post;
