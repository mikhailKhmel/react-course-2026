import { useContext } from 'react'
import ThemeContext from '@/components/providers/theme-provider/theme-context'

const ThemeButton = () => {
    const { onToggleTheme } = useContext(ThemeContext)

    return <button onClick={onToggleTheme}>Сменить тему</button>
}

export default ThemeButton
