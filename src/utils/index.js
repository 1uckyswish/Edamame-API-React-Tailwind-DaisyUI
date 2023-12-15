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

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error('Error fetching recipe:', error.message);
    throw error;
  }
}

