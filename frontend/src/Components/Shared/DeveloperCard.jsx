// import './TopShopsGrid.css';
// import './Navigation.css';
import './styles/DeveloperCard.css';


const DeveloperCard = () => {
    return (
        <div className="nav-dropdown-content">
            <div className="dev-card-left">
                <h3>Clarence Smith</h3>

                <a href="https://www.linkedin.com/in/clarence-smith-31b21b59/">
                    <img id="dev-img" src="https://trnkt-dev.s3.amazonaws.com/ProfilePic.png" alt="Developer Picture"/>
                </a>
            </div>
            <div className='dev-card-center'>
                <p>Hi, thanks for testing Trnkt. Here's a little about myself and the site:</p>
                <p>I'm a former educator with a passion for technology and software development. I have enjoyed developing with Ruby on Rails, React/Redux, Express, Node.js, Vanilla Javascript, HTML, CSS, and SQL. My interest in technology started with my love of videogames. I hope you also check out my Javascript game, Interceptor!</p>
                <p>Trnkt uses Ruby on Rails and React to serve and display information. The shop and product names, descriptions and owners were generated by the ruby gem Faker. The photos were  randomly chosen using Lorem Picsum. Shop, product, and user details are stored in tables by postgreSQL. Photos are stored  using Amazon S3 and associated with the appropriate items using Rails' Active Storage.</p>
            </div>
            <div className='dev-card-right'>
                <h3>Contact Links</h3>
                <ol>
                    <li><a href="https://github.com/SiegeTheDay90/Trnkt">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/clarence-smith-31b21b59/a">LinkedIn</a></li>
                </ol>
                <h3>Other Projects</h3>
                <ol>
                    <li className="pulse"><a href="https://siegetheday90.github.io/Interceptor/">Interceptor (Game)</a></li>
                    <li><a href="https://rising-sign.herokuapp.com/">Rising Sign (Social App)</a></li>
                </ol>
            </div>
        </div>
    )
}

export default DeveloperCard;