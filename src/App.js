import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  flex-direction: column;
`;

const Button = styled.button`
  background:-webkit-linear-gradient(top left, #007d35 0%, #007d35 20%, #0f574e 100%);
  background-size:200px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  padding: 1rem 3rem;
  margin: 3rem 0;
  font-size: 2rem;
  border: 2px solid black;

`;

function App() {
  
  const consultarAPI = () => {

    const resultado = fetch('https://breakingbadquotes.xyz'); // (fetch) toma la url a la que vamos hacer la consulta, este métod sirve para la petición a servidor 
    const frase = resultado.then(respuesta => {
      return respuesta.json();
    }) ;

    console.log(frase); 
  }
  
  return (
   <Contenedor>
      <Button
        // onClick={consultarApi}
        onClick = {() => consultarAPI()}
      >
        Get Phrase
      </Button>
   </Contenedor>
  );
}

export default App;
