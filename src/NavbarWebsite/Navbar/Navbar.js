import React from "react";
import './Navbar.css'
import logo from '../logo/22b8289b4845282e33788c94352ffd74-black.png'
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const target = document.querySelector('.target');
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logOutUser = (e) =>{
      e.preventDefault();
      dispatch(logout());
      navigate("/");
    }
    React.useEffect(()=>{
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setNavbarOpen(false)
          );
        if(navbarOpen){
          disableBodyScroll(target)
        }else{
          enableBodyScroll(target)
        }
    }, [navbarOpen, target])
    return(
        <>
        <nav className="flex flex-wrap items-center justify-between px-2 bg-slate-50 fixed w-screen z-50">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                href="#pablo"
              >
                <img className="logoImg" src={logo} alt="logo"/>
              </a>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
            className={
              "lg:flex flex-grow items-center hidden"
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {user.isLogin ? (
                <>
                <div className="flex items-center bg-[#141728] px-5 py-3 mr-5 rounded-xl">
                  <p className="font-bold text-[22px] text-white">{user.user.user}</p>
                </div>
                 <div>
                  <img className="w-[60px] rounded-full" src={user.user.image}  />
                 </div>
                   <button onClick={logOutUser}
                      className="lemon px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      href="/"
                    >
                      <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Logout</span>
                    </button>
                </>
              ) : (
                <>
                    <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="/"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Explore</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/register" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">Register</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">Login</Link>
              </li>
                </>
              )}
            </ul>
          </div>
          </div>
        </nav>
        <div
          className={
              "flex justify-center bg-black h-screen top-0 w-screen transition-all fixed"
          }
          style={{ top: navbarOpen ? "" : "-100%", zIndex: "999" }}
          id="example-navbar-danger"
      >
          <button
                className="text-white cursor-pointer text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none absolute right-4 top-2"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
              <i className="fas fa-times"></i>
              </button> 
         <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
                <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 lemon justify-center mt-20"
                href="/"
                >
                <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 lemon justify-center mt-20"
                href="#pablo"
                >
                <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 lemon justify-center mt-20"
                href="#pablo"
                >
                <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Explore</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 lemon justify-center mt-20"
                href="/register"
                >
                <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Register</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 lemon justify-center mt-20"
                href="/login"
                >
                <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Login</span>
                </a>
            </li>
            </ul>
        </div>
      </>
    )
}

export default Navbar;