export default function MenuList({ menu }) {
    return (
        <ul>
            {menu.map((menuItem) => (
                <li key={menuItem.id}>{menuItem.name}</li>
            ))}
        </ul>
    )
}
