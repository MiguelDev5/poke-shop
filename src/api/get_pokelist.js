const fetchData = async (pageNumber) => {
    try {
        var offset = 48*(pageNumber - 1);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit=48');
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
};

export default fetchData;