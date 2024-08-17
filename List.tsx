type Props={
    data: string[];
}
function List({data}:Props){
return(
    <ul>
    {data.map((elemento)=>(<li>{elemento}</li>))}
    </ul>
);
}
export default List;