import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { userData } from "../features/authSlice";
import { auth, reset } from "../features/userAuhtSlice";
import imgacceuil from "../Assets/images/image.png";
import { toast } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
const Login = () => {
  const [nomuser, setNomuser] = useState("");
  const [motpass, setMotpass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [errors, setErrors] = useState({}); // State to store validation errors
   const [showLoginPopup, setShowLoginPopup] = useState(false);
   const [errorPopupMessage, setErrorPopupMessage] = useState(""); // State to store catch error message

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const redirectPath = location.state?.path || "/";

  // const handleLogin =()=>{
  //     auth.login(user)
  //     navigate(redirectPath)
  // }

  // const handleChange =(e)=>{
  //     const value = e.target.value;
  // setUser({...user, [e.target.name]:value});
  // console.log(setUser);
  // }

  const handleLogin = async (e) => {
    e.preventDefault();
      // Validate form inputs
      const validationErrors = {};
      if (!nomuser) validationErrors.nomuser = " veuillez renseigner le Nom Utilisateur ";
      if (!motpass) validationErrors.motpass = " veuillez renseigner le Mot de Passe ";
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setShowLoginPopup(true); // Hide the popup if there are validation errors
        setErrorPopupMessage("Invalid login credentials.");
        return;
      }
    const user = { nomuser, motpass };

    // const response = await axios.post(
    //   "http://localhost:8080/api/auth/signin",
    //   user
    // );
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        user
      );
      if (!response.data.id) {
        setShowLoginPopup(true); // Show the popup if login is unsuccessful
        setErrorPopupMessage("Invalid login credentials.");
        return;
      }
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(response.data.roles);
      if (response.data.roles.includes('ROLE_ADMIN')) {
        navigate("/dashboardAdmin");
      }else{
        
        navigate("/dashboardAcceuil");
        dispatch(userData(response.data.id));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle specific status codes
        if (error.response?.status === 401) {
          toast.error("nom d'utilisateur ou mot de passe incorrect. reessayer plutard.", {
            autoClose: 10000,
          });
        } else if (error.response?.status >= 400 && error.response?.status < 500) {
          toast.error("une Erreur s'est produit. reessayer plutard.", {
            autoClose: 5000,
          });
        } else if (error.response?.status >= 500) {
          toast.error("Erreur server. reessayer plutard.", {
            autoClose: 5000,
          });
        } else {
          toast.error("erreur innatendu. reessayer plutard.", {
            autoClose: 5000,
          });
        }
      } else {
        // Handle non-Axios errors
        toast.error("erreur innatendu. reessaiyer plutard.", {
          autoClose: 5000,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const userRole = JSON.parse(localStorage.getItem("user"));


  return (
    <>
    {/* <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-teal-500"> */}
    <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="md:w-3/5">
          <img
            className="w-full h-screen object-cover"
            src={imgacceuil}
            alt=""
          />
        </div>
        <div className="bg-white md:w-2/5 max-w-md p-6 rounded-lg m-auto">
          <h1 className="text-center text-3xl mb-32 font-semibold">KPI REPORT</h1>
      <h2 className="text-xl font-semibold text-center mb-4">Se Connecter</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="nomuser" className="block text-xs font-medium text-gray-700">Nom Utilisateur</label>
          <input
            type="text"
            id="nomuser"
            className={`mt-1 p-2 w-full border ${
              errors.nomuser ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            onChange={({ target }) => setNomuser(target.value)}
            name="nomuser"
            value={nomuser}
            required
          />
          {errors.nomuser && (
            <p className="text-red-500 text-xs mt-1">{errors.nomuser}</p>
          )}
        </div>
        <div>
          <label htmlFor="motpass" className="block text-xs font-medium text-gray-700">Mot de Passe</label>
          <input
            type="password"
            id="motpass"
            className={`mt-1 p-2 w-full border ${
              errors.motpass ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            onChange={({ target }) => setMotpass(target.value)}
            name="motpass"
            value={motpass}
            required
          />
          {errors.motpass && (
            <p className="text-red-500 text-xs mt-1">{errors.motpass}</p>
          )}
        </div>
        <div className="flex items-center justify-end">
          <NavLink
            to="#"
            className="text-xs text-[#FEB122] hover:underline"
          >
            Mot de passe oublié?
          </NavLink>
        </div>
        {isLoading ? (
          <div className="flex justify-center">
            <div className="w-6 h-6 border-t-4 border-[#FEB122] border-solid rounded-full animate-spin"></div>
          </div>
        ) : (
          <button
            type="submit"
            onClick={handleLogin}
            className="  bg-[#F6A821] text-white py-2 px-6 rounded-lg font-medium hover:bg-[#FEB122] transition duration-300 ease-in-out"
          >
            Envoyer
          </button>
        )}
        {showLoginPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-md">
              {errors.nomuser && (
                <p className="text-center text-red-500 font-medium">
                  {errors.nomuser}
                </p>
              )}
              {errors.motpass && (
                <p className="text-center text-red-500 font-medium">
                  {errors.motpass}
                </p>
              )}
              {showLoginPopup && !errors.nomuser && !errors.motpass && (
                <p className="text-center text-red-500 font-medium">
                  {errorPopupMessage}
                </p>
              )}
              <div className="mt-4 text-center">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => setShowLoginPopup(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="text-xs text-gray-600">
          Pas de compte?{" "}
          <NavLink
            to="/register"
            className="text-[#FEB122] hover:underline"
          >
            Créer un compte
          </NavLink>
        </div>
      </form>
    </div>
  </div>
    </> 
  );
};

export default Login;
