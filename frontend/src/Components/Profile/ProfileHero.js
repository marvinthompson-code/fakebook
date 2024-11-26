import { Card, Box, Stack, Divider, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import axios from "axios"
import mockProfile from "../../styles/Pictures/def.jpg";
import { useMatch } from "react-router-dom";
import { apiURL } from "../../util/apiURL";

const ProfileHero = () => {
    const [fullName, setFullName] = useState("")
    const [username, setUserName] = useState("")
    const [bio, setBio] = useState("")
    // profile picture when upload functionality is fixed

    const match = useMatch('profile/:id')
    const API = apiURL()

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                let res = await axios.get(`${API}/api/users/${match.params.id}`)
                debugger
                const { bio, full_name, username, email, profile_picture} = res.data.body.singleUser
                setBio(bio)
                setFullName(full_name)
                setUserName(username)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchUserInfo()
    }, [])

    return (
        <div style={{
            textAlign: "-webkit-center"
        }}>
        <Card sx={{
            marginTop: "2%",
            width: "40%",
            padding: "25px",
            background: "#FFFFFF",
            border: "1px solid #A1A5A5"
        }}>
            <Box>
                <Box>
                    <img src={mockProfile} style={{
                        borderRadius: "50%",
                        width: "20%",
                        margin: "10px"
                    }}/>
                </Box>
                <Typography variant="h5" sx={{
                    textAlign: "left",
                    fontSize: "1.5rem",
                    color: "#2CA093"
                }}>
                    {username}
                </Typography>
                <Divider sx={{
                    background: "#F5F5F5"
                }}/>
                <Typography sx={{
                    fontSize: "medium",
                    textAlign: "left",
                    color: "#060E0D"
                }}>
                {bio} 
                </Typography>
            </Box>
        </Card>
        </div>
    )
}

export default ProfileHero