import React, { useState } from "react";
import {personaje} from '../helpers/personaje'

export const Button = ({ }) => {

      const [personajes, setPersonajes]= useState([])
    
    
  

  return (
    <nav>
      <button onClick={async ()=> {
   
     
   
        setPersonajes(await personajes(data.results))
       console.log("hola")
     }} >Traer Personaje</button>
    </nav>
  );
};

export default Button;