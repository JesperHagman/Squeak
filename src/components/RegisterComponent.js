import { useState, React } from 'react'


export default function Register() {
  const [details, setDetails] = useState({name: "", email: "", password: "", phone: "", username: ""})
  

    const registerHandler = async (e) => {
      e.preventDefault()

      const registerUser = {
          name: details.name,
                                username:  details.username,
          email: details.email,
                password: details.password,
          
                phone: details.phone
      }

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

  


  return (
    <form onSubmit={registerHandler}>
        <div>
            <h2>Registrera</h2>
            
            
            <div>
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" id="name" required onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>

            <div>
                <label htmlFor='phone'>Phone:</label>
                <input type="text" phone="phone" id="phone" required onChange={e =>setDetails({...details, phone: e.target.value})} value={details.phone}/>
            </div>

            <div>
                <label htmlFor='email'>Email:</label>
                <input type="text" email="email" id="email" required onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>

            <div>
                <label htmlFor='password'>Password:</label>
                <input type="password" password="password" id="password" required onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>

            <div>
                <label htmlFor='username'>Username:</label>
                <input type="text" name="name" id="name" required onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>

            <input type="submit" value="REGISTER"/>
        </div>
    </form>
  )
}
