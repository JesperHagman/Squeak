import React, { useState } from "react";
const fetchURL = 'http://localhost:5001/api/auth/login'


export const validateInput = (str = "") => str.includes("@")

const LoginComponent = () => {

const [error, setError] = useState("")
const [details, setDetails] = useState({
    email: "",
    password: ""
})

const handleLogin = (e) => {
    e.preventDefault();

    const user = {
        email: details.email,
        password: details.password
      }

    fetch(fetchURL, {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        if (data.loggedIn) {
            console.log("Logged in!")
          
          } else {
            setError(data.message)
            console.log(data.message)
          }
      })
}
    
    return (  
            <div>
        <form onSubmit={handleLogin}>
                <h2>Logga in</h2>
                    <div className='errorMessage'>
                        {error}
                    </div>
                    <div>

                        <label htmlFor="email" /> 
                                <input id='email' data-testid='email' name="email" placeholder="E-mail" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                       
                        {/* {details.email && !validateInput(details.email) ? {message} : null}                   */}
                        <label htmlFor="password">

                                <input type="password" data-testid='password' id='password' name="password" placeholder="Lösenord" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>

                        </label>                    
                    </div>
                    <input type="submit" value="Logga in"></input>
        </form>
            </div>
            
    );
}
 
export default LoginComponent;