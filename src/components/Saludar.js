import React from "react";

//las propiedades llegan a los() de la funcion, 
function Saludar (props){
    //los props o propiedades, son con el . y despues pones que variable quieres recuperar.
    console.log(props.name);

    return(
<div>
        {/* para decirle que es una variable y no un texto se tienen que envolver en {}, ya ahora si imprime la variable */}
        <h1>que onda {props.name}, tu tienes {props.años} años  </h1>
</div>

    );

}

export default Saludar;