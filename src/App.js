import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Register from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'/>
        <Route path='/login' element={ <LoginComponent/> }/>
        <Route path='/register' element={ <Register/> } />
      </Routes>
    </Router>

  );
}

export default App;
