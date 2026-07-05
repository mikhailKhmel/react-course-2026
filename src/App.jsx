import MainLayout from './components/layouts/main-layout/main-layout'
import RestaurantsLayout from './components/layouts/restaurants-layout/restaurants-layout'

function App() {
    return (
        <MainLayout header={'header'} footer={'footer'}>
            <RestaurantsLayout/>
        </MainLayout>
    )
}

export default App
