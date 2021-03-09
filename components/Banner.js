import Link from 'next/link'

export default function Banner() {
    return (
        <>
        {/* <!--name---------------------------> */}
        <div className="name">
        {/* <!--hello-------> */}
        <p>Hello</p>
        {/* <!--name---> */}
        <h1>I'm <font color="#17d1ac">Linda</font> Mucassi</h1>
        {/* <!--details---------------> */}
        <p className="details">A Software Engineer and a Data Scientist. I am passionate about tech and life and 
            how the two share the social space, and yes coffee comes first because that is the bits of 
            making awesome code. I am always open to learning new concepts and solving problems as they come. </p>
        {/* <!--cv button--------------------> */}
        <Link href="#contact-form" ><a className="cv-btn">Connect</a></Link>
        
            
        </div>
            {/* <!--down arrow--------------> */}
            <div className="black-line" ></div>
            {/* <!--social----------------> */}
            <div className="social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>	
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>	
        </div>
        </>
    )
    
}
