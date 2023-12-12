export async function fetchRecipes(filter){
    const {query, limit} = filter;
    const url = `https://api.edamam.com/search?q=${query}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_API_KEY}&from=0&to=${limit}&`;

}


