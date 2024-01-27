import { useEffect, useState } from 'react';
import { populate,summary } from './render';
import { Hpass,Huser } from './login';
import {useNavigate} from 'react-router-dom' 

import './App'



function HomeUI()
{

  var [todos,setTodos] = useState([]);
  const navigate = useNavigate();
  


  useEffect(() => {
    
    if(Hpass === '' || Huser === '')
    navigate('/');
  }, [navigate]);

  
  function fetchdata(){

    fetch("https://taskmaster-l4jm.onrender.com/all",{
      method:'GET',
      headers :{
        'username':Huser,
        'password':Hpass
      }
    }).then(function(resolve){
        if(!resolve.ok)
        console.log("Cant Parse the info...");

        return resolve.json();
        }).then(function(data){
        
        setTodos(data.todolist);
        })

  }

  

  function done(id){

        fetch("https://taskmaster-l4jm.onrender.com/done",{
          method:'POST',
          headers : {
            'Content-Type': 'application/json',
            'username':Huser,
            'password':Hpass
          },
          body: JSON.stringify({ "id":id })
        }).then(function(response){
          if(response.ok)
          {
            const ind = todos.findIndex(obj => obj["_id"] === id);
            
            const updated = [...todos];
            updated[ind]["stat"] = true;

            setTodos(updated);
          }
        });

        

  }

  function delTodo(id)
  {
    fetch("https://taskmaster-l4jm.onrender.com/del",{
      method:'DELETE',
      headers : {
        'Content-Type': 'application/json',
        'username':Huser,
        'password':Hpass
      },
      body: JSON.stringify({ "id":id })
    }).then(function(response){
      if(response.ok)
      {
        const ind = todos.findIndex(obj => obj["_id"] === id);
        
        var updated = [...todos];
        updated.splice(ind,1);

        setTodos(updated);
      }
    });
  }

  function addTodo()
  {
    const t = document.getElementById('title');
    const d = document.getElementById('desc');

    fetch("https://taskmaster-l4jm.onrender.com/create",{
      method:'POST',
      headers : {
        'Content-Type': 'application/json',
        'username':Huser,
        'password':Hpass
      },
      body: JSON.stringify({ 
              "title":t.value,
              "description" : d.value,
              "stat" : false
       })
    }).then(function(response){
      if(response.ok)
      {
        
        
        var updated = [...todos];
        updated.push({ 
          "title":t.value,
          "description" : d.value,
          "stat" : false
   })

        setTodos(updated);
        t.value = '';
        d.value = '';
      }
    });
  }

  

  useEffect(fetchdata,[]);

  


  return(

    
    <div>

      
     

<div className='upper'>

<center>

    Your ToDO List

</center>

</div>

<div className='lower'>

<div>


  <div className='left'>

            Add ToDo <br/><br/>

            Title : <input type='text' id='title'/> <br/><br/>
            Description : <input type='text' id='desc'/><br/><br/>

            <button type='button' onClick={()=>addTodo()}>Add</button>

            <br/><br/>

  </div>


<div style={{backgroundColor:'white'}}>

  {summary(todos)}

</div>


</div>


<div id= 'right' className='right'>

      
  {populate(todos,delTodo,done)}

</div>



    </div>

</div>
  )

}

export {
    HomeUI
}