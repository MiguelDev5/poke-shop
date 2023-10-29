const fetchData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const jsonData = await response.json();
        console.log("--------------->1");
        return jsonData;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
};

export default fetchData;