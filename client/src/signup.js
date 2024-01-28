
import {useNavigate} from 'react-router-dom' 


function Signuser(navigate)
{
        

                const u = document.getElementById('signuser').value;
                const p = document.getElementById('pass').value;

                fetch('https://taskmaster-l4jm.onrender.com/newuser',{
                        method:'POST',
                        headers:{
                                'Content-Type': 'application/json'
                        },
                        body:JSON.stringify({
                                "username":u,
                                "password":p
                        })
                }).then(function(response){
                        return response.text();
                }).then(function(data){

                        if(data === "Exist")
                        document.getElementById('signerr').innerHTML = "User Already Exist";
                        else
                        {
                                navigate('/');
                        }
                })
}


function SignUp()
{
        
        const navigate = useNavigate();

        return(
                <div style={{'paddingTop':'50px','paddingBottom':'120px','display':'flex','justifyContent':'center','background': 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)'}}>

                        <center>


                                <div className='signupUI'>

                                        <div style={{'fontSize':'30px','fontFamily': 'Baskerville, serif'}}>
                                                        Sign Up!
                                        </div>
                                        <br/><br/>
                                        Username : <input type='text' id='signuser'/>
                                        <br/><br/>
                                        Password : <input type='password' id='pass'/>
                                        <br/><br/>
                                        
                                        <button type='button' onClick={()=>Signuser(navigate)} className='btn-grad'>
                                                Create Account
                                        </button>
                                        <br/><br/>


                                        <label id='signerr' style={{'color':'red'}}></label>


                                </div>


                        </center>


                </div>
        )
}


export {SignUp}