import {friend} from '../utils/components.js';
const DreamTeam = () => {
    return (
        <section className={"float-end w-50 row border rounded-bottom-4 ms-0 me-2"}>
            <h2 className={"col-12 text-center"}>Dream team</h2>
            {friend.map((f, i) => <Friend picture={f} key={i} pos={i+1}/>)}
        </section>
    );
};

export default DreamTeam;