import React, {useEffect} from "react";
import {base_URL} from "../utils/components.js";

const AboutMe = () => {
    const [AboutMe, setAboutMe] = React.useState({});
    useEffect(() => {

        const Luke = localStorage.getItem("infoPerson");
        const test = localStorage.getItem("time");
        const now = Date.now();
        const oneMonth = 1000 * 60 * 60 * 24 * 30;
        if (now - test > oneMonth) {
            localStorage.removeItem("infoPerson");
            localStorage.removeItem("time");
        }
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
                    localStorage.setItem('infoPerson', JSON.stringify(data))
                    const now = Date.now();
                    localStorage.setItem("time", JSON.stringify({now}));
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