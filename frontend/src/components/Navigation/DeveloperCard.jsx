import { Link } from 'react-router-dom';
import './TopShopsGrid.css';
import './Navigation.css';


const DeveloperCard = () => {
    return (
        <div className="nav-dropdown-content">
            <div className="dev-card-left">
                <h3>Clarence Smith</h3>

                <a href="https://www.linkedin.com/in/clarence-smith-31b21b59/">
                    <img src="https://lh3.googleusercontent.com/a/ALm5wu0ouL35dm_Op3iQPlIf28Jge-dEZQt77vDyJXAk=s360-p-rw-no" alt="Developer Picture"/>
                </a>
            </div>
            <div className='dev-card-right'>
                <h3>Contact Links</h3>
                <ol>
                    <li><a href="https://github.com/SiegeTheDay90/Trnkt">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/clarence-smith-31b21b59/a">LinkedIn</a></li>
                </ol>
                <h3>Other Projects</h3>
                <ol>
                    <li><a href="https://siegetheday90.github.io/Interceptor/">Interceptor (Game)</a></li>
                    <li><a href="https://rising-sign.herokuapp.com/">Rising Sign (Social App)</a></li>
                </ol>
            </div>
        </div>
    )
}

export default DeveloperCard;