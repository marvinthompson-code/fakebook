import { Tooltip, Grid } from "@mui/material";
import mockDefaultPic from "../styles/Pictures/def.jpg";
import { useNavigate } from "react-router-dom";

import "../styles/SuggestedFriend.css"

const SuggestedFriend = ({ id, profile_picture, username }) => {
    const navigate = useNavigate()
  return (
    <div>
      <Tooltip title={username}>
        <img src={mockDefaultPic} className="friendIcon" style={{
            height: "30px",
            borderRadius: "50%",
            border: "1px solid #FFFFFF"
        }} onClick={() => navigate(`/profile/${id}`)}/>
      </Tooltip>
    </div>
  );
};

export default SuggestedFriend;
