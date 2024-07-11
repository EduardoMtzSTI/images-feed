const ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
  try {
    const res = await fetch(ENDPOINT_RANDOM_FACT);
    if (!res.ok) throw new Error("Error al solicitar el recurso");
    const data = await res.json();
    return data.fact;
  } catch (error) {
    throw new Error("Error al solicitar el recurso o respuesta del recurso.");
  }
};
