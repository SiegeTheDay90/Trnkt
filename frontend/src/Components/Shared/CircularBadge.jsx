import './CircularBadge.css'

const CircularBadge = ({object}) => {
    
    return (
        <>
        {
            object 
                ? <a href={object.url} target="_blank">
                    <div className="circular-badge" >
                        <img className="cicular-badge-image" src={object.image}/>
                        <span className="name">{object.name}</span>
                    </div>
                </a>

            : <h4>No Data</h4>
        }
        </>
    )
}

export default CircularBadge;