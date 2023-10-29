const fetchPoke = async (pokename) => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokename);
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
};

export default fetchPoke;