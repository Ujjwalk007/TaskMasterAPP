import './App.css';
import './home'
import { Author } from './render';
import { HomeUI } from './home';
import { Login,SignUp } from './login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

  
           
            
  

  return (
    <div style={{}}>
      
      <BrowserRouter>

             <Routes>
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/home' element={<HomeUI/>}   />
              <Route path='/' element={<Login/>}  />
              
            </Routes>

            <Author/>
      </BrowserRouter>
      
      

      
      
    </div>
  );
}

export default App;
