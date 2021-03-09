export default function Services() {
    return (
        <>
            {/* <!--services--------------------> */}
            <section id="services">
                {/* <!--heading--------------> */}
                <div className="s-heading">
                    <h1>Services</h1>
                    <p>Here Is The Some Servies Which We Provide You.</p>
                </div>
                {/* <!--services-box-container---------> */}
                <div className="b-container">
                {/* <!--box-1----------------> */}
                <div className="s-box">
                    {/* <!--img-------------> */}
                    <div className="s-b-img">
                        {/* <!--type-----------> */}
                        <div className="s-type">Front-End</div>
                            {/* <!--name-------> */}
                            <img src="images/s1.png" />
                        </div>
                        {/* <!--text-----------------> */}
                        <div className="s-b-text">
                            <a href="#">With Divi, every part of your website is customizable. You have 
                                complete freedom to create the perfect website for you or your clients. 
                                Easily change colors, fonts and text styles. Apply stunning animations.</a>	
                        </div>
                    </div>
                    {/* <!--box-2----------------> */}
                    <div className="s-box">
                        {/* <!--img-------------> */}
                        <div className="s-b-img">
                            {/* <!--type-----------> */}
                            <div className="s-type">Back-End</div>
                                {/* <!--name-------> */}
                                <img src="images/s2.png" />
                            </div>
                            {/* <!--text-----------------> */}
                            <div className="s-b-text">
                                <a href="#">With Divi, every part of your website is customizable. You have complete 
                                    freedom to create the perfect website for you or your clients. Easily change colors, 
                                    fonts and text styles. Apply stunning animations.</a>	
                            </div>
                        </div>
                        {/* <!--box-3----------------> */}
                        <div className="s-box">
                            {/* <!--img-------------> */}
                            <div className="s-b-img">
                                {/* <!--type-----------> */}
                                <div className="s-type">SEO</div>
                                {/* <!--name-------> */}
                                <img src="images/s3.jpg" />
                            </div>
                            {/* <!--text-----------------> */}
                            <div className="s-b-text">
                                <a href="#">With Divi, every part of your website is customizable. You have complete freedom 
                                    to create the perfect website for you or your clients. Easily change colors, fonts and 
                                    text styles. Apply stunning animations.</a>	
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
    
}
