import { useState } from "react";
const LoginComponent = () => {

const [message, setMessage] = useState("")
const [details, setDetails] = useState({
    email: "",
    password: ""
})

const handleLogin = (e) => {
    e.preventDefault();

    fetch('testJson/data.json', {
        headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
       data.map((newData) => {
        if(newData.email === details.email && newData.password === details.password) {
            console.log("Logged in!")
        } else {
            console.log("Not logged in")
        }
       })
    } )
    
}
    
    return (  
        <form onSubmit={handleLogin}>
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