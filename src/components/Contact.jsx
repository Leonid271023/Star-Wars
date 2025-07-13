import '../Contact.css'
import {useEffect, useState} from "react";
import {base_URL} from "../utils/components.js";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);

    async function getPlanets() {
        const res = await fetch(`${base_URL}/v1/planets`);
        const data = await res.json();
        setPlanets(data.map(item => item.name));

    }

    useEffect(() => {
        getPlanets().then(() => console.log('Planets were loaded'));
    }, [])


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