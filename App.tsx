import Card,{CardBody} from "./components/Card";//importa los componentes al archivo Card.tsx
import List from "./components/List";
function App(){ 
  const list=["Brian","Leonel","Baptista"];
  return (
  <Card>
    <CardBody title="12 de agosto..." text="lunes tarde..."/>
    <List data={list}/>/*paso propiedades mediante un objeto*/
  </Card>);
}
export default App;
