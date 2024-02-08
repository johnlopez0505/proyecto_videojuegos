

export const getCategories = async () => {
    try {
        const response = await fetch("http://localhost:3500/categories");
        return {error: false, data: await response.json()};
    } catch(e) {
        return {error: true, data: "No se ha podido cargar las categorias"}
    }
}