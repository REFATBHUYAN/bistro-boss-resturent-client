import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';


const Login = () => {
    const {signIn} = useContext(AuthContext);
    
    const [disabled, setDesabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])


    const handleValidateCaptcha = (e) =>{
        const value = e.target.value;
        console.log(value);
        if (validateCaptcha(value)==true) {
            setDesabled(false);
        }
   
        else {
            setDesabled(true);
        }
    }

    const handleLogin = event =>{
        // event.preventDefault();
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleValidateCaptcha} 
                  
                  placeholder="Type the Captcha"
                  className="input input-bordered"
                />
                
                
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  // TODO: button disable reconstract
                  disabled={false}
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p>New Here? <Link to='/signup'>Create an account</Link> </p>
            
          </div>
          <SocialLogin></SocialLogin>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
