import Post from "../post/Post";
import "./posts.scss";

 const Posts = () => {
  const posts =[ 

    {
        id: 1,
        name: "Shraddha",
        Userid:1,
        ProfilePic: "https://images.unsplash.com/photo-1519395592293-ebd9ed983949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" ,
        desc : "enjoying day!!!!!!!!!!!!!!! ",
        img : "https://deongraham.com/wp-content/uploads/2015/08/the-importance-of-your-circle-of-friends.jpg",
      },

     {
        id: 2,
        name: "Shraddha",
        Userid:2,
        ProfilePic: "https://images.unsplash.com/photo-1519395592293-ebd9ed983949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" ,
        desc : "enjoying day ",
     },
    ];
  return <div className="posts">
      {posts.map((post) => (
          <Post post={post} key={post.id}/>
      ))}
    </div>;
  
};
export default Posts;