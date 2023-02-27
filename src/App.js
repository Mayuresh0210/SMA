import "./App.css";
import "./style.scss";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Leftbar from "./component/Leftnavbar/Leftbar";
import Rightbar from "./component/Rightnavbar/Rightbar";
import Home from "./page/home/Home";
import Profile from "./page/profile/Profile";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";



function App() {
const {currentUser} = useContext(AuthContext);

const {darkMode} = useContext(DarkModeContext);
console.log(darkMode);

  const Layout = () => {
   return (
    
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
    <Navbar/>
        <div style={{display: "flex"}}>
          <Leftbar/>
          <div style={{flex : 6 }}>
          <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    );
  };
  const ProtectedRoute = ({children}) =>{
  if(!currentUser){
    return <Navigate to="/Login"/>
  }
  return children
}

  const router =  createBrowserRouter([

    {
      path: "/",
      element: <ProtectedRoute>
        <Layout/>
        </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/profile/:id",
          element:<Profile/>,
        }
      ]
    },
    {
      path: "/Login",
      element:<Login/>,
    },
    {
      path: "/Register",
      element:<Register/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;