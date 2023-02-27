import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => { 
  return (

    <div className="Register">
    <div className="card">
      <div className="left">
        <h1>LAMA SOCIAL</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Impedit provident praesentium labore facilis nam repellendus perspiciatis cumque molestias, nulla perferendis enim autem dicta magnam.
           Exercitationem repellendus quidem expedita illum placeat.</p>
           <span> you have an account </span>
           <Link to="/Login">
          <button >Login</button>
          </Link>
      </div>
      <div className="Right">
      <h1>Login</h1>
        <form>
          <input type = "text" Placeholder = "Enter username "/>
          <input type = "email" Placeholder = "Enter email "/>
          <input type = "password" Placeholder = "Enter passwaord "/>
          <input type = "text" Placeholder = "Name "/>
          
          <button >Register</button>
         
        </form>
      </div>
    </div>
   </div>
  );
};



export default Register;