import "./post.scss";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import {  useState } from "react";

const Post = ({post}) => {

  const[commentOpen, setCommentOpen] = useState(false)

  const liked = false;
  return (
    <div className="post">
      <div className="container">
      <div className="user">
      <div className="userInfo">
       <img src={post.ProfilePic} alt=""/>
       <div className="details">
        <Link 
           to={`/profile/${post.Userid}`} 
           style={{textDecoration:"none", color:"inherit"}}>
           <span className="name">{post.name}</span>
        </Link>
        <span className="date">1 min ago</span>
       </div>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img src={post.img} alt="" />
      </div>
      <div className="Info">
      <div className="items">
        {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>  }
        12 likes
      </div>
      <div className="items" onClick={()=>setCommentOpen(!commentOpen)}>
        <TextsmsOutlinedIcon/>
        12 comments
      </div>
      <div className="items">
      <ShareOutlinedIcon/>
      share
      </div>
      </div>
      { commentOpen && <Comments/>}
    </div>
    </div>
  );
};

export default Post;