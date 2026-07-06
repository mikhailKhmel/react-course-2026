import MenuItem from './menu-item/menu-item'

export default function MenuList({ menu }) {
    if (!menu || menu.length === 0) return <p>Данные о меню отсутствуют</p>
    return (
        <ul>
            {menu.map((menuItem) => (
                <MenuItem key={menuItem.id} name={menuItem.name} />
            ))}
        </ul>
    )
}
