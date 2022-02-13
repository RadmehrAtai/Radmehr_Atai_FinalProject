import "../styles/Input.css"

const Input = ({handleSearch}) => {
    return (
        <div className="input-group">
            <input className='search'
                   placeholder='Search...'
                   onChange={handleSearch}/>
        </div>
    );
}

export default Input