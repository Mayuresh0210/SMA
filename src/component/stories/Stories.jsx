import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss"

const Stories = () => {
    const {currentUser} = useContext(AuthContext);

    const stories =[ 

        {
            id: 1,
            name: "Shraddha",
            img: "https://images.unsplash.com/photo-1519395592293-ebd9ed983949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" ,
         },
         {
            id: 2,
            name: "Shraddha",
            img: "https://images.unsplash.com/photo-1519395592293-ebd9ed983949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" ,
         },
         {
            id: 3,
            name: "Shraddha",
            img: "https://images.unsplash.com/photo-1519395592293-ebd9ed983949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" ,
         },
         {
            id: 4,
            name: "Shraddha",
            img: "https://images.unsplash.com/photo-1519395592293-ebd9ed983949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" ,
         },
        
    ];


return(
  <div className="stories">
     <div className="story">
         <img src={currentUser.profilepic} alt=""/>
         <span>{currentUser.name}</span>
         <button>+</button>
        </div>
    {stories.map(story => (
        <div className="story" key={story.id}>
         <img src={story.img} alt=""/>
         <span>{story.name}</span>
        </div>

    ))}
  </div>
)

};

export default Stories