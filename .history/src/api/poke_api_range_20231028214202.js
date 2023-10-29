const fetchData = async (props) => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset='+48*props.+'&limit=48');
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
};

export default fetchData;