import { restaurants } from './mocks/mock'

function App() {
    return (
        <div>
            {restaurants.map((restaurant) => (
                <div key={restaurant.id}>
                    <h1>{restaurant.name}</h1>
                    <h3>Меню</h3>
                    <ul>
                        {restaurant.menu.map((menuItem) => (
                            <li key={menuItem.id}>{menuItem.name}</li>
                        ))}
                    </ul>
                    <h3>Отзывы</h3>
                    <ul>
                        {restaurant.reviews.map((review) => (
                            <li key={review.id}>{review.text}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default App
