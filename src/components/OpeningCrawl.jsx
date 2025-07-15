import {useEffect, useState} from "react";
import {base_URL, openingCrawl} from "../utils/components.js";

const OpeningCrawl = () => {
    const [OpeningCrawl, setOpeningCrawl] = useState('')

    useEffect(() => {
        const opening_crawl = sessionStorage.getItem("opening_crawl");
        if(opening_crawl) {
            setOpeningCrawl(opening_crawl);
        }else {
            const episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${base_URL}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl)
                    sessionStorage.setItem("opening_crawl", data.opening_crawl);
                });
        }
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