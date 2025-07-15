import React, {useEffect} from "react";
import {base_URL} from "../utils/components.js";

const AboutMe = () => {
    const [AboutMe, setAboutMe] = React.useState({});
    useEffect(() => {

        const Luke = sessionStorage.getItem("infoPerson");
        if (Luke) {
            const Parse = JSON.parse(Luke);
            setAboutMe({
                name: Parse.name,
                gender: Parse.gender,
                hair_color: Parse.hair_color,
                birth_year: Parse.birth_year,
            });
        } else {

            fetch(`${base_URL}/v1/peoples/1`)
                .then(res => res.json())
                .then(data => {
                    setAboutMe({
                        name: data.name,
                        gender: data.gender,
                        hair_color: data.hair_color,
                        birth_year: data.birth_year,
                    })
                    sessionStorage.setItem('infoPerson', JSON.stringify(data))
                })
        }
    }, []);

    return (
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