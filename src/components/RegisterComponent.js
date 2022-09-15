import React, { useState } from 'react'


const RegisterComponent = () => {
  const [details, setDetails] = useState({name: "", email: "", password: "", phone: "", username: ""})
  const [error, setError] = useState("")
  

    const registerHandler = async (e) => {
      e.preventDefault()

      const registerUser = {
          name: details.name,
          username:  details.username,
          email: details.email,
          password: details.password,
          phone: details.phone
      }

      if(details.email === "" || !details.email.includes('@') || !details.email.includes('.')){
        setError('Please provide a valid email adress')
    } else if(details.password === "") {
        setError('Please provide a password')
    } else if (details.name === "") {
        setError('Please provide you´r name')
    } else { 
        fetch('http://localhost:5001/api/auth/register', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(registerUser)
         } )
         .then(res => res.json())
         .then(data => {
            console.log(data)
         })
    } 
  } 

  


  return (
    <div data-testid="registerform">
      <form onSubmit={registerHandler}>
            <h2>Registrera</h2>

            <div className='errorMessage' data-testid='errorMessage'>
                 {error} 
            </div>

            <div>
                
                
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name="name" id="name" data-testid='name'
                    onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>

                <div>
                    <label htmlFor='phone'>Phone:</label>
                    <input type="text" phone="phone" id="phone" data-testid='phone'
                    onChange={e =>setDetails({...details, phone: e.target.value})} value={details.phone}/>
                </div>

                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type="text" id='email' data-testid='email' name="email" placeholder="E-mail" 
                    onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>

                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" password="password" id="password" data-testid='password'
                    onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>

                <div>
                    <label htmlFor='username'>Username:</label>
                    <input type="text" name="username" id="username" data-testid='username'
                    onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>

                <input type="submit" value="REGISTER"/>
            </div>
        </form>
    </div>
  )
}

export default RegisterComponent