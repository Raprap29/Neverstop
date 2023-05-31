import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../AppApi/Api";
function Login() {
    const navigate = useNavigate();
    const [login, { isLoading, error }] = useLoginMutation();
    const [formData, setFormData] = useState({
      Username: '',
      password: '',
    });
    const [formErrors, setFormErrors] = useState({
      Username: '',
      password: '',
    });
    
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setFormErrors({ ...formErrors, [e.target.name]: '' }); // clear the error message
    };
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { Username, password } = formData; 
      const newFormErrors = { ...formErrors };
      let error = 0;
      try {
        if(Username === null || Username === ""){
          newFormErrors.Username = "Please provide username";
          error++;
        }

        if(password === null || password === ""){
          newFormErrors.password = "Please provide password";
          error++;
        }
        if (Object.values(newFormErrors).some((val) => val !== '')) {
          return setFormErrors(newFormErrors);
        }
        
        if(error === 0){
          await login({
            Username,
            password
          }).unwrap();

          navigate("/");
        }
       // handle successful login
      } catch (err) {
        console.error(err); // handle login error
      }
      
    };
  
    return (
      <div className="pt-[5rem] bg-[#141728] h-[100vh] w-full">
       <div className="flex justify-center flex-col items-center mt-10 gap-10 p-4">
        <div>
            <p className="lemon text-white text-[50px]">Login</p>
          </div>
          <div className="bg-[#D9D9D9] w-full container mx-auto max-w-[540px] p-6 rounded-xl" style={{boxShadow: "inset 0px -3px 13px 0 rgba(0, 0, 0),  5px 4px 10px 4px rgba(0, 0, 0, .55)"}}>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-y-[5px]">
              <div><p className="font-bold text-[22px] text-[red]">{error && error.data.msg}</p></div>
              <div className="w-full pt-4">
                <input className="w-full h-[55px] px-4 bg-[#141728] rounded-xl outline-none placeholder-[rgba(255,255,255,0.5)] placeholder:italic text-[#fff]" type="text" onChange={(e) => handleChange(e)} name="Username" placeholder="Username" />
                {formErrors.Username && (
                  <div><p className="text-[red] p-2 font-bold">{formErrors.Username}</p></div>
                )}
              </div>
              <div className="w-full pt-4">
                <input className="w-full h-[55px] px-4 bg-[#141728] rounded-xl outline-none placeholder-[rgba(255,255,255,0.5)] placeholder:italic text-[#fff]" type="password" onChange={(e) => handleChange(e)} name="password" placeholder="Password" />
                {formErrors.password && (
                  <div><p className="text-[red] p-2 font-bold">{formErrors.password}</p></div>
                )}
              </div>
              <div className="w-full bg-[#E1D49F] rounded-xl mt-5">
                <button type="submit" className="py-4 w-full lemon text-[27px] hover:bg-[#141728] hover:text-[#fff] transition duration-350 ease-in-out rounded-xl text-[#141728]"> {isLoading ? <div>Loading...</div> : 'Login'}</button>
              </div>
            </form>
          </div>
       </div>
      </div>
    );
  }

export default Login;