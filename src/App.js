import Home from "./Components/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from "./Components/Add";
import Edit from "./Components/Edit";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Add/>}/>
      <Route path="/edit" element={<Edit/>}/>


      </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
