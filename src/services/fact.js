const ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const getRandomFact = () => {
    return fetch(ENDPOINT_RANDOM_FACT).then(res => res.json).then(data => {
        const { fact } = data;
        return fact;
    })
};

export const getRandomFactv2 = async () => {
    const res = await fetch(ENDPOINT_RANDOM_FACT);
    const data = res.json;
    const { fact } = data;
    return fact;
};

export const getRandomFactAsync = async () => {
    try {
        const res = await fetch(ENDPOINT_RANDOM_FACT);
        if (!res.ok) throw new Error("Error al solicitar el recurso");
        const data = await res.json();
        return data.fact;
    } catch (error) {
        throw new Error("Error al solicitar el recurso o respuesta del recurso.");
    }
};
