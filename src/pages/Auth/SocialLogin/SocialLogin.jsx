import './SocialLogin.css'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import Loading from './../../../component/Loading/Loading';
import { toast } from 'react-toastify';
import auth from '../../../confige/confige';


function SocialLogin() {
    const [signInWithGoogle,gooleUser,googleLoading,googleError] = useSignInWithGoogle(auth)
    const [signInWithGithub,githubUser,githubLoading,githubError] = useSignInWithGoogle(auth)
    const navigate = useNavigate();
    let errorElement;
    if(googleLoading || githubLoading){
        return <Loading/>
    }
    if(googleError || githubError){
        errorElement= (
            <p>
                Error:{googleError?.message}
                Error:{githubError?.message}
            </p>
        )
    }
    if(gooleUser || githubUser){
        navigate('/');
        toast.success(`Log in Successfully` ,{
            toastId:"success1"
        })
    }
    // const signWithGoogle =(()=>{})
    // const signWithGithub =(()=>{})
  return (
    <div className='signwith'>
        <button onClick={()=>signInWithGoogle()}>sign with google</button>
        <button onClick={()=>signInWithGithub()} >sign with github</button>
    </div>
  )
}

export default SocialLogin