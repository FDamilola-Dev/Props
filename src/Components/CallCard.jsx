

const CallCard = (props) => {
    return (
        <div className="propCard">

            <img src={ props.image} alt="" id="img"/>
            <div className="info">
            <h1> {props.Name}</h1>
            <hr/>
            <h4> <span>Age</span> :{props.Age} </h4>
            <h4> <span>Location</span>:{props.Location}</h4>
            </div>
        </div>
    )
}
export default CallCard;