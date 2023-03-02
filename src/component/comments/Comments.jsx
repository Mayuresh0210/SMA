import { useContext } from "react";
import "./comments.scss"
import {AuthContext} from "../../context/authContext";

 const Comments = () => {

    const{currentUser} = useContext(AuthContext);

    const comments =[ 

        {
            id: 1,
            name: "Shraddha",
            Userid:1,
            ProfilePic: "https://images.unsplash.com/photo-1519395592293-ebd9ed983949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" ,
            desc : "piki piki ponkey father had a donkey thats is his son....... ",
            img : "https://deongraham.com/wp-content/uploads/2015/08/the-importance-of-your-circle-of-friends.jpg",
          },
    
         {
            id: 2,
            name: "Shraddha",
            Userid:2,
            ProfilePic: "https://images.unsplash.com/photo-1519395592293-ebd9ed983949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" ,
            desc : "baval chees hai be ",
         },
        ];

  return (
    <div className="comments">
       <div className="write">
       <img src={currentUser.profilepic} alt="" />
       <input type="text" placeholder="write a comment........." /> 
       <button>Send</button>
       </div>

        {comments.map(comment =>(
        <div className="comment">

            <img src={comment.ProfilePic} alt="" />
           
            <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago </span>
        </div>

       ))
    }
        </div>
  )
}

export default Comments