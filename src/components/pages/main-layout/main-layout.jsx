import { useContext } from 'react'
import ScrollBar from '../../common/scroll-bar/scroll-bar'
import classes from './main-layout.module.css'
import ThemeContext, {
    DARK_THEME,
} from '../../providers/theme-provider/theme-context'
import classNames from 'classnames'
import { Outlet } from 'react-router'
import Header from './header/header'

export default function MainLayout() {
    const { theme } = useContext(ThemeContext)
    return (
        <div
            className={classNames(classes.layout, {
                [classes.dark]: theme === DARK_THEME,
            })}
        >
            <ScrollBar />
            <header
                className={classNames(classes.header, {
                    [classes.dark]: theme === DARK_THEME,
                })}
            >
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer
                className={classNames(classes.footer, {
                    [classes.dark]: theme === DARK_THEME,
                })}
            >
                react-course-2026
            </footer>
        </div>
    )
}
