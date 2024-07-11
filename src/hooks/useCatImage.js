import { useEffect, useState } from "react";

export function useCatImage({ fact }) {
    const ENDPOINT_RANDOM_CAT_IMG = "https://cataas.com/cat/says/";
    const [image, setImage] = useState();

    useEffect(() => {
        if (!fact) return;
        const firstWord = fact.split(" ")[0];
        setImage(
            ENDPOINT_RANDOM_CAT_IMG + firstWord + "?fontSize=50&fontColor=red"
        );
    }, [fact]);

    return { image };
}