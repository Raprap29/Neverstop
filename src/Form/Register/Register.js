import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../AppApi/Api';
import "../Register/register.css";
import img from "../Register/img/17760130_1356537247763381_952046755170736834_n.jpg";
import {FaPen} from "react-icons/fa";
const RegisterForm = () => {
    const user = useSelector((state)=> state.user);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      Email: '',
      confirmpassword: '',
    });
    const [vh, setvh] = useState(false);
    const navigate = useNavigate();
    const [upload,setUpload] = useState(null)
    const [formErrors, setFormErrors] = useState({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      Email: '',
      upload: '',
      confirmpassword: '',
    });
    const base64image = (file) =>{
      return new Promise((resolve, reject)=>{
        const fileReader = new FileReader();
    
        fileReader.readAsDataURL(file);
    
        fileReader.onload = () =>{
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) =>{
          reject(error)
        }
      })
    }
      const uploadImage = async (e) => {
        const file = e.target.files[0];
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = 200;
          canvas.height = 200;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          canvas.toBlob(async (blob) => {
            const base64 = await base64image(blob);
            setUpload(base64);
            setFormErrors({ ...formErrors, upload: '' }); // clear the error message
          }, "image/jpeg", 1);
        };
      };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setFormErrors({ ...formErrors, [e.target.name]: '' }); // clear the error message
    };

    let newErrorCount = 0;
  
    const [register, { isLoading, error }] = useRegisterMutation();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newFormErrors = { ...formErrors };
      try {
        if(formData.firstName === ""){
          newFormErrors.firstName = 'Please enter your first name';
          newErrorCount++;
        }
  
        if(formData.lastName === ""){
          newFormErrors.lastName = 'Please enter your last name';
           newErrorCount++;
        }
  
        if(formData.username === ""){
          newFormErrors.username = 'Please enter your username';
           newErrorCount++;
        }

        if(!upload){
          newFormErrors.upload = "Please upload your profile";
          newErrorCount++;
        }
        if(formData.Email === ""){
          newFormErrors.Email = 'Please enter your email';
          newErrorCount++;
        }
  
        if(formData.password === ""){
          newFormErrors.password = 'Please enter your password';
           newErrorCount++;
        }else if (formData.password.trim().length < 5) {
          newFormErrors.password = 'Password must be at least 8 characters long';
          newErrorCount++;
        }
  
        if(formData.confirmpassword === ""){
          newFormErrors.confirmpassword = 'Please provide confirm your password';
          newErrorCount++;
        }else if(formData.password !== formData.confirmpassword){
          newFormErrors.confirmpassword = 'Passwords do not match';
          newErrorCount++;
        }
        if(newErrorCount > 0){
          setvh(true);
        }else{
          setvh(false);
        }

        if (Object.values(newFormErrors).some((val) => val !== '')) {
          return setFormErrors(newFormErrors);
        }

        if(newErrorCount === 0){
          await register({ 
            firstName: formData.firstName,
            lastName: formData.lastName,
            Username: formData.username,
            Email: formData.Email,
            password: formData.password,
            image: upload,
          }).unwrap();
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(()=>{
      if(user.isLogin){
          return navigate('/');
      } 
  })
    return (
      <div className='FormContainerRegister'style={{height: vh ? "135vh" : "105vh"}} >
        <div className='FormRegister'>
          <h1 className='titleRegform'>Registration</h1>
          <form onSubmit={handleSubmit} className="formReg">
          <div className='flex justify-center items-center'>
            <div style={{ width: "8rem", height: "8rem", borderRadius: "50%", backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "7px 7px 10px 5px rgba(0,0,0,0.25)", position: "relative", padding: ".5rem" }}>
              <img className='rounded-full' src={upload === "" || upload === null ? img : upload} alt="profile" style={{ width: "100%", height: "100%" }} />
              <div className='flex justify-center items-center' style={{ position: "absolute", top: ".4rem", right: ".7rem", width: "2rem", height: "2rem", borderRadius: "50%", backgroundColor: "#fff" }}><FaPen/></div>
            </div>
          </div>
          {formErrors.upload && (
            <p className='text-center' style={{color: "red", fontWeight: "700", marginTop: "5px"}}>{formErrors.upload}</p>
          )}
           <div className='flex justify-center items-center flex-col max-w-lg upcontainer  mt-1'>
            <label htmlFor="upload-photo" id='uploadphoto' className='px-8 py-3 m-1 rounded-xl lemon text-white cursor-pointer'>UPLOAD PHOTO</label>
            <input accept="image/jpeg, image/png" id="upload-photo" name='uploadPhoto' onChange={(e)=> (uploadImage(e))} type="file" style={{ display: 'none' }} />
          </div>
            <div className='flex'>
              <div className='FormControl'>
                <input
                  type="text"
                  name="firstName"
                  placeholder='First name'
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {formErrors.firstName && (
                  <p className='errorMsg'>{formErrors.firstName}</p>
                )}
            </div>
              <div className='FormControl'>
              <input
                type="text"
                name="lastName"
                placeholder='Last name'
                value={formData.lastName}
                onChange={handleChange}
              />
              {formErrors.lastName && (
                <p className='errorMsg'>{formErrors.lastName}</p>
                )}
              </div>
            </div>
        <div className='FormControl'>
          <input
              type="text"
              name="username"
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
            />
            {formErrors.username && (
                <p className='errorMsg'>{formErrors.username}</p>
              )}
        </div>
        <div className='FormControl'>
        <input
          type="text"
          name="Email"
          id="email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
        />
            {formErrors.Email && (
                <p className='errorMsg'>{formErrors.Email}</p>
              )}
        </div>
          <div className='FormControl'>
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && (
            <p className='errorMsg'>{formErrors.password}</p>
          )}
          </div>
         <div className='FormControl'>
         <input
            type="password"
            name="confirmpassword"
            placeholder='Confirm password'
            value={formData.confirmpassword}
            onChange={handleChange}
          />
          {formErrors.confirmpassword && (
            <p className='errorMsg'>{formErrors.confirmpassword}</p>
          )}
         </div>
         <div className='flex justify-center items-center p-4'>
         <button className='BtnReg lemon' type="submit">
            {isLoading ? <div>Loading...</div> : 'Register'}
          </button>
         </div>
         <p className='text-[red] font-bold text-center text-[red] p-2 text-[17px]'>{error && error.data.msg}</p>
        </form>
        </div>
        
      </div>
    );
  };
  
  export default RegisterForm;