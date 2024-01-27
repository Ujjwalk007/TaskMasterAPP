import './index'
import {useNavigate} from 'react-router-dom'

var Huser = '';
var Hpass = '';

function checkUser(navigate)
        {
                const u = document.getElementById('user').value;
                const p = document.getElementById('pass').value;

                fetch('https://taskmaster-l4jm.onrender.com/log',{method:'POST',
                headers : {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "username":u,"password":p })
                }).then(function(response){
                        return response.text();
                }).then(function(data){
                        if(data === "True")
                        {
                                Huser = u;
                                Hpass = p;

                                navigate('/home');
                        }
                        
                        else
                        document.getElementById('error').innerHTML = "Wrong Credentials";
                })
        }
 
function Login()
{
        const navigate = useNavigate();

        

        return(
            <div style={{'paddingTop':'50px','paddingBottom':'120px','display':'flex','justifyContent':'center','background': 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)'}}>
                
            <div style={{'height':'420px','width':'50px','backgroundColor':'black','background': 'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)'}}></div>
                
            <center>

                <div className="login">
                        <label style={
                            {'fontFamily':'fantasy',
                            'fontSize' : '30px'
                            }}>
                            LOGIN
                        </label>

                        <br/><br/><br/><br/><br/>
                Username : <input type='text' id='user'/>
                        <br/><br/>
                Password : <input type='password' id='pass'/>
                        <br/><br/><br/>
                        <button onClick={()=>(checkUser(navigate))} className='btn-grad'>
                            Login
                        </button><br/>
                        <label id='error' style={{'color':'red'}}></label>
                        <br/>
                        New to TaskMaster? 
                        <br/>
                        <button type='button' onClick={()=>navigate('/signup')} className='btn-grad'>
                                Sign Up
                        </button>


                        


                </div>
                

            </center>
                
                    

            </div>
        )
}

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


export {Login,SignUp,Hpass,Huser}