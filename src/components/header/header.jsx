import './Header.css'

import { Link } from "react-router-dom";
import logo from "../../assets/logoWealthHealth.png";

const Header = () => {


    return (
        <header className='header'>
            <Link to="/"><img className='logo' src={logo} alt="logo Wealth Health" /></Link>
            <div className='containerNav'>
                <h1>HRnet</h1>
                <nav>
                    <Link className='link' to="/">Create employee</Link>
                    <Link className='link' to="/employees">Current employees</Link>
                </nav>

            </div>
        </header>
    )
}

export default Header