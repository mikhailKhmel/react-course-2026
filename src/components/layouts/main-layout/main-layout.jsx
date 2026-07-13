import { useContext } from 'react'
import ScrollBar from '../../scroll-bar/scroll-bar'
import classes from './main-layout.module.css'
import ThemeContext from '../../contexts/theme-context'
import classNames from 'classnames'
import { DARK_THEME } from '../../../App'

export default function MainLayout({ header, children, footer }) {
    const theme = useContext(ThemeContext)
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
