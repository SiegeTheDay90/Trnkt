import { Link } from 'react-router-dom';
import './styles/Dropdown.css'


const Dropdown = ({featured}) => {
    try{
        return (
            <div className="nav-dropdown-content">
                <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/${featured[0].type}s/${featured[0].id}`}>
                    <div className="nav-top-div-img"><img src={featured[0].photoUrl} alt={featured[0].type} /></div>
                    <div className="nav-top-div-name">{featured[0].name}</div>
                </Link></div>
                <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/${featured[1].type}s/${featured[1].id}`}>
                    <div className="nav-top-div-img"><img src={featured[1].photoUrl} alt={featured[1].type} /></div>
                    <div className="nav-top-div-name">{featured[1].name}</div>
                </Link></div>
                <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/${featured[2].type}s/${featured[2].id}`}>
                    <div className="nav-top-div-img"><img src={featured[2].photoUrl} alt={featured[2].type} /></div>
                    <div className="nav-top-div-name">{featured[2].name}</div>
                </Link></div>
                <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/${featured[3].type}s/${featured[3].id}`}>
                    <div className="nav-top-div-img"><img src={featured[3].photoUrl} alt={featured[3].type} /></div>
                    <div className="nav-top-div-name">{featured[3].name}</div>
                </Link></div>
                <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/${featured[4].type}s/${featured[4].id}`}>
                    <div className="nav-top-div-img"><img src={featured[4].photoUrl} alt={featured[4].type} /></div>
                    <div className="nav-top-div-name">{featured[4].name}</div>
                </Link></div>
                <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/${featured[5].type}s/${featured[5].id}`}>
                    <div className="nav-top-div-img"><img src={featured[5].photoUrl} alt={featured[5].type} /></div>
                    <div className="nav-top-div-name">{featured[5].name}</div>
                </Link></div>
                <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/${featured[6].type}s/${featured[6].id}`}>
                    <div className="nav-top-div-img"><img src={featured[6].photoUrl} alt={featured[6].type} /></div>
                    <div className="nav-top-div-name">{featured[6].name}</div>
                </Link></div>
                <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/${featured[7].type}s/${featured[7].id}`}>
                    <div className="nav-top-div-img"><img src={featured[7].photoUrl} alt={featured[7].type} /></div>
                    <div className="nav-top-div-name">{featured[7].name}</div>
                </Link></div>
            </div>
        )
    } catch {
        return <h1>Something went wrong!</h1>
    }
}

export default Dropdown;