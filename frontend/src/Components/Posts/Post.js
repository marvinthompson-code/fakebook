import "../../styles/Posts/Post.css";
import { useSelector } from "react-redux";
import { selectLoading } from "../../store/slices/loading/loadingSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import DeletePostModal from "./DeletePostModal";

import ClearIcon from "@mui/icons-material/Clear";
import {
  Card,
  Typography,
  CardActions,
  Button,
  CardContent,
  Box,
  Divider,
  Tooltip,
  Skeleton,
  Stack,
} from "@mui/material";

import mockProfile from "../../styles/Pictures/def.jpg";
import mockPicture from "../../styles/Pictures/mockHousePic.jpg";

const Post = ({ post, userInfo }) => {
  const [userId, setUserId] = useState(null);

  // Modal Stuff
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const loading = useSelector(selectLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (userInfo) {
      setUserId(userInfo.id)
    }
  }, [userInfo]);

  return (
    <>
      {loading ? (
        <>
          <Skeleton variant="rectangular" width={"33.33%"} height={100} />
        </>
      ) : (
        <div id={id}>
          <Box
            sx={{
              margin: "15px",
              width: "33.33%",
            }}
          >
            <Card
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #F5F5F5",
              }}
            >
              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <CardContent>
                  <div
                    style={{
                      textAlign: "right",
                    }}
                  >
                    {userId === original_author ? (
                      <Tooltip title="Delete Post">

                     
                      <ClearIcon
                        fontSize="smallest"
                        sx={{
                          color: "#A1A5A5",
                        }}
                        className="clearIcon"
                        onClick={handleOpen}
                      />
                       </Tooltip>
                    ) : <ClearIcon
                    fontSize="smallest"
                    sx={{
                      color: "#A1A5A5",
                      display: "none"
                    }}
                  />}
                  </div>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Tooltip title="Post Owner Name" placement="right-start">
                      <div onClick={() => navigate(`/profile/${owner_id}`)}>
                        <img
                          id="postOwnerProfilePicture"
                          src={mockProfile}
                          alt="default profile pic"
                          style={{
                            height: "50px",
                            borderRadius: "30px",
                            paddingRight: "5%",
                          }}
                        />
                        <div>
                          <Typography
                            sx={{
                              fontSize: "medium",
                              fontWeight: "bold",
                              color: "#2CA093",
                            }}
                          >
                            {username}
                          </Typography>
                        </div>
                      </div>
                    </Tooltip>
                  </Box>

                  <Divider
                    sx={{
                      background: "#F5F5F5",
                      margin: "5px",
                      width: "100%"
                    }}
                  />
                  <div
                    style={{
                      marginTop: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "left",
                        color: "#060E0D",
                      }}
                      variant="body2"
                    >
                      {content}
                    </Typography>
                  </div>
                  <br></br>

                  {image_url !== "" ? (
                    <Box>
                      <img
                        src={image_url}
                        style={{
                          width: "100%",
                        }}
                      />
                    </Box>
                  ) : null}
                </CardContent>
              </Stack>
              <CardActions></CardActions>
            </Card>
          </Box>
          <DeletePostModal isOpen={isOpen} handleClose={handleClose} postId={id}/>
        </div>
      )}
    </>
  );
};

export default Post;
