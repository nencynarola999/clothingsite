import React from "react"
import { FaBasketballBall, FaFacebookF, FaInstagram ,FaTwitter,FaYoutube} from "react-icons/fa";

const links = [
    { id: 1, icon: <FaTwitter/>, url: "https://twitter.com/i/flow/login" },
    { id: 2, icon: <FaFacebookF/>, url: "https://www.facebook.com/" },
    { id: 3, icon: <FaBasketballBall/>, url: "#" },
    { id: 4, icon: <FaInstagram/>, url: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1" },
    { id: 5, icon: <FaYoutube/> , url: "https://www.youtube.com/" }
  ];
const SocialLinks = (props) => {
    const {className="string"} = props;
    // console.log(props,"njgnjg")
  return (
    <nav>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer"  className={className}>
         {icon}
        </a>
      ))}
    </nav>
  )
}

export default SocialLinks