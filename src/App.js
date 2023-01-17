import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard'
import Forgot from './Components/Forgot/Forgot';


function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
    </Router>
    
    

    </>
  );
}

export default App;
