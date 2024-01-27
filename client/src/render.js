import './App'
import './index.css'



function populate(todos,delTodo,done)
{
    const RenderedList = todos.map( function(task){
        
        const id = task["_id"]; 
        var c = 'white';
        var Dtext = "Set Done";

        if(task["stat"])
        {
            c = 'rgb(186, 239, 117)';
            Dtext = "Done!";
        }
        else
        c = 'rgb(243, 144, 144)';

        const taskcolor = {
            backgroundColor : c 
        }

        return(
            <div className="task" style={taskcolor}>

                Title : {task["title"]} <br/>
                Description : {task["description"]} <br/><br/>
                <button type="button" onClick={()=>done(id)}>{Dtext}</button>

                <button type="button" onClick={()=>delTodo(id)} style={{'marginLeft':'5px'}}>
                    Delete
                </button>
            </div>
            
        )
    } )

    return RenderedList;
}

function summary(todos)
{

    var completed = 0;
    var notDone = 0;

    todos.map(function(task){

        
        if(task["stat"] === true)
        completed++;
        else
        notDone++;

        return task;

    })


    return (
        <div style={{'backgroundColor':'white'}}>
            <br/><br/>
            <div style={{'border':'1px solid black','backgroundColor':'rgb(186, 239, 117)','width':'160px'}}> 
            Completed : {completed}
            </div>

            <div style={{'border':'1px solid black','backgroundColor':'rgb(243, 144, 144)','width':'160px'}}>
                To be Completed : {notDone} 
            </div>

            <div style={{'border':'1px solid black','backgroundColor':'white','width':'160px'}}>
                Total : {todos.length} 
            </div>
            <br/><br/>
            

        </div>
    )
}

function Author()
{
    return (
        <div className='author' style={{'padding':'2px','background-color':'#0093E9','background-image': 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'}}>

            <div>
            <label style={{'fontFamily':'Fantasy','paddingLeft':'10px'}}>Connect Me</label><br/><br/>


           <button className='btn-link' onClick={()=>window.location.href='https://www.linkedin.com/in/ujjwal-kulkarni-45a194252'}>
                LinkedIn
           </button>

            <button className='btn-em' onClick={()=>window.location.href='mailto:empruk007@gmail.com'}>
                Email
           </button>

            
            

            </div>

            <div style={{'margin':'3px','border':'2px solid black','padding':'2px','backgroundColor':'white'}}>

            <label style={{fontFamily:'Fantasy'}}>Dedicated To Improvements</label><br/>
                <br/>
                This is a Small Project in React <br/>
                providing basic features <br/>
                to modify your ToDo List<br/>
                DO TRY OUT and let me know your Feedback

            </div>

            <div style={{'boarder':'2px solid black','margin':'2px'}}>
                <img src='logo.jpg' style={{'height':'80px','width':'40px'}} alt='logo'/>
                <br/>
                
                <label style={{fontFamily:'Arial'}}>UK Limited Co.</label><br/>
                ©Copyright
            </div>


        </div>

    )
}



export {
    populate,
    summary,
    Author
}

