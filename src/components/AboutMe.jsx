import React, {useEffect} from "react";
import {base_URL} from "../utils/components.js";

const AboutMe = () => {
    const[AboutMe, setAboutMe] = React.useState({});
    useEffect(() => {
        fetch(`${base_URL}/v1/peoples/1`)
            .then(res => res.json())
            .then(data => setAboutMe({
                name: data.name,
                gender: data.gender,
                hair_color: data.hair_color,
                birth_year: data.birth_year,
            }))
    }, []);

    return(
        <div>
            <h3>
                Name: {AboutMe.name} <br/>
                Gender: {AboutMe.gender} <br/>
                Hair color: {AboutMe.hair_color} <br/>
                Birth Year: {AboutMe.birth_year} <br/>
            </h3>
        </div>
    );
};

export default AboutMe;