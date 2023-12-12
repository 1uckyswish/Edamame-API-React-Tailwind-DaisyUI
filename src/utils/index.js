export async function fetchRecipes(filter) {
    try {
        const { query, limit } = filter;
        const url = `https://api.edamam.com/search?q=${query}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_API_KEY}&from=0&to=${limit}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recipes:', error.message);
        console.log(import.meta.env.VITE_APP_ID);
        throw error;
    }
}
