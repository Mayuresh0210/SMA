import "./profile.scss";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../component/posts/Posts"

const Profile = () => {

    return (
     <div className="profile">
        <div className="images">
        <img src="https://1.bp.blogspot.com/-Ckmlfl_GnP0/YA58eYAcLSI/AAAAAAAAEuk/4JlYsTGWUA8zwLzaw7UoKoYedPtVwuhUQCLcBGAsYHQ/s851/100%252B%2Bunique%2Bstylish%2BFacebook%2Bcover%2Bphotos%2Bfor%2Ball%2Btypes%2Bof%2Bboys%2Band%2Bgirls.jpg" 
        alt="" 
        className="coverpic" />
        <img src="https://wallpapers.com/images/high/cool-profile-pictures-red-anime-fw4wgkj905tjeujb.webp" alt="" 
         className="profilepic"/>
        </div>
        <div className="profilecontainer">
            <div className="Uinfo">
                <div className="left">
                    <a href="http://facebook.com" >
                        <FacebookTwoToneIcon fontSize="large"/>
                    </a>
                    <a href="http://facebook.com" >
                        <LinkedInIcon fontSize="large"/>
                    </a>
                    <a href="http://facebook.com" >
                        <InstagramIcon fontSize="large"/>
                    </a>
                    <a href="http://facebook.com" >
                        <PinterestIcon fontSize="large"/>
                    </a>
                    <a href="http://facebook.com" >
                        <TwitterIcon fontSize="large"/>
                    </a>
                    <a href="http://facebook.com" >
                        <FacebookTwoToneIcon fontSize="large"/>
                    </a>
                </div>
                <div className="center">
                    <span>honey singh</span>
                     <div className="info">
                        <div className="item">
                            <PlaceIcon/> 
                            <span>USA</span>
                        </div>
                        <div className="item">
                            <LanguageIcon/> 
                            <span>amhi.dev</span>
                        </div>
                     </div>
                     <button>follow</button>
                </div>
                <div className="right">
                    <EmailOutlinedIcon/>
                    <MoreVertIcon/>

                </div>
            </div>
            <Posts/>
        </div>
        
     </div>
)
}

export default Profile;