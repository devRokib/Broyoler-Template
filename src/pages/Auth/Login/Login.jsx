import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../../confige/confige";
import Loading from "../../../component/Loading/Loading";
import { toast } from 'react-toastify';

function Login() {
  const [signInWithEmailAndPassword ,user,loading,error] = useSignInWithEmailAndPassword(auth)
  let navigate = useNavigate()
  // const location = Location()
  const HandleBack =()=>{
        navigate(-1)
  }

  const HandleHome = (()=>{
    navigate('/')
  })
  let from = location.state?.from?.pathname || '/' ;
  if(loading){
    return <Loading/>
  }
  let errorElement ;
  if (error) {
    errorElement = <p>{error.message}</p>
  }
  if (user){
    // console.log(from)
    navigate(from,{replace:true});
    toast.success(`Log in Successfully`,{
      toastId:'success1'
    })
  }
  const handleSignIn = async (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email)
    await signInWithEmailAndPassword(email,password)
  }
  return (
    <div>
      <div className="loginSection">
        <div className="loginContainer">
          <div className="formContainer  LoginForm">
            <form action="#" onSubmit={handleSignIn}>
              <input
                className="dftInput"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <br />
              <input
                className="dftInput"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <br />
              <button className="singINBtn">Log In</button>
              <NavLink>
                <p className="forgetPassword">forgotten password ?</p>
              </NavLink>
              <p className="goSingupPage">
                
                <NavLink to="/signup">Create Account</NavLink>
              </p>
             <p className="previousButton">
             <button className="goBack" onClick={HandleBack}>Go back</button>
              <button className="goHome" onClick={HandleHome}>Home </button>
             </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
