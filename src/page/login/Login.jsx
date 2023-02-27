import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => { 
  const {login} = useContext(AuthContext);

  const handlelogin = () =>{
       login();
  };

  return (

    <div className="Login">
    <div className="card">
      <div className="left">
        <h1>hello world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Impedit provident praesentium labore facilis nam repellendus perspiciatis cumque molestias, nulla perferendis enim autem dicta magnam.
           Exercitationem repellendus quidem expedita illum placeat.</p>
           <span>Don't you have an account </span>
           <Link to="/Register">
          <button >Register</button>
          </Link>
      </div>
      <div className="Right">
      <h1>Login</h1>
        <form>
          <input type = "text" Placeholder = "Enter username "/>
          <input type = "password" Placeholder = "Enter passwaord "/>
          <button onClick={handlelogin}>Login</button>

        </form>
      </div>
    </div>
   </div>
  );
};



export default Login;