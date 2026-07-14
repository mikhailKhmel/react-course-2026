import { useContext } from 'react'
import ScrollBar from '../../scroll-bar/scroll-bar'
import classes from './main-layout.module.css'
import ThemeContext, {
    DARK_THEME,
} from '../../providers/theme-provider/theme-context'
import classNames from 'classnames'

export default function MainLayout({ header, children, footer }) {
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
                {header}
            </header>
            <main>{children}</main>
            <footer
                className={classNames(classes.footer, {
                    [classes.dark]: theme === DARK_THEME,
                })}
            >
                {footer}
            </footer>
        </div>
    )
}
