import { useEffect, useState } from 'react'

export default function ScrollBar() {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            const width = window.scrollY
            const viewPortHeight =
                document.body.scrollHeight - window.innerHeight
            setWidth((width / viewPortHeight) * 100)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${width}%`,
                height: '2px',
                backgroundColor: 'red',
            }}
        />
    )
}
