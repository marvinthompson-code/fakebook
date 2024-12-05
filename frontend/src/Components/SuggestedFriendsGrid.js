import { Box, Grid2, Card } from "@mui/material";
import { useEffect, useState } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import SuggestedFriend from "./SuggestedFriend";

const SuggestedFriendsGrid = () => {
  const [users, setUsers] = useState([]);
  const API = apiURL();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let res = await axios.get(`${API}/api/users`);
        setUsers(res.data.body.users);
       
      } catch (error) {
        console.log(`error.message`);
      }
    };

    fetchUsers();
  }, []);

  let suggestedFriends = users.map((friend) => {
    return (
      <div key={friend.id}>
        <Grid2 item xs={4}>
          <SuggestedFriend
            id={friend.id}
            profile_picture={friend.profile_picture}
            username={friend.username}
          />
        </Grid2>
      </div>
    );
  });

  return (
    <Box sx={{ flexGrow: 1, zIndex: "1"}}>
      {/* <Card sx={{
        borderRadius: "25px", width: "80%"
      }}> */}
        <Grid2 container spacing={2} sx={{
            width: "70%",
            marginTop: "10px"
        }}>
          {suggestedFriends}
        </Grid2>
      {/* </Card> */}
    </Box>
  );
};

export default SuggestedFriendsGrid;
