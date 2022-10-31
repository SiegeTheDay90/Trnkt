import { Link } from 'react-router-dom';
import './TopShopsGrid.css';
import './Navigation.css';


const DeveloperCard = () => {
    return (
        <div className="nav-dropdown-content">
            <div className="dev-card-left">
                <h3>Clarence Smith</h3>

                <Link to="https://www.linkedin.com/in/clarence-smith-31b21b59/">
                    <img src="https://lh3.googleusercontent.com/a/ALm5wu0ouL35dm_Op3iQPlIf28Jge-dEZQt77vDyJXAk=s360-p-rw-no" alt="Developer Picture"/>
                </Link>
            </div>
            <div className='dev-card-right'>
                <h3>Contact Links</h3>
                <ol>
                    <li><Link to="https://github.com/SiegeTheDay90/Trnkt">Github</Link></li>
                    <li><Link to="https://www.linkedin.com/in/clarence-smith-31b21b59/">LinkedIn</Link></li>
                </ol>
                <h3>Other Projects</h3>
                <ol>
                    <li><Link to="https://siegetheday90.github.io/Interceptor/">Interceptor (Game)</Link></li>
                    <li><Link to="https://rising-sign.herokuapp.com/">Rising Sign (Social App)</Link></li>
                </ol>
            </div>
        </div>
    )
}

export default DeveloperCard;