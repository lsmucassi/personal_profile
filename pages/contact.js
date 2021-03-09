export default function Contact() {
    return (
        <>
            {/* <!--contact-form-------------------> */}
            <section id="contact-form">
                <form>
                {/* <!--left---------------------------------------> */}
                    <div class="contact-left">
                        {/* style="border-bottom: 3px solid #1ED98B; */}
                        <h1 class="c-l-heading"><font>Writ</font>e us</h1>
                        {/* <!--name--------> */}
                        <div class="f-name">
                            <font >Name</font>
                            <input type="text" placeholder="Full Name"/>
                        </div>  
                        {/* <!--email--------> */}
                        <div class="f-email">
                            <font >Email</font>
                            <input type="email" placeholder="Example@gmail.com"/>
                        </div>
                    </div>
                    {/* <!--right-------------------------------------------> */}
                    <div class="contact-right">
                        {/* <!--message--------> */}
                        <div class="message">
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
