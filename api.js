const BASE_URL = "https://dummyjson.com";

// Obtener solo 10 usuarios
export async function obtenerUsuarios(){

const respuesta = await fetch(`${BASE_URL}/users?limit=10`);

if(!respuesta.ok){
throw new Error("Error al obtener usuarios");
}

const datos = await respuesta.json();

return datos.users;

}