export default function About() {
    return (
        <>
            {/* <!--about-----------------------> */}
            <section id="about">
                {/* <!--text----------------------> */}
                <div className="about-text">
                    <h1>About Us</h1>
                    <h2>FreeLancing FrontEnd Developer</h2>
                    <p>Enjoy the ultimate web design editor. Divi is like Photoshop or Sketch for the web. 
                        It brings an advanced design interface to WordPress that both beginners and experts will 
                        fall in love with. It's incredibly smart, super flexible, amazingly powerful and visual 
                        by nature. This is how designing for the web is meant to be done.</p>
                    <button>View More Details</button>
                </div>
                {/* <!--about-model-----------------> */}
                <div className="about-model">
                    <img alt="model" src="images/about-model.png"/>	
                </div>
            </section>
        </>
    )
    
}
