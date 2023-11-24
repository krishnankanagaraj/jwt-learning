import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const[user,setUser]=useState({email:'',password:''})

    axios.defaults.withCredentials=true
    const handelSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',user,{headers:{"Content-Type":'application/json'}}).then(res=>{
            console.log(res)
        }).catch(err=>{console.log(err)})

    }
    const inputHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

  return (
    <div className="container-fluid bg-dark" style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center ">
                <form method='post' className='bg-white p-4 rounded' style={{width:'50vw', minWidth:'350px',boxShadow:'2px 2px 8px white'}} onSubmit={handelSubmit}>
                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' onChange={inputHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' onChange={inputHandler} className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <p>New User?<Link to="/register">Register</Link></p>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login