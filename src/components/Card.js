import "../styles/Card.css"

const Card = ({image, title, year}) => {
    return (
        <div className='card'>
            <img src={image} crossOrigin="anonymous" alt={title}/>
            <div className='info'>
                <span className='title'>{title}</span>
                <span className='year'>{year}</span>
            </div>
        </div>
    );
}

export default Card