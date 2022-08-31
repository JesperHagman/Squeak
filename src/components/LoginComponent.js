import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const LoginComponent = () => {

const auth = getAuth()
const [message, setMessage] = useState("")
const [details, setDetails] = useState({
    email: "",
    password: ""
})

const submitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, details)
    .then(userCredentials => {
        const user = userCredentials.user
    })
    .catch(error => setMessage(error.message))
}
    
    return (  
        <form onSubmit={submitHandler}>
            <div>
                <h2>Logga in</h2>
                    <div className='errorMessage'>
                        {message}
                    </div>
                    <div>
                        <label htmlFor="email">
                            <input type="email" name="email" id="email" placeholder="E-mail" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                        </label>                    
                        <label htmlFor="password">
                            <input type="password" name="password" id="password" placeholder="Lösenord" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                        </label>                    
                    </div>
                    <input type="submit" value="Logga in"></input>
            </div>
        </form>
            
    );
}
 
export default LoginComponent;