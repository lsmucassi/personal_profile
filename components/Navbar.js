export default function Navbar() {
    return (
        <>
            {/* <!--navigation--------------------------------> */}
            <nav>
                {/* <!--logo---> */}
                <a href="#" class="logo">Linda Mucassi</a>
                {/* <!--menu---------> */}
                <div class="toggle"></div>
                <ul class="menu">
                <li class="active"><a href="#main" >Home</a></li>	
                <li><a href="#about">About</a></li>	
                <li><a href="#services">Services</a></li>	
                <li><a href="#portfolio">Portfolio</a></li>		
                <li><a href="#contact-form">Contact</a></li>	
                </ul>
                {/* <!--language--> */}
                <a href="#" class="lang">En</a>
            </nav>
        </>
    )
    
}