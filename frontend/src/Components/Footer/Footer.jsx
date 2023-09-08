import './Footer.css'


const Footer = () => {
  
  return (
    <footer className="footer-container App-footer">
        <div className="footer-column">
            <h3>About Trnkt</h3>
            <p>Trnkt is a Single Page Application built with React/Redux and Rails. Data is stored using PostgreSQL and media stored using AWS S3.</p>
            {/* <p style={{display: "flex", gap: "1vw"}}><p>PG</p><p>RAILS</p></p> */}
        </div>
        <div className="footer-column middle">
            <h3>My Links</h3>
            <ul>
                <a href="https://docs.google.com/document/d/1rtd4u6MFfPYxZM9Lg754KpVTuHZwZyGJwlLLep8CLKQ/" target="_blank"><li>Resume</li></a>
                <a href="https://www.linkedin.com/in/clarence-smith-nyc/" target="_blank"><li>LinkedIn</li></a>
                <a href="https://github.com/SiegeTheDay90" target="_blank"><li>Github</li></a>
                <a href="https://siegetheday90.github.io/Interceptor/" target="_blank"><li>Interceptor</li></a>
            </ul>
        </div>
        <div className="footer-column right">
            <h3>Contact</h3>
            <p>Phone: 646-374-7244</p>
            <p>Email: ClarenceSmith@gmail.com</p>
            <p>Location: Queens, NY, 11103</p>
        </div>
    </footer>
  )
}

export default Footer;