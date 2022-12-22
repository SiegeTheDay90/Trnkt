import './Footer.css'


const Footer = () => {
  
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-column">
                <h3>About Trnkt</h3>
                <p>Trnkt is a Single Page Application built with React/Redux. Rails is used as a backend API. Data is stored using PostgreSQL and served as JSON  built with the Jbuilder gem.</p>
            </div>
            <div className="footer-column middle">
                <h3>My Links</h3>
                <ul>
                    <a href="https://docs.google.com/document/d/1rtd4u6MFfPYxZM9Lg754KpVTuHZwZyGJwlLLep8CLKQ/"><li>Resume</li></a>
                    <a href="https://www.linkedin.com/in/clarence-smith-nyc/"><li>LinkedIn</li></a>
                    <a href="https://github.com/SiegeTheDay90"><li>Github</li></a>
                    <a href="https://siegetheday90.github.io/Interceptor/"><li>Interceptor</li></a>
                </ul>
            </div>
            <div className="footer-column right">
                <h3>Contact</h3>
                <p>Phone: 646-374-7244</p>
                <p>Email: ClarenceSmith@gmail.com</p>
                <p>Location: Queens, NY, 11103</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;