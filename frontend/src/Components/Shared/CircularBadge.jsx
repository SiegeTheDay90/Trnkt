import './styles/CircularBadge.css'

const CircularBadge = ({object}) => {
    
    return (
        <>
        {
            object 
                ? <a href={object.url} className="badge-link" target="_blank">
                    <div className="circular-badge" >
                        <img className="cicular-badge-image" src={object.image}/>
                    </div>
                    <span className="name">{object.name}</span>
                </a>

            : <h4>No Data</h4>
        }
        </>
    )
}

export default CircularBadge;