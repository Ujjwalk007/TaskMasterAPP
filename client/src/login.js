import './index'
import {useNavigate} from 'react-router-dom'






function Login()
{


       
        const navigate = useNavigate();


        function LoginHandler()
        {
                

                const u = document.getElementById('user').value;
                const p = document.getElementById('pass').value;

                console.log(u,p)

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
                                localStorage.setItem("User-info", JSON.stringify({ "username":u,"password":p }));
                                navigate('/home');
                        }
                        
                        else
                        document.getElementById('error').innerHTML = "Wrong Credentials";
                })
        }
 
        

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
                        <button onClick={LoginHandler} className='btn-grad'>
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



export {Login}