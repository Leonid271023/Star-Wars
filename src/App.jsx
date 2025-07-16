import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import {useState} from "react";
import {navItems, StarWarsContext} from "./utils/components.js";


function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <StarWarsContext value={{changePage: setPage}}>
            <div className={'container-fluid'}>
                <Header/>
                <Main page={page}/>
                <Footer/>
            </div>
        </StarWarsContext>
    )
}

export default App
