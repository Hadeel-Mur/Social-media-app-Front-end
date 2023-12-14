import "./profile.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Posts from '../../components/posts/Posts'


function Profile() {
  return (
    <div className="profile">
      <div className="images">
       <img src="https://www.creativefabrica.com/wp-content/uploads/2023/05/08/Background-Graphics-69189184-1-1-580x387.png" 
       alt=""
       className="cover"/>
       <img src="https://wallpapers.com/images/featured-small/cute-black-girl-pictures-ityjf6m8v4kiyk9y.webp"
        alt=""
        className="pic"/>
      </div>

       
      <div className="profileContainer">
      <div className="userInfo">
      <span>Yara Hadad</span>

         <div className="center">
          <a href="http://facebook.com">
           <LinkedInIcon fontSize="large"/>
           </a>
           <a href="http://facebook.com">
           <InstagramIcon fontSize="large"/>
           </a>
           <a href="http://facebook.com">
           <FacebookIcon fontSize="large"/>
           </a>
           <a href="http://facebook.com">
           <PinterestIcon fontSize="large"/>
           </a>
           </div>

         <button>Follow</button>
         
      </div>
      <Posts/>
      </div>
      
    </div>
  )
}

export default Profile;