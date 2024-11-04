import {
  Card,
  Typography,
  CardActions,
  IconButton,
  Button,
  CardContent,
  Box,
} from "@mui/material";

import mockProfile from "../../styles/Pictures/def.jpg"
import mockPicture from "../../styles/Pictures/mockHousePic.jpg"

const Post = () => {
  // image_url
  // owner_id
  // original_author
  // content
  // time_stamp


  const mockData = {
    image_url: "",
    owner_id: 1,
    original_author: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time_stamp: "00:00:00",
  };


  const { image_url, owner_id, original_author, content, time_stamp } =
    mockData;

  return (
    <div>
      <Box>
        <Card sx={{
            width: "60%",
        }}>
          <CardContent>
            
            <Box sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <img src={mockProfile} alt="default profile pic" style={{
                    height: "50px",
                    borderRadius: "30px"
                }}/>
                <Typography sx={{
                    lineHeight: "1.5"
                }} variant="h6">POST OWNER NAME</Typography>
            </Box>
              
        
            <br></br>
            <Typography sx={{
                textAlign: "left"
            }} variant="body1">{content}</Typography>
          </CardContent>
          <CardActions>

          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default Post;
