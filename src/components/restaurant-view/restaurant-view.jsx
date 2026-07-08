import ReviewForm from '../../review-form/review-form'
import MenuList from '../menu-list'
import Reviews from '../reviews/reviews'

export default function RestaurantView({ restaurant, onAddReview }) {
    
    
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <h3>Меню</h3>
            <MenuList menu={restaurant.menu} />
            <h3>Отзывы</h3>
            <Reviews reviews={restaurant.reviews} />
            <ReviewForm onAddReview={onAddReview}/>
        </div>
    )
}
