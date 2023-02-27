import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {

    const {toggle,darkMode} = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);

    
    return (
        <div className="Navbar">
         <div className="left">
            <Link to="/" style={{ textDecoration:"none"}}>
            <span>AAmhiSocial</span>
            </Link>
            <HomeOutlinedIcon/>
            
            {darkMode ?  ( <WbSunnyOutlinedIcon onClick={toggle}/>) : (<DarkModeOutlinedIcon onClick={toggle}/>) }
            <GridViewOutlinedIcon/>
            <div className="Search">
            <SearchOutlinedIcon/>
            <input type="text" placeholder="Search......"/> 
            </div>
        </div>
        <div className="right">
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="User">
         <img src={currentUser.profilepic}
         alt="" />
         <span>{currentUser.name}</span>
        </div>
        </div>
        </div>
    );
};

export default Navbar