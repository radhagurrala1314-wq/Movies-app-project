import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { CgYoutube } from "react-icons/cg";
import './index.css'
const Footer =() => {
    return (
    <nav>
        <div className="footer_container">
            <div className="icon_card">
         <FaFacebook color="#fff" className="facebook"/>
         <FaInstagram color="#fff" className="instagram"/>
         <TfiTwitter color="#fff"  className="twitter" />
         <CgYoutube color="#fff" className="youtube"/>
         </div>
         <div className="footer_card">
            <ul className="order_link">
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notices</li>
                
            </ul>
            <ul className="order_link">
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                
            </ul>
            <ul className="order_link">
                <li>Gift cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
                
            </ul>
            <ul className="order_link">
            
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
            </ul>
         </div>
         <address className="footer_address">@2026-2046 MovieHub,inc.</address>
        </div>
        </nav>
    )
}
export default Footer