export default function Navbar() {
    return (
        <>
            {/* <!--navigation--------------------------------> */}
            <nav>
                {/* <!--logo---> */}
                <a href="#" className="logo">Linda Mucassi</a>
                {/* <!--menu---------> */}
                <div className="toggle"></div>
                <ul className="menu">
                <li className=""><a href="#main" >Home</a></li>	
                <li><a href="#about">About</a></li>	
                <li><a href="#services">Services</a></li>	
                <li><a href="#portfolio">Portfolio</a></li>		
                <li><a href="#contact-form">Contact</a></li>	
                </ul>
                {/* <!--language--> */}
                <a href="#" classNameName="lang">En</a>
            </nav>
        </>
    )
    
}
