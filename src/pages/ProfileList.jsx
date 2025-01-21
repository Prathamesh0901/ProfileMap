import { useEffect, useState } from "react";
import ProfilePage from "./ProfilePage";
import Card from "../components/Card";
import './ProfileList.css';

const ProfileList = () => {
    const [profiles, setProfiles] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({});

    const fetchData = async () => {
        const url = '/data.json';
        const response = await fetch(url);
        const data = await response.json();
        setProfiles(data);
    }

    useEffect(() => {
        const x = async () => {
            await fetchData();
        }
        x();
    }, []);

    const handleClick = (event) => {
        console.log(event.target.id);
        setData(profiles[event.target.id-1]);
        setIsOpen(!isOpen);
    }

    const closePage = () => {
        setIsOpen(false);
    }

    return (
        <div className="Profile_Listing">
            <div className="Heading">
                <h1>Profile Listing</h1>
            </div>

            <div className="Cards_Container">
                {
                    profiles.map(profile => (
                        <Card id={profile.id} photo={profile.photo} name={profile.name} description={profile.description} handleClick={handleClick}/>
                    ))
                }
            </div>

            {
                isOpen? 
                <ProfilePage data={data} closePage={closePage}/>:
                <></>
            }
        </div>
    )
}
                                
export default ProfileList