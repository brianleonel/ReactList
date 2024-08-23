type Props={/*se define la estructura de Props, en este caso un array de string*/
    data: string[];
}
function List({data}:Props){/*la funcion de :Props es q el componente list espera recibir una propiedad con la estructura de Props.
En data se desestructura Props, se extrae las propiedades de Props, data tiene la estructura y valores de Props 
*/
return(
    <ul>
    {data.map((elemento)=>(<li>{elemento}</li>))}
    </ul>
);
}
export default List;
