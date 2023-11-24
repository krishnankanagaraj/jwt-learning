
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [newUser,setNewUser]=useState({name:'',email:'',password:''})


    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/register',newUser,{headers:{"Content-Type":'application/json'}}).then(res=>{
            console.log(res)
        }).catch(err=>{console.log(err)})
    }
    const inputHandler=(e)=>{
        setNewUser({...newUser,[e.target.name]:e.target.value})
        console.log(newUser)
    }
  return (
    <div className="container-fluid bg-dark" style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center ">
            <form method='post' className='bg-white p-4 rounded' style={{width:'50vw',minWidth:'350px',boxShadow:'2px 2px 8px white'}} onSubmit={handleSubmit} >
                <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name='name' className="form-control" id="name" aria-describedby="emailHelp" onChange={inputHandler}/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={inputHandler}/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name='password' onChange={inputHandler} className="form-control" id="exampleInputPassword1"/>
                </div>
                <p>New User?<Link to="/register">Register</Link></p>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Register