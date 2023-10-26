import Contador from "./components/Contador";
import Conversor from "./components/Conversor";
import ListaDeNotas from "./components/ListaDeNotas";

function App(){

    return(
        <>
            <Contador numero ={1}/>
            <Conversor/>
            <ListaDeNotas/>

        </>
    );
}
export default App;