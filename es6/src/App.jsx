import "./App.css";
import { Link} from "react-router-dom"


function App() {

  return (
    <>
      <h1>Benvenuto nella Home Page</h1>
      <Link className="open" to="/users">Apri la lista utenti</Link>
    </>
  );
}

export default App;
