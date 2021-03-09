export default function Contact() {
    return (
        <>
            {/* <!--contact-form-------------------> */}
            <section id="contact-form">
                <form>
                {/* <!--left---------------------------------------> */}
                    <div className="contact-left">
                        {/* style="border-bottom: 3px solid #1ED98B; */}
                        <h1 className="c-l-heading"><font>Writ</font>e us</h1>
                        {/* <!--name--------> */}
                        <div className="f-name">
                            <font >Name</font>
                            <input type="text" placeholder="Full Name"/>
                        </div>  
                        {/* <!--email--------> */}
                        <div className="f-email">
                            <font >Email</font>
                            <input type="email" placeholder="Example@gmail.com"/>
                        </div>
                    </div>
                    {/* <!--right-------------------------------------------> */}
                    <div className="contact-right">
                        {/* <!--message--------> */}
                        <div className="message">
                            <font >Message</font>
                            <textarea name="message" rows="5" cols="20" placeholder="Write Message..."></textarea>
                        </div>
                        {/* <!--submit-btn------------> */}
                        <button>submit</button>
                    </div>                
                </form>
            </section>
        </>
    )
    
}
