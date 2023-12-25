
import { NavLink } from "react-router-dom";
import "./Signup.css";


import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../confige/confige";
import { toast } from "react-toastify";

import { useNavigate } from 'react-router-dom';
import Loading from "../../../component/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";


function SingUp() {
 
  // const [err,setErr] = useState('')

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{
    sendEmailVerification:true ,
  });
  const navigate = useNavigate()

  let [updateProfile,updating] = useUpdateProfile(auth)
  if(loading || updating){
    return <Loading/>
  }
  let errorElement;
  if (error){
    errorElement = <p>{error?.message}</p>
  }
  if (user){
    navigate('/')
  }
  
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;
   
    // console.log(name, email, password, confirmPassword);
    if(name = ""){
      console.log('please give your name')
    }
    if(password.length < 6){
       return toast.error('Password Mimimum Should be 6 Digit')
    }
    if(password !== confirmPassword){
     return toast.error('password does not match')
    }

  else {
   await createUserWithEmailAndPassword(email, password)
   await updateProfile({displayName:name})
   return toast.success('Sign Up successfully !')
  }
    }
  return (
    <div>
      <div className="SingUpSection">
        <div className="singUpContainer">
          <div className="singUpForm">
            <div className="formContainer">
              <form onSubmit={formSubmitHandler}>
                <h2>Create an Account</h2>
                <p className="singInBtnContainer">
                  <NavLink to="/login" className="goLoginPage">
                    Already have Account Log In
                  </NavLink>
                 
                </p>
                <input
                   className="dftInput"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
                <br />
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
                <input
                  className="dftInput"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />
                <br />
                
                <div>
                <input type="submit" value="Sign Up" className="singUpBtn"/>
                </div>

               
              </form>

               <SocialLogin/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
