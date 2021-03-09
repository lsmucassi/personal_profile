import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
        <Html>
            <Head >
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
                integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
                crossOrigin="anonymous"
            />
            </Head>
            <body>
                <Main />
                <NextScript />
                <script type="text/javascript" src="js/JQuery3.3.1.js"></script>
                {/* <script type="text/javascript">
                
                    $(document).ready(function(){
                    $('.toggle').click(function(){
                        $('.toggle').toggleClass('active')
                        
                        $('nav ul').toggleClass('active-menu')    
                    })
                });
                </script> */}
            </body>
        </Html>
        )
    }
}

export default MyDocument