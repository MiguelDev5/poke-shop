const fetchData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=30');
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
};

export default fetchData;