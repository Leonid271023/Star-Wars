import {useEffect, useState} from "react";
import {base_URL} from "../utils/components.js";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);
    useEffect(() => {
        fetch(`${base_URL}/v1/planets`)
            .then(res => res.json())
            .then(data => setPlanets(data.map(item=>item.name)))
    },[])



    return (

            <form className={'container'} onSubmit={e => e.preventDefault()}>

                <label>First Name</label>
                <input type="text" placeholder="Your name.."/>

                <label>Last Name</label>
                <input type="text" placeholder="Your last name.."/>

                <label>Planet</label>
                <select name='planet'>
                    {planets.map(item=><option value={item} key={item}>{item}</option>)}
                </select>

                <label>Subject
                <textarea placeholder="Write something.."></textarea>
                </label>
                <button type={'submit'}>Submit</button>
                </form>
                );
            };

export default Contact;