import {useEffect, useState} from "react";
import {base_URL, openingCrawl} from "../utils/components.js";

const OpeningCrawl = () => {
    const [OpeningCrawl, setOpeningCrawl] = useState('')

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6) + 1;
        fetch(`${base_URL}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setOpeningCrawl(data.opening_crawl));
        // return () => console.log("Opening Crawl was unmounted");
    }, [])
    if (openingCrawl) {
        return (
            <p className={"farGalaxy"}>
                {OpeningCrawl}
            </p>
        )
    } else {
        return (
            <p className={'farGalaxy'}>
                <span className={'spinner-border spinner-border-sm'}></span>
                Loading...
            </p>
        )
    }

};

export default OpeningCrawl;