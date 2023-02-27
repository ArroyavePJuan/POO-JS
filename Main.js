/* let persona = {

    nombre: 'Juan',
    apellido: 'Arroyave',
    edad: 24,
    direccion: {
        ciudad: 'medellín',
        barrio: 'Buenos Aires'
    }

}
console.log(persona); */


let personas = [];
for (let index = 0; index < 2; index++) {
    let nombre = prompt("Ingrese su nombre: ")
    let apellido = prompt("Ingrese su apellido: ")
    let edad = prompt("Ingrese su edad: ")
    let ciudad = prompt("Ingrese su ciudad: ")
    let barrio = prompt("Ingrese su barrio: ")

    let persona = {
        nombre, //si el atributo se llama igual que la variable se usa asi
        apellido: apellido,
        edad: edad,
        ciudad: ciudad,
        barrio: barrio

    }
    personas.unshift(persona)
}

//para recorrer el arreglo
/* for (let index = 0; index < personas.length; index++) {
    console.log(personas[index]);
} */

console.log("Recorrido forech");

personas.forEach((persona)=>{
    console.log(persona);
})

console.log("Recorrido map");

personas.map((persona)=>{
    console.log(persona);
})

//para recorrer el arreglo pero no se usa
/* for (const persona of personas) {
    console.log(personas);
} */

