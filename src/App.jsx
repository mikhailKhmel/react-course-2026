import { restaurants } from './mocks/mock'
import MenuList from './components/menu-list'
import Reviews from './components/reviews'

function App() {
    return (
        <div>
            {restaurants.map((restaurant) => (
                <div key={restaurant.id}>
                    <h2>{restaurant.name}</h2>
                    <h3>Меню</h3>
                    <MenuList menu={restaurant.menu} />
                    <h3>Отзывы</h3>
                    <Reviews reviews={restaurant.reviews} />
                </div>
            ))}
        </div>
    )
}

export default App
