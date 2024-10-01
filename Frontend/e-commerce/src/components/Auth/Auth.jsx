import { useState } from "react";
import { toast } from "react-toastify";
import "./Auth.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase.jsx";
import { useNavigate } from "react-router";

const Auth = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      const user = response.user; 
      if(user){
        navigate("/")
      }
    } catch (error) {
      toast.error("Failed to login" + error.message)
    }
  }

  const register = async () => {
   try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    const user = response.user;
    if(user){
      toast.success("Registration Successful")
      setEmail("");
      setPassword("");
    }
   } catch (error) {
    toast.error(error.message)
   }
  }

  return (
    <div className="auth">
      <h3>Login / Register</h3>
      <div>
        <input value={email} onChange={(e) => setEmail(e.target.value) } type="email" placeholder="Email Address" />
        <input value={password} onChange={(e) => setPassword(e.target.value) } type="password" placeholder="Password" />
      </div>
      <div className="auth-btn">
        <button onClick={login} className="btn btn-login">Login</button>
        <button onClick={register} className="btn btn-register">Register</button>
      </div>
    </div>
  );
};

export default Auth;
