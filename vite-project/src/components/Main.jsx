import AvailablePlant from "./AvailablePlant"

const Main = () => {
    let testPlants = [
        {
            id: 1, 
            name: 'Hyacinth',
            color: 'blue',
            image: 'flower.png',
            numAvailable: 8,
        },
        {
            id: 2,
            name: 'Daffodil',
            color: 'yellow',
            image: '',
            numAvailable: 16,
        },
        {
            id: 3,
            name: 'tulip',
            color: 'red',
            image: "",
            numAvailable: 15

        }

    ]
    return(
        <main>
            <div>
                <h3>Available Plants </h3>
                <AvailablePlant plant = {testPlants[0]} />
                <AvailablePlant plant = {testPlants[1]} />
                <AvailablePlant plant = {testPlants[2]} />
            </div>
        </main>
    )
}
export default Main