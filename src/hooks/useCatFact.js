import { useEffect, useState } from "react";
import { getRandomFactAsync } from "../services/fact";

export function useCatFact() {
    const [fact, setFact] = useState();

    const refreshFact = () => {
        getRandomFactAsync().then(setFact);
        //getRandomFactAsync().then((newFact) => setFact(newFact));
    };

    useEffect(refreshFact, []);

    return { fact, refreshFact };
}