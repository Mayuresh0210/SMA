import Stories from "../../component/stories/Stories";
import  Posts from "../../component/posts/Posts";
import "./home.scss";

const Home = () => {

    return (
        <div className="Home">
            
            <Stories/>
            <Posts/>
            

        </div>
    )

}

export default Home;