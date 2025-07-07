import friend1 from '../images/friend1.jpg';
import friend2 from '../images/friend2.jpg';
import friend3 from '../images/friend3.jpg';
import friend4 from '../images/friend4.jpg';
import friend5 from '../images/friend5.jpg';
import friend6 from '../images/friend6.jpg';
import friend7 from '../images/friend7.jpg';
import friend8 from '../images/friend8.jpg';
import friend9 from '../images/friend9.jpg';
const DreamTeam = () => {
    return (
        <section className={"float-end w-50 row border rounded-bottom-4 ms-0 me-2"}>
            <h2 className={"col-12 text-center"}>Dream team</h2>
            <img className={"col-4 p-1"} src={friend1} alt={"Friend1"}/>
            <img className={"col-4 p-1"} src={friend2} alt={"Friend2"}/>
            <img className={"col-4 p-1"} src={friend3} alt={"Friend3"}/>
            <img className={"col-4 p-1"} src={friend4} alt={"Friend4"}/>
            <img className={"col-4 p-1"} src={friend5} alt={"Friend5"}/>
            <img className={"col-4 p-1"} src={friend6} alt={"Friend6"}/>
            <img className={"col-4 p-1 bottomLeft"} src={friend7} alt={"Friend7"}/>
            <img className={"col-4 p-1"} src={friend8} alt={"Friend8"}/>
            <img className={"col-4 p-1 bottomRight"} src={friend9} alt={"Friend9"}/>
        </section>
    );
};

export default DreamTeam;