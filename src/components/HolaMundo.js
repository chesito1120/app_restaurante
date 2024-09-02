//componente siempre debe empezar con mayuscula
import React from "react";

//LAS FUNCIONES VAN EN MAYUSCULAS
function HolaMundo (){


    return (
        <div>
            <h1> quiubole perro</h1>
            <h2> ivan caballero</h2>
        </div>
    );
}

//con este exportas el componente, siempre debe tener esta parte 
export default HolaMundo;



//esta manera tambien funciona, se pueden usar las dos maneras 
// export default function HolaMundo (){


//     return (
//         <div>
//             <h1> quiubole perro</h1>
//             <h2> ivan caballero</h2>
//         </div>
//     );
// }


//cuando quieres poner mas de una funcion,no puedes exportarla por default, tiene que ser con export al inicio de la funcion
export function AdiosMundo(){
   
    return (
        <div>
        <h1> ya te cagaste papi o que </h1>
        <h2> tu mama no crio culos</h2>


        </div>
    )
}
