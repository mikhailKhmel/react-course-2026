import ScrollBar from '../../scroll-bar/scroll-bar'
import classes from './main-layout.module.css'

export default function MainLayout({ header, children, footer }) {
    return (
        <div className={classes.layout}>
            <ScrollBar />
            <header className={classes.header}>{header}</header>
            <main>{children}</main>
            <footer className={classes.footer}>{footer}</footer>
        </div>
    )
}
