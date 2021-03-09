import Link from "next/link";

export default function Navbar() {
    return (
        <>
            {/* <!--navigation--------------------------------> */}

            <nav className="shadow">
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i class="fas fa-chevron-circle-down"></i>
                </label>
                <label>
                    <a href="#" className="logo">Linda Mucassi</a>
                </label>
                <ul className="menu">
                        {/* <li className="">
                            <Link href="#main"><a >Home</a></Link>
                        </li> */}
                        <li className="">
                            <Link href="#services"><a >Services</a></Link>
                        </li>
                        <li className="">
                            <Link href="#portfolio"><a >Portfolio</a></Link>
                        </li>
                        <li className="">
                            <Link href="#contact-form"><a >contact</a></Link>
                        </li>
                    </ul>
                        {/* <li>
                            <a href="#about">About</a></li>	
                        <li>
                            <a href="#services">Services</a></li>	
                        <li>
                            <a href="#portfolio">Portfolio</a></li>		
                        <li>
                            <a href="#contact-form">Contact</a></li>	
                    </ul> */}
            </nav>




            {/* <nav> */}
                {/* <!--logo---> */}
                
                {/* <!--menu---------> */}
                {/* <div className="toggle"></div> */}
                    
                {/* <!--language--> */}
                {/* <a href="#" classNameName="lang">En</a> */}
            {/* </nav> */}
        </>
    )
    
}
