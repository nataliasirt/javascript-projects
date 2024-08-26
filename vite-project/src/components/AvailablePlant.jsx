
const AvailablePlant = props => {

    // eslint-disable-next-line react/prop-types
    let {id, name, color, numAvailable} = props.plant;

    return (
        <p id={id}>
        {name} - {color} - {numAvailable} available
        </p>
    )
}
export default AvailablePlant