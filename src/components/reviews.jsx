export default function Reviews({ reviews }) {
    if (!reviews || reviews.length === 0)
        return <p>Данные об отзывах отсутствуют</p>
        
    return (
        <ul>
            {reviews.map((review) => (
                <li key={review.id}>{review.text}</li>
            ))}
        </ul>
    )
}
