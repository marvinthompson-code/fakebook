import { Card, Box, Stack, Divider, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import axios from "axios"

import mockProfile from "../../styles/Pictures/def.jpg";

const ProfileHero = () => {

    useEffect(() => {

    }, [])

    return (
        <div style={{
            textAlign: "-webkit-center"
        }}>
        <Card sx={{
            marginTop: "2%",
            width: "40%",
            padding: "25px"
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
                    fontSize: "1.5rem"
                }}>
                    USER NAME
                </Typography>
                <Divider sx={{
                    paddingTop: "2px",
                    paddingBottom: "2px"
                }}/>
                <Typography sx={{
                    fontSize: "medium",
                    textAlign: "left",
                    color: "gray"
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Typography>
            </Box>
        </Card>
        </div>
    )
}

export default ProfileHero