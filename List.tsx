type Props={/*se define la estructura de Props, en este caso un array de string*/
    data: string[];
}
function List({data}:Props){/*la funcion de :Props es q el componente list espera recibir una propiedad con la estructura de Props.
En data se desestructura Props, se extrae las propiedades de Props, data tiene la estructura y valores de Props 
*/
return(
    <ul>
    {data.map((elemento)=>(<li>{elemento}</li>))}
        /* es recomendable usar la propiedad key en li pq generalmente una lista de una base de datos tendria que 
        tener con una propiedad de id, en este caso el nombre es el id return(data.map((elem)=>(<li key={elem}>{elem}</li>)));*/
    </ul>
);
}
export default List;
