import Nav from "../Components/Nav"
import ProfileHero from "../Components/Profile/ProfileHero"
import ProfileFeed from "../Components/Profile/ProfileFeed"

import { Divider } from "@mui/material"

const Profile = () => {

    return (
        <div>
            <Nav />
            <div>
                <ProfileHero />
                <Divider  variant="middle" sx={{
                    margin: "25px"
                }}/>
                <ProfileFeed />
            </div>
        </div>
    )
}

export default Profile