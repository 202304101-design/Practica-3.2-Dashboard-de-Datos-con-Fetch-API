import { obtenerUsuarios } from "./api.js";

const contenedor = document.getElementById("contenedor-usuarios");
const spinner = document.getElementById("spinner");
const estado = document.getElementById("estado");


function mostrarEstado(mensaje, tipo="info"){

estado.textContent = mensaje;
estado.className = `estado-${tipo}`;

}


function crearTarjeta(usuario){

const tarjeta = document.createElement("div");

tarjeta.className="tarjeta";

tarjeta.innerHTML=`

<h3>${usuario.firstName} ${usuario.lastName}</h3>

<p><strong>Correo:</strong> ${usuario.email}</p>

<p><strong>Teléfono:</strong> ${usuario.phone}</p>

<p><strong>Empresa:</strong> ${usuario.company.name}</p>

`;

return tarjeta;

}


document.getElementById("btnCargar").addEventListener("click",async()=>{

spinner.hidden=false;

contenedor.innerHTML="";

mostrarEstado("Cargando usuarios...","info");

try{

const usuarios = await obtenerUsuarios();

usuarios.forEach(u=>{
contenedor.appendChild(crearTarjeta(u));
});

mostrarEstado(`${usuarios.length} usuarios cargados`,"ok");

}catch(error){

mostrarEstado("Error al obtener datos","error");

}finally{

spinner.hidden=true;

}

});