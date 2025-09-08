import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
const Hero = () => {
    return(
        <div id='home' className="hero">
            <img src={profile_img} alt="" />
            <h1><span>I'm Fawzia Issa,</span> frontend developer based in Syria</h1>
            <p>I am a frontend developer from Aleppo, Syria with 3 years of experience</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}
export default Hero

// 2:16:00