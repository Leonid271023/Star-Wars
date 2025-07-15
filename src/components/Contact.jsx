import '../Contact.css'
import {useEffect, useState} from "react";
import {base_URL} from "../utils/components.js";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);

    async function getPlanets() {
        const res = await fetch(`${base_URL}/v1/planets`);
        const data = await res.json();
        setPlanets(data.map(item => item.name));
        sessionStorage.setItem("planets", JSON.stringify(data));
    }

    useEffect(() => {
        const storedPlanets = sessionStorage.getItem("planets");

        if (storedPlanets) {
            // אם כבר קיימים - להשתמש במה שנשמר
            const parsed = JSON.parse(storedPlanets);
            setPlanets(parsed.map(item => item.name));
            console.log("Loaded planets from sessionStorage");
        } else {
            // אחרת - להביא מהשרת ולשמור
            getPlanets().then(() => console.log("Fetched planets from API"));
        }
    }, []);


    return (

        <form className='container' onSubmit={e => e.preventDefault()}>

            <label>First Name</label>
            <input type="text" placeholder="Your name.."/>

            <label>Last Name</label>
            <input type="text" placeholder="Your last name.."/>

            <label>Planet</label>
            <select name='planet'>
                {planets.map(item => <option value={item} key={item}>{item}</option>)}
            </select>

            <label>Subject
                <textarea placeholder="Write something.."></textarea>
            </label>
            <button type={'submit'}>Submit</button>
        </form>
    );
};

export default Contact;